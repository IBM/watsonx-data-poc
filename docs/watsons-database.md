![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix B - Database and Table Size Information

![Watsons](wxd-images/poc-storage.png)
The storage used in the current data warehouse environment reports below.

### Database Size
<pre style="font-size: small; color: darkgreen; overflow: auto">
           |        Bytes         |        KB        |      MB      
-----------+----------------------------------+----------------------
total size |          605,290,496 |          591,104 |          577 
</pre>

### Table Sizes
<pre style="font-size: small; color: darkgreen; overflow: auto">
Name                           |  Bytes         |   KB        |   MB      
-------------------------------+----------------+-------------+-------
AGGR_TIME_PROD_OM_FACT         |     15,728,640 |      15,360 |     15 
BURST_TABLE                    |        393,216 |         384 |      0 
BURST_TABLE2                   |        524,288 |         512 |      1 
DIST_INVENTORY_FACT            |     15,728,640 |      15,360 |     15 
DIST_PRODUCT_FORECAST_FACT     |     15,728,640 |      15,360 |     15 
DIST_RETURNED_ITEMS_FACT       |     15,728,640 |      15,360 |     15 
DIST_RETURN_REASON_DIM         |        655,360 |         640 |      1 
EMP_EMPLOYEE_DIM               |     15,728,640 |      15,360 |     15 
EMP_EXPENSE_FACT               |     15,728,640 |      15,360 |     15 
EMP_EXPENSE_PLAN_FACT          |     15,728,640 |      15,360 |     15 
EMP_EXPENSE_TYPE_DIM           |      4,456,448 |       4,352 |      4 
EMP_EXPENSE_UNIT_LOOKUP        |        393,216 |         384 |      0 
EMP_POSITION_DIM               |      6,422,528 |       6,272 |      6 
EMP_POSITION_LOOKUP            |      5,636,096 |       5,504 |      5 
EMP_POSITION_SUMMARY_FACT      |     15,728,640 |      15,360 |     15 
EMP_RANKING_DIM                |        655,360 |         640 |      1 
EMP_RANKING_FACT               |     15,728,640 |      15,360 |     15 
EMP_RECRUITMENT_DIM            |      1,835,008 |       1,792 |      2 
EMP_RECRUITMENT_FACT           |     15,204,352 |      14,848 |     15 
EMP_RECRUITMENT_LEAD_FACT      |     15,728,640 |      15,360 |     15 
EMP_SUCCESSION_FACT            |     11,141,120 |      10,880 |     11 
EMP_SUCCESSION_STATUS_DIM      |        655,360 |         640 |      1 
EMP_SUMMARY_FACT               |     15,728,640 |      15,360 |     15 
EMP_SURVEY_FACT                |     15,728,640 |      15,360 |     15 
EMP_SURVEY_TARG_FACT           |      2,490,368 |       2,432 |      2 
EMP_SURVEY_TOPIC_DIM           |        524,288 |         512 |      1 
EMP_TERMINATION_LOOKUP         |        786,432 |         768 |      1 
EMP_TRAINING_DIM               |      4,980,736 |       4,864 |      5 
EMP_TRAINING_FACT              |     15,728,640 |      15,360 |     15 
FIN_ACCOUNT_CLASS_LOOKUP       |        655,360 |         640 |      1 
FIN_ACCOUNT_DIM                |     13,631,488 |      13,312 |     13 
FIN_ACCOUNT_NAME_LOOKUP        |     13,762,560 |      13,440 |     13 
FIN_ACCOUNT_TYPE_LOOKUP        |        524,288 |         512 |      1 
FIN_FINANCE_FACT               |     15,728,640 |      15,360 |     15 
FIN_SUBM_CURRENCY_LOOKUP       |        917,504 |         896 |      1 
FIN_SUBM_DIM                   |      5,242,880 |       5,120 |      5 
FIN_SUBM_TYPE_LOOKUP           |        393,216 |         384 |      0 
GO_BRANCH_DIM                  |      3,145,728 |       3,072 |      3 
GO_GENDER_LOOKUP               |        262,144 |         256 |      0 
GO_ORG_DIM                     |     10,223,616 |       9,984 |     10 
GO_ORG_NAME_LOOKUP             |     10,354,688 |      10,112 |     10 
GO_REGION_DIM                  |      2,752,512 |       2,688 |      3 
GO_SATISFACTION_DIM            |        655,360 |         640 |      1 
GO_TIME_DIM                    |     15,728,640 |      15,360 |     15 
GO_TIME_QUARTER_LOOKUP         |      2,359,296 |       2,304 |      2 
MRK_ACTIVITY_STATUS_DIM        |        262,144 |         256 |      0 
MRK_ADV_FACT                   |     15,728,640 |      15,360 |     15 
MRK_BUNDLE_GROUP_LOOKUP        |      1,835,008 |       1,792 |      2 
MRK_CAMPAIGN_LOOKUP            |      1,441,792 |       1,408 |      1 
MRK_PRODUCT_SURVEY_DIM         |        917,504 |         896 |      1 
MRK_PRODUCT_SURVEY_FACT        |     15,728,640 |      15,360 |     15 
MRK_PROD_SURVEY_TARG_FACT      |     15,728,640 |      15,360 |     15 
MRK_PROMOTION_DIM              |      9,961,472 |       9,728 |     10 
MRK_PROMOTION_FACT             |     15,728,640 |      15,360 |     15 
MRK_PROMOTION_PLAN_FACT        |     15,728,640 |      15,360 |     15 
MRK_RTL_SURVEY_DIM             |      1,179,648 |       1,152 |      1 
MRK_RTL_SURVEY_FACT            |     15,728,640 |      15,360 |     15 
MRK_RTL_SURVEY_TARG_FACT       |      6,160,384 |       6,016 |      6 
SLS_ORDER_METHOD_DIM           |        917,504 |         896 |      1 
SLS_PRODUCT_BRAND_LOOKUP       |      3,145,728 |       3,072 |      3 
SLS_PRODUCT_COLOR_LOOKUP       |      3,014,656 |       2,944 |      3 
SLS_PRODUCT_DIM                |     14,811,136 |      14,464 |     14 
SLS_PRODUCT_LINE_LOOKUP        |        655,360 |         640 |      1 
SLS_PRODUCT_LOOKUP             |     15,728,640 |      15,360 |     15 
SLS_PRODUCT_SIZE_LOOKUP        |      5,767,168 |       5,632 |      6 
SLS_PRODUCT_TYPE_LOOKUP        |      2,752,512 |       2,688 |      3 
SLS_RTL_DIM                    |     15,728,640 |      15,360 |     15 
SLS_SALES_FACT                 |     31,457,280 |      30,720 |     30 
SLS_SALES_ORDER_DIM            |     15,728,640 |      15,360 |     15 
SLS_SALES_TARG_FACT            |     15,728,640 |      15,360 |     15 
XGOREVDW                       |      6,160,384 |       6,016 |      6 
</pre>

### Table Validation

You can validate that you have the correct number of rows in your database by using the notebook found in the following link: [Validation Notebook](./wxd-files/Verify.ipynb).

Alternatively, you can run the following SQL to check your files sizes. You must replace the `{schema}` value with the schema that you stored the tables in.

```sql
WITH TABLES(TABLE_NAME, EXPECTED_ROWS, ACTUAL_ROWS) AS
  (
  SELECT 'AGGR_TIME_PROD_OM_FACT',1867,count(*) from iceberg_data.{schema}.AGGR_TIME_PROD_OM_FACT
  UNION ALL
  SELECT 'BURST_TABLE',3,count(*) from iceberg_data.{schema}.BURST_TABLE
  UNION ALL
  SELECT 'BURST_TABLE2',4,count(*) from iceberg_data.{schema}.BURST_TABLE2
  UNION ALL
  SELECT 'DIST_INVENTORY_FACT',53837,count(*) from iceberg_data.{schema}.DIST_INVENTORY_FACT
  UNION ALL
  SELECT 'DIST_PRODUCT_FORECAST_FACT',129096,count(*) from iceberg_data.{schema}.DIST_PRODUCT_FORECAST_FACT
  UNION ALL
  SELECT 'DIST_RETURNED_ITEMS_FACT',10249,count(*) from iceberg_data.{schema}.DIST_RETURNED_ITEMS_FACT
  UNION ALL
  SELECT 'DIST_RETURN_REASON_DIM',5,count(*) from iceberg_data.{schema}.DIST_RETURN_REASON_DIM
  UNION ALL
  SELECT 'EMP_EMPLOYEE_DIM',972,count(*) from iceberg_data.{schema}.EMP_EMPLOYEE_DIM
  UNION ALL
  SELECT 'EMP_EXPENSE_FACT',127984,count(*) from iceberg_data.{schema}.EMP_EXPENSE_FACT
  UNION ALL
  SELECT 'EMP_EXPENSE_PLAN_FACT',30150,count(*) from iceberg_data.{schema}.EMP_EXPENSE_PLAN_FACT
  UNION ALL
  SELECT 'EMP_EXPENSE_TYPE_DIM',39,count(*) from iceberg_data.{schema}.EMP_EXPENSE_TYPE_DIM
  UNION ALL
  SELECT 'EMP_EXPENSE_UNIT_LOOKUP',3,count(*) from iceberg_data.{schema}.EMP_EXPENSE_UNIT_LOOKUP
  UNION ALL
  SELECT 'EMP_POSITION_DIM',57,count(*) from iceberg_data.{schema}.EMP_POSITION_DIM
  UNION ALL
  SELECT 'EMP_POSITION_LOOKUP',57,count(*) from iceberg_data.{schema}.EMP_POSITION_LOOKUP
  UNION ALL
  SELECT 'EMP_POSITION_SUMMARY_FACT',15050,count(*) from iceberg_data.{schema}.EMP_POSITION_SUMMARY_FACT
  UNION ALL
  SELECT 'EMP_RANKING_DIM',5,count(*) from iceberg_data.{schema}.EMP_RANKING_DIM
  UNION ALL
  SELECT 'EMP_RANKING_FACT',1897,count(*) from iceberg_data.{schema}.EMP_RANKING_FACT
  UNION ALL
  SELECT 'EMP_RECRUITMENT_DIM',14,count(*) from iceberg_data.{schema}.EMP_RECRUITMENT_DIM
  UNION ALL
  SELECT 'EMP_RECRUITMENT_FACT',416,count(*) from iceberg_data.{schema}.EMP_RECRUITMENT_FACT
  UNION ALL
  SELECT 'EMP_RECRUITMENT_LEAD_FACT',4171,count(*) from iceberg_data.{schema}.EMP_RECRUITMENT_LEAD_FACT
  UNION ALL
  SELECT 'EMP_SUCCESSION_FACT',181,count(*) from iceberg_data.{schema}.EMP_SUCCESSION_FACT
  UNION ALL
  SELECT 'EMP_SUCCESSION_STATUS_DIM',5,count(*) from iceberg_data.{schema}.EMP_SUCCESSION_STATUS_DIM
  UNION ALL
  SELECT 'EMP_SUMMARY_FACT',24233,count(*) from iceberg_data.{schema}.EMP_SUMMARY_FACT
  UNION ALL
  SELECT 'EMP_SURVEY_FACT',5725,count(*) from iceberg_data.{schema}.EMP_SURVEY_FACT
  UNION ALL
  SELECT 'EMP_SURVEY_TARG_FACT',20,count(*) from iceberg_data.{schema}.EMP_SURVEY_TARG_FACT
  UNION ALL
  SELECT 'EMP_SURVEY_TOPIC_DIM',5,count(*) from iceberg_data.{schema}.EMP_SURVEY_TOPIC_DIM
  UNION ALL
  SELECT 'EMP_TERMINATION_LOOKUP',6,count(*) from iceberg_data.{schema}.EMP_TERMINATION_LOOKUP
  UNION ALL
  SELECT 'EMP_TRAINING_DIM',42,count(*) from iceberg_data.{schema}.EMP_TRAINING_DIM
  UNION ALL
  SELECT 'EMP_TRAINING_FACT',4465,count(*) from iceberg_data.{schema}.EMP_TRAINING_FACT
  UNION ALL
  SELECT 'FIN_ACCOUNT_CLASS_LOOKUP',5,count(*) from iceberg_data.{schema}.FIN_ACCOUNT_CLASS_LOOKUP
  UNION ALL
  SELECT 'FIN_ACCOUNT_DIM',242,count(*) from iceberg_data.{schema}.FIN_ACCOUNT_DIM
  UNION ALL
  SELECT 'FIN_ACCOUNT_NAME_LOOKUP',242,count(*) from iceberg_data.{schema}.FIN_ACCOUNT_NAME_LOOKUP
  UNION ALL
  SELECT 'FIN_ACCOUNT_TYPE_LOOKUP',4,count(*) from iceberg_data.{schema}.FIN_ACCOUNT_TYPE_LOOKUP
  UNION ALL
  SELECT 'FIN_FINANCE_FACT',164132,count(*) from iceberg_data.{schema}.FIN_FINANCE_FACT
  UNION ALL
  SELECT 'FIN_SUBM_CURRENCY_LOOKUP',7,count(*) from iceberg_data.{schema}.FIN_SUBM_CURRENCY_LOOKUP
  UNION ALL
  SELECT 'FIN_SUBM_DIM',52,count(*) from iceberg_data.{schema}.FIN_SUBM_DIM
  UNION ALL
  SELECT 'FIN_SUBM_TYPE_LOOKUP',3,count(*) from iceberg_data.{schema}.FIN_SUBM_TYPE_LOOKUP
  UNION ALL
  SELECT 'GO_BRANCH_DIM',29,count(*) from iceberg_data.{schema}.GO_BRANCH_DIM
  UNION ALL
  SELECT 'GO_GENDER_LOOKUP',2,count(*) from iceberg_data.{schema}.GO_GENDER_LOOKUP
  UNION ALL
  SELECT 'GO_ORG_DIM',123,count(*) from iceberg_data.{schema}.GO_ORG_DIM
  UNION ALL
  SELECT 'GO_ORG_NAME_LOOKUP',123,count(*) from iceberg_data.{schema}.GO_ORG_NAME_LOOKUP
  UNION ALL
  SELECT 'GO_REGION_DIM',21,count(*) from iceberg_data.{schema}.GO_REGION_DIM
  UNION ALL
  SELECT 'GO_SATISFACTION_DIM',5,count(*) from iceberg_data.{schema}.GO_SATISFACTION_DIM
  UNION ALL
  SELECT 'GO_TIME_DIM',1465,count(*) from iceberg_data.{schema}.GO_TIME_DIM
  UNION ALL
  SELECT 'GO_TIME_QUARTER_LOOKUP',20,count(*) from iceberg_data.{schema}.GO_TIME_QUARTER_LOOKUP
  UNION ALL
  SELECT 'MRK_ACTIVITY_STATUS_DIM',2,count(*) from iceberg_data.{schema}.MRK_ACTIVITY_STATUS_DIM
  UNION ALL
  SELECT 'MRK_ADV_FACT',576,count(*) from iceberg_data.{schema}.MRK_ADV_FACT
  UNION ALL
  SELECT 'MRK_BUNDLE_GROUP_LOOKUP',15,count(*) from iceberg_data.{schema}.MRK_BUNDLE_GROUP_LOOKUP
  UNION ALL
  SELECT 'MRK_CAMPAIGN_LOOKUP',12,count(*) from iceberg_data.{schema}.MRK_CAMPAIGN_LOOKUP
  UNION ALL
  SELECT 'MRK_PRODUCT_SURVEY_DIM',7,count(*) from iceberg_data.{schema}.MRK_PRODUCT_SURVEY_DIM
  UNION ALL
  SELECT 'MRK_PRODUCT_SURVEY_FACT',165074,count(*) from iceberg_data.{schema}.MRK_PRODUCT_SURVEY_FACT
  UNION ALL
  SELECT 'MRK_PROD_SURVEY_TARG_FACT',5824,count(*) from iceberg_data.{schema}.MRK_PROD_SURVEY_TARG_FACT
  UNION ALL
  SELECT 'MRK_PROMOTION_DIM',112,count(*) from iceberg_data.{schema}.MRK_PROMOTION_DIM
  UNION ALL
  SELECT 'MRK_PROMOTION_FACT',11034,count(*) from iceberg_data.{schema}.MRK_PROMOTION_FACT
  UNION ALL
  SELECT 'MRK_PROMOTION_PLAN_FACT',8652,count(*) from iceberg_data.{schema}.MRK_PROMOTION_PLAN_FACT
  UNION ALL
  SELECT 'MRK_RTL_SURVEY_DIM',9,count(*) from iceberg_data.{schema}.MRK_RTL_SURVEY_DIM
  UNION ALL
  SELECT 'MRK_RTL_SURVEY_FACT',22508,count(*) from iceberg_data.{schema}.MRK_RTL_SURVEY_FACT
  UNION ALL
  SELECT 'MRK_RTL_SURVEY_TARG_FACT',64,count(*) from iceberg_data.{schema}.MRK_RTL_SURVEY_TARG_FACT
  UNION ALL
  SELECT 'SLS_ORDER_METHOD_DIM',7,count(*) from iceberg_data.{schema}.SLS_ORDER_METHOD_DIM
  UNION ALL
  SELECT 'SLS_PRODUCT_BRAND_LOOKUP',28,count(*) from iceberg_data.{schema}.SLS_PRODUCT_BRAND_LOOKUP
  UNION ALL
  SELECT 'SLS_PRODUCT_COLOR_LOOKUP',27,count(*) from iceberg_data.{schema}.SLS_PRODUCT_COLOR_LOOKUP
  UNION ALL
  SELECT 'SLS_PRODUCT_DIM',274,count(*) from iceberg_data.{schema}.SLS_PRODUCT_DIM
  UNION ALL
  SELECT 'SLS_PRODUCT_LINE_LOOKUP',5,count(*) from iceberg_data.{schema}.SLS_PRODUCT_LINE_LOOKUP
  UNION ALL
  SELECT 'SLS_PRODUCT_LOOKUP',7946,count(*) from iceberg_data.{schema}.SLS_PRODUCT_LOOKUP
  UNION ALL
  SELECT 'SLS_PRODUCT_SIZE_LOOKUP',55,count(*) from iceberg_data.{schema}.SLS_PRODUCT_SIZE_LOOKUP
  UNION ALL
  SELECT 'SLS_PRODUCT_TYPE_LOOKUP',21,count(*) from iceberg_data.{schema}.SLS_PRODUCT_TYPE_LOOKUP
  UNION ALL
  SELECT 'SLS_RTL_DIM',847,count(*) from iceberg_data.{schema}.SLS_RTL_DIM
  UNION ALL
  SELECT 'SLS_SALES_FACT',446023,count(*) from iceberg_data.{schema}.SLS_SALES_FACT
  UNION ALL
  SELECT 'SLS_SALES_ORDER_DIM',446023,count(*) from iceberg_data.{schema}.SLS_SALES_ORDER_DIM
  UNION ALL
  SELECT 'SLS_SALES_TARG_FACT',233625,count(*) from iceberg_data.{schema}.SLS_SALES_TARG_FACT
  UNION ALL
  SELECT 'XGOREVDW',58,count(*) from iceberg_data.{schema}.XGOREVDW
  )
SELECT TABLE_NAME, IF(EXPECTED_ROWS-ACTUAL_ROWS=0,'OK','ERROR') AS STATUS, EXPECTED_ROWS, ACTUAL_ROWS FROM TABLES
  ORDER BY TABLE_NAME ASC;
```