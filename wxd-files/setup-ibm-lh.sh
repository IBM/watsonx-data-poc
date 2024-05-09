#!/bin/bash

# setup watsonx.data on client

LH_CLIENT_PATH="/root/ibm-lh-client"
host="watsonxdata"
name="watsonxdata"
user="ibmlhadmin"
pw="password"

# Define your key-value pairs
declare -A names
names["mockpoc-presto"]="8443"
names["mockpoc-wxd"]="9443" 

for name in "${!names[@]}"
do
    port=${names[${name}]}
    #echo "Key: $name, Value: ${port}"

    connect_cmd="${LH_CLIENT_PATH}/bin/connect-lh --op=add --name=${name} --host=${host} --port=${port} --username=${user} --password=${pw}"
    cert_cmd="${LH_CLIENT_PATH}/bin/cert-mgmt --op=add --host=${host} --port=${port}"
    config_cmd="${LH_CLIENT_PATH}/bin/ibm-lh config add_dev --name ${name} --host ${host} --port ${port}"

    echo "-----------------------------------------------------------------"
    echo "Add username and password for authentication ${host} and ${port}"
    echo "-----------------------------------------------------------------"
    echo "command: ${connect_cmd}"
    ${connect_cmd}
    echo ; echo

    echo "-----------------------------------------------------------------"
    echo "Add SSL certificate to ${host} and ${port}"
    echo "-----------------------------------------------------------------"
    echo "command: ${cert_cmd}"
    ${cert_cmd}
    echo ; echo

    echo "-----------------------------------------------------------------"
    echo "Configure connectivity for name:${name} port: ${port}"
    echo "-----------------------------------------------------------------"
    echo "command: ${config_cmd}"
    ${config_cmd}
    echo ; echo
done

# set the current instance to the wxd port
wxd_port="9443"
for instance_name in "${!names[@]}"; do
    if [[ "${names[$instance_name]}" == "${wxd_port}" ]]; then
    ibm_lh_cmd="${LH_CLIENT_PATH}/bin/ibm-lh config select --current_instance ${instance_name}"
        echo "-----------------------------------------------------------------"
        echo "command: ${ibm_lh_cmd}"
        ${ibm_lh_cmd}
        echo "-----------------------------------------------------------------"
        break
    fi
done