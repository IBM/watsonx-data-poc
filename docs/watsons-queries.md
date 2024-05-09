![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix D – Query Definitions 

## Watson's Queries 
![Watsons](wxd-images/poc-query.png)
There are three sets of queries that need to be executed as part of the POC:

* Simple
* Intermediate
* Complex

For each set of queries, there is a serial run stream (run each query three times serially and compute the average) and a concurrent run stream (to test various loads).

The SQL queries can be found in the following links:

* [Serial run stream](wxd-files/mockpoc-serial.tar.gz)

!!! abstract "Download Serial Run Stream"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/mockpoc-serial.tar.gz -O mockpoc-serial.tar.gz
    ```

* [Concurrent run stream](wxd-files/mockpoc-concurrent.tar.gz)

!!! abstract "Download Concurrent Stream"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/mockpoc-concurrent.tar.gz -O mockpoc-concurrent.tar.gz
    ```


