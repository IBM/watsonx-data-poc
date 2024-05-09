![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix C – Object Definitions

## Watson's Great Outdoors Company Data Warehouse Model

![Watsons](wxd-images/poc-grid.png)
This model contains financial, human resources, and sales and marketing information for the fictional company, The Sample Outdoors. The model accesses a dimensional relational data source.

The DDL file can be downloaded with the following URL: 
[Watsons Go DDL](wxd-files/watsons-go.sql)

Alternatively, use the following command to save the file inside your image.

!!! abstract "Download Watsons Go DDL"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/watsons-go.sql -O watsons-go.sql
    ```

The data to load into the tables can be found in the following URL:
[Watsons Go Data](wxd-files/watsons-go-pocdata.tar.gz)

If you want to load the data directly in your virtual machine, use the following command in a terminal shell. Change the name of the output file with the `-O` option. 

!!! abstract "Download Watsons Go Data"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/watsons-go-pocdata.tar.gz -O pocdata.tar.gz
    ```