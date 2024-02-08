![Watsons](wxd-images/watsons-go-logo-small.png)

# Proof-of-Concept Tests

![Watsons](wxd-images/poc-crashdummy.png)
The following test are to be executed during the proof-of-concept.

1. JDBC Connectivity
2.	Query Tests
    1. Serial Query
    2. Concurrency

## JDBC Connectivity
### Connectivity Test
* Ensure seamless communication between the data lakehouse and external tools through JDBC connections.
* Demonstrate DBeaver connectivity to the data lakehouse and execute one query from each category (simple, medium, complex).

### Connectivity Results
* Provide details on the process to establish connectivity.
* Show connectivity results using screenshots or recorded demonstration.
* Show query results with screenshots or recorded demonstration.

### Serial and Concurrency Testing
* Utilize Apache JMeter as the tool for simulating concurrent user activities by executing multiple instances of simple, intermediate, and complex queries simultaneously for Watson's Great Outdoors Company.
* Evaluate the system's ability to handle concurrent transactions without compromising performance or data integrity.

| Test No.|Test|Description|Required output
|---------|----|-----------|---------------|
|1|Serial|Run each query serially three times|<ul><li>Save each query results into a file</li><li>Provide avg, minimum, maximum, median timings</li></ul>
|2|Concurrency|Duration: 30-minute <p><ul><li>5 simple</li><li>2 intermediate</li><li>1 complex</li></ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file</li><li>Record Queries Per Hour (QPH)</li></ul>
|3|Concurrency|Duration: 30-minute<p><ul><li>10 simple</li><li>5 intermediate</li><li>2 complex</li></ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file</li><li>Record Queries Per Hour (QPH)</li></ul>
|4|Concurrency|Duration: 30-minute<p><ul><li>20 simple</li><li>10 intermediate</li><li>5 complex</ul>|<ul><li>Record number of query execution per query and the average time to run</li><li>Save each query results into a file.</il><li>Record Queries Per Hour (QPH)</li></ul>

<sub><sup>*Table 2. Performance Tests*</sup></sub>

Use the following JMeter Listener and provide the output for each test.

* View Results Tree
* Summary Report
* Aggregate Report
* Save Response to a file

