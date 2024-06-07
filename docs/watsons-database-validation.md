![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix F - Database and Table Validation

## Database Validation

You can validate that you have the correct number of rows in your database by using the notebook found in the following link: [Validation Notebook](./wxd-files/Verify.ipynb).

!!! abstract "Download Verification Notebook"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/Verify.ipynb -O Verify.ipynb
    ```

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

## Table Validation

The following script is used to compare your table definitions with a generic one. The output from this report should be provided to the POC organizers. There is no "correct" output from this program. It is used to compare the different approaches POC teams used to create the tables in the system.

Download the following notebook into your Jupyter notebook environment and then run the code in the notebook: [Validation Notebook](./wxd-files/Verify-Watsons.ipynb).

!!! abstract "Download Verification Notebook"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/Verify-Watsons.ipynb -O Verify-Watsons.ipynb
    ```