![Watsons](wxd-images/watsons-go-logo-small.png)

# Appendix H – Utilities

The following files are useful for setting up and testing your Watson's environment.

### Client Setup

 This script is used to setup the ibm-lh-client. Download the code to your workstation and then copy it into your image. Alternatively, copy the text in the script into an editor that you have running in the image (i.e., `nano` or `vi`).

* [Watsonx.data Client Setup](wxd-files/setup-ibm-lh.sh)

!!! abstract "Download Client Code"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/setup-ibm-lh.sh -O setup-ibm-lh.sh
    ```

If you want to remove the client configuration, use the following script.

* [Remove Client Setup](wxd-files/remove-ibm-lh-cfg.sh)

!!! abstract "Remove Client Configuration"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/remove-ibm-lh-cfg.sh -O remove-ibm-lh-cfg.sh
    ```

### Verification Script

The verification script is used to review the structure of your Watson's database and the tables that you have defined. Load this Jupyter notebook into your environment (use the Jupyter notebook "import" function) and then run the commands in the notebook.

* [Watson's Verification Notebook](wxd-files/Verify-Watsons.ipynb)

!!! abstract "Download Verification Notebook"
    ```bash
    wget https://ibm.github.io/watsonx-data-poc/wxd-files/Verify-Watsons.ipynb -O Verify-Watsons.ipynb
    ```
