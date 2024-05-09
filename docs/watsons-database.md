![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix B - Database and Table Size Information

![Watsons](wxd-images/poc-storage.png)
The storage used in the current data warehouse environment reports below.

### Database Size
|           |        Bytes      |       
|:----------| -----------------:|
|Total size |        95,682,560 |

### Table Sizes
|Name                          |  Bytes         |       
|:---------------------------  | --------------:|
| AGGR_TIME_PROD_OM_FACT         |      1,048,576 |  
| BURST_TABLE                    |        393,216 |  
| BURST_TABLE2                   |        524,288 |  
| DIST_INVENTORY_FACT            |      2,097,152 |  
| DIST_PRODUCT_FORECAST_FACT     |      2,097,152 |  
| DIST_RETURNED_ITEMS_FACT       |      1,048,576 |  
| DIST_RETURN_REASON_DIM         |        524,288 |  
| EMP_EMPLOYEE_DIM               |      1,048,576 |  
| EMP_EXPENSE_FACT               |      3,145,728 |  
| EMP_EXPENSE_PLAN_FACT          |      1,048,576 |  
| EMP_EXPENSE_TYPE_DIM           |      1,048,576 |  
| EMP_EXPENSE_UNIT_LOOKUP        |        393,216 |  
| EMP_POSITION_DIM               |      1,048,576 |  
| EMP_POSITION_LOOKUP            |      1,048,576 |  
| EMP_POSITION_SUMMARY_FACT      |      1,048,576 |  
| EMP_RANKING_DIM                |        655,360 |  
| EMP_RANKING_FACT               |      1,048,576 |  
| EMP_RECRUITMENT_DIM            |        786,432 |  
| EMP_RECRUITMENT_FACT           |      1,048,576 |  
| EMP_RECRUITMENT_LEAD_FACT      |      1,048,576 |  
| EMP_SUCCESSION_FACT            |      1,048,576 |  
| EMP_SUCCESSION_STATUS_DIM      |        393,216 |  
| EMP_SUMMARY_FACT               |      1,048,576 |  
| EMP_SURVEY_FACT                |      1,048,576 |  
| EMP_SURVEY_TARG_FACT           |      1,048,576 |  
| EMP_SURVEY_TOPIC_DIM           |        524,288 |  
| EMP_TERMINATION_LOOKUP         |        524,288 |  
| EMP_TRAINING_DIM               |      1,048,576 |  
| EMP_TRAINING_FACT              |      1,048,576 |  
| FIN_ACCOUNT_CLASS_LOOKUP       |        524,288 |  
| FIN_ACCOUNT_DIM                |      1,048,576 |  
| FIN_ACCOUNT_NAME_LOOKUP        |      1,048,576 |  
| FIN_ACCOUNT_TYPE_LOOKUP        |        393,216 |  
| FIN_FINANCE_FACT               |      3,145,728 |  
| FIN_SUBM_CURRENCY_LOOKUP       |        655,360 |  
| FIN_SUBM_DIM                   |      1,048,576 |  
| FIN_SUBM_TYPE_LOOKUP           |        393,216 |  
| GO_BRANCH_DIM                  |      1,048,576 |  
| GO_GENDER_LOOKUP               |        262,144 |  
| GO_ORG_DIM                     |      1,048,576 |  
| GO_ORG_NAME_LOOKUP             |      1,048,576 |  
| GO_REGION_DIM                  |        917,504 |  
| GO_SATISFACTION_DIM            |        655,360 |  
| GO_TIME_DIM                    |      1,048,576 |  
| GO_TIME_QUARTER_LOOKUP         |        917,504 |  
| MRK_ACTIVITY_STATUS_DIM        |        262,144 |  
| MRK_ADV_FACT                   |      1,048,576 |  
| MRK_BUNDLE_GROUP_LOOKUP        |        917,504 |  
| MRK_CAMPAIGN_LOOKUP            |        524,288 |  
| MRK_PRODUCT_SURVEY_DIM         |        786,432 |  
| MRK_PRODUCT_SURVEY_FACT        |      3,145,728 |  
| MRK_PROD_SURVEY_TARG_FACT      |      1,048,576 |  
| MRK_PROMOTION_DIM              |      1,048,576 |  
| MRK_PROMOTION_FACT             |      1,048,576 |  
| MRK_PROMOTION_PLAN_FACT        |      1,048,576 |  
| MRK_RTL_SURVEY_DIM             |        655,360 |  
| MRK_RTL_SURVEY_FACT            |      1,048,576 |  
| MRK_RTL_SURVEY_TARG_FACT       |      1,048,576 |  
| SLS_ORDER_METHOD_DIM           |        655,360 |  
| SLS_PRODUCT_BRAND_LOOKUP       |      1,048,576 |  
| SLS_PRODUCT_COLOR_LOOKUP       |      1,048,576 |  
| SLS_PRODUCT_DIM                |      1,048,576 |  
| SLS_PRODUCT_LINE_LOOKUP        |        655,360 |  
| SLS_PRODUCT_LOOKUP             |      2,097,152 |  
| SLS_PRODUCT_SIZE_LOOKUP        |      1,048,576 |  
| SLS_PRODUCT_TYPE_LOOKUP        |      1,048,576 |  
| SLS_RTL_DIM                    |      1,048,576 |  
| SLS_SALES_FACT                 |     15,728,640 |  
| SLS_SALES_ORDER_DIM            |      6,291,456 |  
| SLS_SALES_TARG_FACT            |      4,194,304 |  
| XGOREVDW                       |      1,048,576 |  
