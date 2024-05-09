#!/bin/bash

# setup watsonx.data on client

LH_CLIENT_PATH="/root/ibm-lh-client"

host="mockpoc1.fyre.ibm.com"
name="mockpoc1"
user="ibmlhadmin"
pw="password"


# Define your key-value pairs
declare -A names
names["mockpoc1-wxd"]="9443"
names["mockpoc1-presto"]="8443"

for name in "${!names[@]}"
do
    port=${names[${name}]}
    echo "Key: $name, Value: ${port}"
    cert_cmd="${LH_CLIENT_PATH}/bin/cert-mgmt --op=remove --host=${host} --port=${port}"
    connect_cmd="${LH_CLIENT_PATH}/bin/connect-lh --op=remove --name=${name} --host=${host} --port=${port} --username=${user} --password=${pw}"
    ibm_lh_cmd="${LH_CLIENT_PATH}/bin/ibm-lh config rm --name ${name}"
    echo "${connect_cmd}"
    ${connect_cmd}
    echo "----------------------------------------"
    echo "${ibm_lh_cmd}"
    ${ibm_lh_cmd}
    echo "----------------------------------------"
    echo "${cert_cmd}"
    ${cert_cmd}
    echo "----------------------------------------"
done