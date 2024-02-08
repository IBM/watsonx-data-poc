# Passwords

This table lists the passwords for the services that have "fixed" userids and passwords.

|Service|Userid|Password
|-------|------|--------|
|Virtual Machine|watsonx|watsonx.data
|Virtual Machine|root|watsonx.data
|watsonx.data UI|ibmlhadmin|password
|Presto|ibmlhadmin|password
|Minio|Generated|Generated
|Postgres|admin|Generated
|Portainer|admin|watsonx.data
|Thrift|lh-default|Generated
|Jupyter||watsonx.data
|Milvus|ibmlhadmin|password
|SSH Browser|watsonx|watsonx.data

Use the following commands to get the generated userid and password for MinIO.
```
export LH_S3_ACCESS_KEY=$(docker exec ibm-lh-presto printenv | grep LH_S3_ACCESS_KEY | sed 's/.*=//')
export LH_S3_SECRET_KEY=$(docker exec ibm-lh-presto printenv | grep LH_S3_SECRET_KEY | sed 's/.*=//')
echo "MinIO Userid  : " $LH_S3_ACCESS_KEY
echo "MinIO Password: " $LH_S3_SECRET_KEY
```

Use the following command to get the password for Postgres.
```
export POSTGRES_PASSWORD=$(docker exec ibm-lh-postgres printenv | grep POSTGRES_PASSWORD | sed 's/.*=//')
echo "Postgres Userid   : admin"
echo "Postgres Password : " $POSTGRES_PASSWORD
```

You can get all passwords for the system when you are logged in by issuing the following command:
```bash
cat /certs/passwords
```

If the passwords do not appear to work, you may need to regenerate them. The following must be run as the `root` user.

```bash
sudo su -
passwords
```

The `passwords` command will refresh the passwords and also display them. If this command is not run as root, an error message will be displayed because the password file cannot be updated as the `watsonx` user.

![Browser](wxd-images/wxd-showpasswords.png)