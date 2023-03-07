# Property_management-app-frontend  
*dev by:Karemu Victor
## ABOUT THE APP
This application suits management systems especially the property owners. It is a simple web application to be used by landlords and landladies to ease their work of storing their data.
 
 # Project setup

 ## App Development Language
1. ReactJS frontend Repository("https://github.com/Karemu1842call/Property_management-app-frontend")
2. Ruby backend Repository("https://github.com/Karemu1842call/phase-3-sinatra-react-project")


1. Go to the repository links above and clone them into your local machine

# Front end Setup
(no setup needed needed since the project is already deployed hence to interact with tha api go to its deployed live link.[https://property-management-app-frontend.vercel.app/](https://property-management-app-frontend.vercel.app/).)
1. Navigate to the folder on which you cloned your front-end repository.
2. Open the folder on your Terminal and type:
```console
$  Npm Install

```
to install all the application dependancies

3. After installing the dependencies type the keyword below to start your server
```console
$  Npm start

```
4. Open the app on your browser.Enjoy!

# Backend Setup
(no setup needed needed since the project is already deployed hence to interact with tha api go to its deployed live link.[https://web-production-07dae.up.railway.app/](https://web-production-07dae.up.railway.app/).)
## 1. Open the directory you cloned your backend and open it on yor terminal.
## 2. Run the command below
```console
$ bundle install
```

to install the gems.

## 3. Migrate the following tables


```console
$  bundle exec rake db:create_migration NAME=create_landlords

```

```console
$  bundle exec rake db:create_migration NAME=create_properties

```

```console
$  bundle exec rake db:create_migration NAME=create_tenants

```
## 4. Seed data into the database.

```console
$  bundle exec rake db:seed
```
## Start the server

```console
$  bundle exec rake server

```
