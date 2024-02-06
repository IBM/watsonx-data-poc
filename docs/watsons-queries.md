![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix D – Query Definitions and Timings

## Watsons Queries 
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
simple-01.sql       1.529060627 seconds
simple-02.sql       1.476164566 seconds
simple-03.sql       1.482101832 seconds
simple-04.sql       1.480695440 seconds
simple-05.sql       1.454873974 seconds
simple-06.sql       1.476483577 seconds
simple-07.sql       1.472377979 seconds
simple-08.sql       1.769063665 seconds
simple-09.sql       1.693034872 seconds
simple-10.sql       1.988209064 seconds
simple-11.sql       1.469593858 seconds
simple-12.sql       1.523729453 seconds
simple-13.sql       1.476710008 seconds
simple-14.sql       1.457579428 seconds
simple-15.sql       1.548640598 seconds
intermediate-01.sql 1.506923581 seconds
intermediate-02.sql 1.456880916 seconds
intermediate-03.sql 1.493955653 seconds
intermediate-04.sql 1.622981975 seconds
intermediate-05.sql 1.476399535 seconds
intermediate-06.sql 1.486358352 seconds
intermediate-07.sql 1.746402775 seconds
intermediate-08.sql 1.539039405 seconds
intermediate-09.sql 1.574140735 seconds
intermediate-10.sql 1.514428503 seconds
complex-01.sql      1.576090906 seconds
complex-02.sql      2.073730398 seconds
complex-03.sql      1.596002877 seconds
complex-04.sql      1.923587676 seconds
complex-05.sql      1.479848074 seconds
complex-06.sql      1.890319044 seconds
complex-07.sql      1.704899679 seconds
complex-08.sql      1.602149198 seconds 
</pre>