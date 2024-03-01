![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix D – Query Definitions and Timings

## Watson's Queries 
![Watsons](wxd-images/poc-query.png)
There are three sets of queries that need to be executed as part of the POC:

* Simple
* Intermediate
* Complex

For each set of queries, there is a serial run stream (run each query three times serially and compute the average) and a concurrent run stream (to test various loads).

The SQL queries can be found in the following links:

* [Serial run stream](wxd-files/mockpoc-serial.tar.gz)
* [Concurrent run stream](wxd-files/mockpoc-concurrent.tar.gz)

## Query Execution Times
The execution time for the queries on the data warehouse are listed below. 

!!! note

    These timings were run on a Netezza data warehouse running on the cloud. Use these as a basis to compare your performance on watsonx.data. 


<pre style="font-size: small; color: darkgreen; overflow: auto">
Query               Time(s)
------------------- ------------
simple-01.sql       0.0570000000
simple-02.sql       0.0500000000
simple-03.sql       0.0480000000
simple-04.sql       0.0550000000
simple-05.sql       0.0460000000
simple-06.sql       0.0480000000
simple-07.sql       0.0450000000
simple-08.sql       0.1790000000
simple-09.sql       0.0650000000
simple-10.sql       0.3680000000
simple-11.sql       0.0560000000
simple-12.sql       0.0690000000
simple-13.sql       0.0430000000
simple-14.sql       0.0430000000
simple-15.sql       0.0450000000
intermediate-01.sql 0.0800000000
intermediate-02.sql 0.0430000000
intermediate-03.sql 0.0530000000
intermediate-04.sql 0.2040000000
intermediate-05.sql 0.0660000000
intermediate-06.sql 0.0590000000
intermediate-07.sql 0.0760000000
intermediate-08.sql 0.0950000000
intermediate-09.sql 0.0710000000
intermediate-10.sql 0.1010000000
complex-01.sql      0.0990000000
complex-02.sql      0.3100000000
complex-03.sql      0.1620000000
complex-04.sql      0.2110000000
complex-05.sql      0.0660000000
complex-06.sql      0.1620000000
complex-07.sql      0.0740000000
complex-08.sql      0.0960000000 
</pre>

## Watsons JMeter HTML Reports

The following links display the serial and concurrent reports when running the queries on the existing data warehouse.

* [Serial Report](./serial-report/index.html)