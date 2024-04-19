![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix G - JMeter Test Plans and Results

The following control files contain the information required to run JMeter tests for the scenarios outlined in the POC document. 

!!! info

    The settings in the testplans below were built for the original data warehouse. You will need to modify the values in the test plan to match your watsonx.data configuration.

* [JMeter Serial Testplan](./wxd-files/watsons-serial-testplan-netezza.jmx)
* [Jmeter Concurrent Testplan](./wxd-files/watsons-concur-testplan-netezza.jmx)

## Watsons JMeter Results

!!! note

    These timings were run on a Netezza data warehouse running on the cloud. Use these as a basis to compare your performance on watsonx.data. 

The following reports were generated by the Watsons' team to use as a comparison against your own results. The report code represents the queries that were used:

* s - Simple users
* i - Intermediate users
* c - C somplex users

Select the report name to view the results.

* [Serial](./fromwatsons/t1-reports/index.html)
* [Concurrency Test s5-i2-c1](./fromwatsons/t2-reports/index.html)
* [Concurrency Test s10-i5-c2](./fromwatsons/t3-reports/index.html)
* [Concurrency Test s20-i10-c5](./fromwatsons/t4-reports/index.html)