# Medium Clone - Hard

Project Link: <a href='https://hard.onrender.com/'>Hard</a> 

## Purpose

To learn how to develop a fullstack application.

## Description

Medium clone that attempts to imitate the functionalities of the original site.


![landing-page gif (1)](https://user-images.githubusercontent.com/108952654/208147705-b5b97f82-5bd1-4d14-9a5f-4d2af209749a.gif)


## Technologies

<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
	</code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />	  </code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
	<code><img height="25" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" title="Python" />
	</code>
	<code><img height="25" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" title="Flask" /></code>
  <code><img height="25" src="https://quintagroup.com/cms/python/images/sqlalchemy-logo.png/@@images/image.png" alt="CSS" title="SQLAlchemy" /></code>
	<code><img height="25" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="CSS" title="CSS" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
	
</div>

## Wiki Links:

<a href='https://github.com/Ykk2/medium-clone/wiki/Features-List'>Features List</a> 
<a href='https://github.com/Ykk2/medium-clone/wiki/API-Documentation'>API Documentation</a> 
<a href='https://github.com/Ykk2/medium-clone/wiki/Schema-Table'>DB Schema</a> 


## Getting started

1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


