![Watsons](wxd-images/watsons-go-logo-small.png)

# Migration Requirements

![Watsons](wxd-images/poc-arrows.png) 
The proof-of-concept for this data warehouse modernization has the goal of assessing and demonstrating the feasibility of smoothly migrating data and SQL workloads to a new environment.

### Schema Migration

* Schema from existing warehouse will be provided as-is.
* Convert the data warehouse schema to data lakehouse objects.  
* Provide a copy of the DDL used to build the data lakehouse and document any changes made to the table definitions.

Schema Information, [Appendix C – Object Definitions](watsons-objects.md).

### Data Ingestion

* Data extracted from existing warehouse tables in the form of comma-separated values file (CSV) will be provided.
* Establish and document procedures for initial data loading data and demonstrated the methods used.
* Record the time to load each CSV into the data lakehouse and compare the size of the tables in the lakehouse to the raw files and to the size stored in the existing database.
* Verify that the number of rows aligns with the information outlined.

File information: [Appendix A – File Information](watsons-fileinfo.md).

### Workload Migration

* Modify or adapt a set of existing SQL queries to run in the data lakehouse.
* Ensure compatibility of the provided SQL with the data lakehouse.
* Document all changes to the SQL.

SQL information: [Appendix D – Query Definitions and Timings](watsons-queries.md).

### Performance Testing

* Run each query serially and record the time to execute.
* Concurrency tests to include running multiple query classes in parallel for a duration of time.

Additional details in the [Testing section](watsons-poc-tests.md).