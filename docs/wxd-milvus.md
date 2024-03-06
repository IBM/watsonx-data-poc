# Watsonx Cross Platform Demonstration

Watsonx is IBM's platform committed to injecting generative AI into services that span across customer's data lifecycle. Each of the services offer a unique experience but when combined together, the business value is even stronger. Here, we have created a cross platform demo combining watsonx.ai and watsonx.data. 

This Demo Features:

  1. Connecting and creating a project in watsonx.ai 
  2. Scraping data from wikipedia and other web articles into a Jupyter Notebook
  3. Inserting web data into watsonx.data
  4. Vectorizing data from Cloud Object Storage in watsonx.data and inserting it into the Milvus vector database
  5. Feeding the Milvus embeddings into a Large Language Model via watsonx.ai to generate a response to a question 

In part 1, we'll pull data using the wikipedia API, split the article content into manageable chunks and insert it into a watsonx.data Hive table. In part 2, we'll create vector embeddings with the wikipedia data in watsonx.data and insert them into the Milvus vector database. Finally, in part 3, we'll use watsonx.ai to query Milvus with various questions, get the relevant documents, embed them into the LLM context and prompt the LLM to generate a useful response.

### Services Used in this Demo

- IBM Cloud
- watsonx.data (Developer edition hosted in a virtual machine)
- watsonx.ai (Saas on IBM Cloud)

### Resources

The following resources are provided for you to run this demonstration.

* [Box Folder with Videos and Details](https://ibm.ent.box.com/folder/248668076459?s=vzgw0is9s0yba1vqav4lck5ra1sik7w3)
* [GitHub Repository with Instructions](https://github.ibm.com/rbreno/watsonx-cross-platform/tree/2.0)

