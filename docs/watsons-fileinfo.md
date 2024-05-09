![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix A - File Information

![Watsons](wxd-images/poc-folder.png)
The files to be loaded into the data lakehouse can be accessed from the following Cloud Object Store.

### File Location

The data to load into the tables can also be found in the following URLs:

* Pipe delimited: [Watsons Go Pipe Data](wxd-files/watsons-go-pocdata.tar.gz)
* CSV delimited: [Watsons Go CSV Data](wxd-files/watsons-go-pocdata-csv.tar.gz)

If you want to load the data directly in your virtual machine, use either of the following commands in a terminal shell. Change the name of the output file with the `-O` option. 

!!! abstract "Pipe Delimited Download"
    ```
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/watsons-go-pocdata.tar.gz -O pocdata.tar.gz
    ```

!!! abstract "CSV Delimited Download"
    ```
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/watsons-go-pocdata-csv.tar.gz -O pocdata.tar.gz
    ```

### File Sizes
<pre style="font-size: small; color: darkgreen; overflow: auto">
File Name                           Size Rowcount  
=============================== ======== ========  
AGGR_TIME_PROD_OM_FACT.psv         94024    1,867  
BURST_TABLE.psv                       64        3  
BURST_TABLE2.psv                     228        4  
DIST_INVENTORY_FACT.psv          4568597   53,837  
DIST_PRODUCT_FORECAST_FACT.psv   8895313  129,096  
DIST_RETURNED_ITEMS_FACT.psv      564113   10,249  
DIST_RETURN_REASON_DIM.psv          3594        5  
EMP_EMPLOYEE_DIM.psv              561640      972  
EMP_EXPENSE_FACT.psv            10366704  127,984  
EMP_EXPENSE_PLAN_FACT.psv        1417050   30,150  
EMP_EXPENSE_TYPE_DIM.psv           35556       39  
EMP_EXPENSE_UNIT_LOOKUP.psv          994        3  
EMP_POSITION_DIM.psv                4266       57  
EMP_POSITION_LOOKUP.psv            42286       57  
EMP_POSITION_SUMMARY_FACT.psv     466818   15,050  
EMP_RANKING_DIM.psv                 1601        5  
EMP_RANKING_FACT.psv               62601    1,897  
EMP_RECRUITMENT_DIM.psv            16258       14  
EMP_RECRUITMENT_FACT.psv           46412      416  
EMP_RECRUITMENT_LEAD_FACT.psv     138049    4,171  
EMP_SUCCESSION_FACT.psv            16109      181  
EMP_SUCCESSION_STATUS_DIM.psv       2259        5  
EMP_SUMMARY_FACT.psv             3392620   24,233  
EMP_SURVEY_FACT.psv               303425    5,725  
EMP_SURVEY_TARG_FACT.psv            1160       20  
EMP_SURVEY_TOPIC_DIM.psv            3259        5  
EMP_TERMINATION_LOOKUP.psv          2987        6  
EMP_TRAINING_DIM.psv               33517       42  
EMP_TRAINING_FACT.psv             366130    4,465  
FIN_ACCOUNT_CLASS_LOOKUP.psv        3434        5  
FIN_ACCOUNT_DIM.psv                41231      242  
FIN_ACCOUNT_NAME_LOOKUP.psv       272720      242  
FIN_ACCOUNT_TYPE_LOOKUP.psv         4915        4  
FIN_FINANCE_FACT.psv            10832712  164,132  
FIN_SUBM_CURRENCY_LOOKUP.psv        4255        7  
FIN_SUBM_DIM.psv                   75250       52  
FIN_SUBM_TYPE_LOOKUP.psv            1734        3  
GO_BRANCH_DIM.psv                   2889       29  
GO_GENDER_LOOKUP.psv                 456        2  
GO_ORG_DIM.psv                      5682      123  
GO_ORG_NAME_LOOKUP.psv             95891      123  
GO_REGION_DIM.psv                  17402       21  
GO_SATISFACTION_DIM.psv             2856        5  
GO_TIME_DIM.psv                   905124    1,465  
GO_TIME_QUARTER_LOOKUP.psv          4836       20  
MRK_ACTIVITY_STATUS_DIM.psv          624        2  
MRK_ADV_FACT.psv                   96336      576  
MRK_BUNDLE_GROUP_LOOKUP.psv         9742       15  
MRK_CAMPAIGN_LOOKUP.psv             7819       12  
MRK_PRODUCT_SURVEY_DIM.psv          3341        7  
MRK_PRODUCT_SURVEY_FACT.psv      9574292  165,074  
MRK_PROD_SURVEY_TARG_FACT.psv     238784    5,824  
MRK_PROMOTION_DIM.psv             103522      112  
MRK_PROMOTION_FACT.psv           2049566   11,034  
MRK_PROMOTION_PLAN_FACT.psv      1098560    8,652  
MRK_RTL_SURVEY_DIM.psv              6115        9  
MRK_RTL_SURVEY_FACT.psv          1282956   22,508  
MRK_RTL_SURVEY_TARG_FACT.psv        2370       64  
SLS_ORDER_METHOD_DIM.psv            2148        7  
SLS_PRODUCT_BRAND_LOOKUP.psv        8056       28  
SLS_PRODUCT_COLOR_LOOKUP.psv        7867       27  
SLS_PRODUCT_DIM.psv                25619      274  
SLS_PRODUCT_LINE_LOOKUP.psv         3359        5  
SLS_PRODUCT_LOOKUP.psv           1456961    7,946  
SLS_PRODUCT_SIZE_LOOKUP.psv        15110       55  
SLS_PRODUCT_TYPE_LOOKUP.psv         8618       21  
SLS_RTL_DIM.psv                  1329296      847  
SLS_SALES_FACT.psv              92047785  446,023  
SLS_SALES_ORDER_DIM.psv         11133505  446,023  
SLS_SALES_TARG_FACT.psv         13783875  233,625  
XGOREVDW.psv                       10562       58  
</pre>

