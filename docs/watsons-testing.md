![Watsons](wxd-images/watsons-go-logo-small.png)

# Proof-of-Concept Tests

![Watsons](wxd-images/poc-crashdummy.png)
The following details the tests to be performance by each vendor.

## JDBC Connectivity
### Connectivity Test
* Ensure seamless communication between the data lakehouse and external tools through JDBC connections.
* Demonstrate DBeaver connectivity to the data lakehouse and execute one query from each category (simple, intermediate, complex).

### Connectivity Results
* Provide details on the process to establish connectivity.
* Show connectivity results using screenshots or recorded demonstration.
* Show query results with screenshots or recorded demonstration.

## Performance Testing

* Conduct performance tests to evaluate the speed and efficiency of data processing in the data lakehouse for Watson's Great Outdoors Company.
* Measure query response times and system throughput under different workloads.

## Scalability Testing

* Assess the scalability of the data lakehouse by simulating increased data volumes and concurrent user activities for Watson's Great Outdoors Company.

## SQL Query Categorization

Three query categories have been provided for replicating the standard workload within the existing data warehouse. See: [Appendix D – Query Definitions and Timings](watsons-queries.md)

* Simple Queries - A collection of straightforward SQL queries focusing on fundamental SELECT operations.

* Intermediate Queries - A compilation of SQL queries involving joins, subqueries, and aggregation functions at a moderate level of complexity.

* Complex Queries - An assortment of intricate SQL queries comprising multiple joins, nested subqueries, and advanced analytical functions.

## Serial and Concurrency Testing

* Utilize Apache JMeter as the tool for simulating concurrent user activities by executing multiple instances of simple, intermediate, and complex queries simultaneously for Watson's Great Outdoors Company.
* Evaluate the system's ability to handle concurrent transactions without compromising performance or data integrity.
* Create four users for the testing:
    * Serial
        * serial - user for running the serial test
    * Concurrency
        * simple - user for simple queries
        * intermediate - user for intermediate queries
        * complex - user for complex queries

| Test No.|Test|Description|Required output
|---------|----|-----------|---------------|
|1|Serial|Run each query serially three times|<ul><li>Save each query results into a file</li><li>Provide avg, minimum, maximum, median timings</li></ul>
|2|Concurrency|Duration: 30-minute <p><ul><li>5 simple</li><li>2 intermediate</li><li>1 complex</li></ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file</li><li>Record Queries Per Hour (QPH)</li></ul>
|3|Concurrency|Duration: 30-minute<p><ul><li>10 simple</li><li>5 intermediate</li><li>2 complex</li></ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file</li><li>Record Queries Per Hour (QPH)</li></ul>
|4|Concurrency|Duration: 30-minute<p><ul><li>20 simple</li><li>10 intermediate</li><li>5 complex</ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file.</il><li>Record Queries Per Hour (QPH)</li></ul>

<sub><sup>*Table 2. Performance Tests*</sup></sub>
