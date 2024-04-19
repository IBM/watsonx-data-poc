# Useful Commands

The image contains some commands that you might find useful if you need to restart services or get password information.

!!! abstract "Get all Credentials"

    The `passwords` command will provide a list of all of the credentials (userids, passwords) for the services that are running in the system.

    ```
    passwords
    ```

!!! abstract "Start watsonx.data"

    Starting watsonx.data requires a number of commands to successfully start the services required in this system. Use this command to start the services.

    ```
    start-watsonx
    ```

!!! abstract "Stop watsonx.data"

    Stopping watsonx.data requires a couple of commands. This command bundles the steps together so that you don't forget to stop all of the services.

    ```
    stop-watsonx
    ```

!!! abstract "Check Presto"

    Sometimes you need to check to make sure the Presto engine is running. Use this command to interrogate the status of the container.

    ```
    check-presto
    ```

!!! abstract "Restart Presto"

    If all else fails and you think you need to restart the Presto container, use this command. It will make sure the proper diagnostic flags are set before restarting the container.

    ```
    restart-presto
    ```