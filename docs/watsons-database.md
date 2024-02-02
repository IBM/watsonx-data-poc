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
  Object   |               Name             |  Bytes         |   KB        |   MB      
-----------+--------------------------------+----------------+-------------+-------
 Table     | AGGR_TIME_PROD_OM_FACT         |     15,728,640 |      15,360 |     15 
 Table     | BURST_TABLE                    |        393,216 |         384 |      0 
 Table     | BURST_TABLE2                   |        524,288 |         512 |      1 
 Table     | DIST_INVENTORY_FACT            |     15,728,640 |      15,360 |     15 
 Table     | DIST_PRODUCT_FORECAST_FACT     |     15,728,640 |      15,360 |     15 
 Table     | DIST_RETURNED_ITEMS_FACT       |     15,728,640 |      15,360 |     15 
 Table     | DIST_RETURN_REASON_DIM         |        655,360 |         640 |      1 
 Table     | EMP_EMPLOYEE_DIM               |     15,728,640 |      15,360 |     15 
 Table     | EMP_EXPENSE_FACT               |     15,728,640 |      15,360 |     15 
 Table     | EMP_EXPENSE_PLAN_FACT          |     15,728,640 |      15,360 |     15 
 Table     | EMP_EXPENSE_TYPE_DIM           |      4,456,448 |       4,352 |      4 
 Table     | EMP_EXPENSE_UNIT_LOOKUP        |        393,216 |         384 |      0 
 Table     | EMP_POSITION_DIM               |      6,422,528 |       6,272 |      6 
 Table     | EMP_POSITION_LOOKUP            |      5,636,096 |       5,504 |      5 
 Table     | EMP_POSITION_SUMMARY_FACT      |     15,728,640 |      15,360 |     15 
 Table     | EMP_RANKING_DIM                |        655,360 |         640 |      1 
 Table     | EMP_RANKING_FACT               |     15,728,640 |      15,360 |     15 
 Table     | EMP_RECRUITMENT_DIM            |      1,835,008 |       1,792 |      2 
 Table     | EMP_RECRUITMENT_FACT           |     15,204,352 |      14,848 |     15 
 Table     | EMP_RECRUITMENT_LEAD_FACT      |     15,728,640 |      15,360 |     15 
 Table     | EMP_SUCCESSION_FACT            |     11,141,120 |      10,880 |     11 
 Table     | EMP_SUCCESSION_STATUS_DIM      |        655,360 |         640 |      1 
 Table     | EMP_SUMMARY_FACT               |     15,728,640 |      15,360 |     15 
 Table     | EMP_SURVEY_FACT                |     15,728,640 |      15,360 |     15 
 Table     | EMP_SURVEY_TARG_FACT           |      2,490,368 |       2,432 |      2 
 Table     | EMP_SURVEY_TOPIC_DIM           |        524,288 |         512 |      1 
 Table     | EMP_TERMINATION_LOOKUP         |        786,432 |         768 |      1 
 Table     | EMP_TRAINING_DIM               |      4,980,736 |       4,864 |      5 
 Table     | EMP_TRAINING_FACT              |     15,728,640 |      15,360 |     15 
 Table     | FIN_ACCOUNT_CLASS_LOOKUP       |        655,360 |         640 |      1 
 Table     | FIN_ACCOUNT_DIM                |     13,631,488 |      13,312 |     13 
 Table     | FIN_ACCOUNT_NAME_LOOKUP        |     13,762,560 |      13,440 |     13 
 Table     | FIN_ACCOUNT_TYPE_LOOKUP        |        524,288 |         512 |      1 
 Table     | FIN_FINANCE_FACT               |     15,728,640 |      15,360 |     15 
 Table     | FIN_SUBM_CURRENCY_LOOKUP       |        917,504 |         896 |      1 
 Table     | FIN_SUBM_DIM                   |      5,242,880 |       5,120 |      5 
 Table     | FIN_SUBM_TYPE_LOOKUP           |        393,216 |         384 |      0 
 Table     | GO_BRANCH_DIM                  |      3,145,728 |       3,072 |      3 
 Table     | GO_GENDER_LOOKUP               |        262,144 |         256 |      0 
 Table     | GO_ORG_DIM                     |     10,223,616 |       9,984 |     10 
 Table     | GO_ORG_NAME_LOOKUP             |     10,354,688 |      10,112 |     10 
 Table     | GO_REGION_DIM                  |      2,752,512 |       2,688 |      3 
 Table     | GO_SATISFACTION_DIM            |        655,360 |         640 |      1 
 Table     | GO_TIME_DIM                    |     15,728,640 |      15,360 |     15 
 Table     | GO_TIME_QUARTER_LOOKUP         |      2,359,296 |       2,304 |      2 
 Table     | MRK_ACTIVITY_STATUS_DIM        |        262,144 |         256 |      0 
 Table     | MRK_ADV_FACT                   |     15,728,640 |      15,360 |     15 
 Table     | MRK_BUNDLE_GROUP_LOOKUP        |      1,835,008 |       1,792 |      2 
 Table     | MRK_CAMPAIGN_LOOKUP            |      1,441,792 |       1,408 |      1 
 Table     | MRK_PRODUCT_SURVEY_DIM         |        917,504 |         896 |      1 
 Table     | MRK_PRODUCT_SURVEY_FACT        |     15,728,640 |      15,360 |     15 
 Table     | MRK_PROD_SURVEY_TARG_FACT      |     15,728,640 |      15,360 |     15 
 Table     | MRK_PROMOTION_DIM              |      9,961,472 |       9,728 |     10 
 Table     | MRK_PROMOTION_FACT             |     15,728,640 |      15,360 |     15 
 Table     | MRK_PROMOTION_PLAN_FACT        |     15,728,640 |      15,360 |     15 
 Table     | MRK_RTL_SURVEY_DIM             |      1,179,648 |       1,152 |      1 
 Table     | MRK_RTL_SURVEY_FACT            |     15,728,640 |      15,360 |     15 
 Table     | MRK_RTL_SURVEY_TARG_FACT       |      6,160,384 |       6,016 |      6 
 Table     | SLS_ORDER_METHOD_DIM           |        917,504 |         896 |      1 
 Table     | SLS_PRODUCT_BRAND_LOOKUP       |      3,145,728 |       3,072 |      3 
 Table     | SLS_PRODUCT_COLOR_LOOKUP       |      3,014,656 |       2,944 |      3 
 Table     | SLS_PRODUCT_DIM                |     14,811,136 |      14,464 |     14 
 Table     | SLS_PRODUCT_LINE_LOOKUP        |        655,360 |         640 |      1 
 Table     | SLS_PRODUCT_LOOKUP             |     15,728,640 |      15,360 |     15 
 Table     | SLS_PRODUCT_SIZE_LOOKUP        |      5,767,168 |       5,632 |      6 
 Table     | SLS_PRODUCT_TYPE_LOOKUP        |      2,752,512 |       2,688 |      3 
 Table     | SLS_RTL_DIM                    |     15,728,640 |      15,360 |     15 
 Table     | SLS_SALES_FACT                 |     31,457,280 |      30,720 |     30 
 Table     | SLS_SALES_ORDER_DIM            |     15,728,640 |      15,360 |     15 
 Table     | SLS_SALES_TARG_FACT            |     15,728,640 |      15,360 |     15 
 Table     | XGOREVDW                       |      6,160,384 |       6,016 |      6 
</pre>