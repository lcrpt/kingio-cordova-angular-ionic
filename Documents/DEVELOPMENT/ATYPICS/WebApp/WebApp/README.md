# Atypics

# How to run the application :

Run this URL (there is a link to the Node Server) : http://delassen.etudiant-eemi.com/Projet/Test/   

Or you can directly run this URL to go straight to the App located Server : http://atypics-56449.onmodulus.net/

# Access to the Admin space
We had created a login rules for EEMI to access to the admin space :

1) Click on the header Btn SignIn

2) login email : projet3adw@eemi.com 

3) login password : 3Aeemi2015

4) and then submit, you will arrive on the timeline.

5) then replace /timeline by /admin, if you tried to do an action and loggedin was required you will return to the last route. So just go to this url : http://atypics-56449.onmodulus.net/admin

6) You arrive on the Admin Space you can add new posts, tags and then please remove them.



# Waiting for file change and config :
- There is a bug when you will try to submit et Post because i didn't configure the Collection File Systeme on this server. 
  It will be modify to uplaod on Amazone Cloud Service.
- Facebook login is cofigure to redirect on localhost:3000 for testing but it's working perfectly in local.









# Documentation :

client :
Any directory named client is not loaded on the server. Similar to wrapping your code in if (Meteor.isClient) { ... }. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.)
    
HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: <head>, <body>, and <template>. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.
    
server :

Any directory named server is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory.

Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.

public :

All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference public/bg.png as <img src='/bg.png' />. This is the best place for favicon.ico, robots.txt, and similar files.

private :

All files inside a top-level directory called private are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don't want to be accessible from the outside.

client/compatibility :

This folder is for compatibility JavaScript libraries that rely on variables declared with var at the top level being exported as globals. Files in this directory are executed without being wrapped in a new variable scope. These files are executed before other client-side JavaScript files.


Technologies :
Meteor Js
Cordova
PhoneGap
Node Js

Programming languages :
JavaScript
CoffeScript
Json, Bson, Ejson

Database:
NoSql
MongoDB
MiniMongo

Deploy server:
Modulus

Deploy Database:
Compose

Deploy iOS:
Emulator

Deploy Android:
Emulator

atmospherejs.com is a web plateform where meteor developers are deploying packages and it’s the best way to discover reliable Meteor packages to install in meteor apps.

# Packages :

///// Meteor Base Packages /////

standard-minifiers

meteor-base

mobile-experience

mongo

blaze-html-templates

session

jquery

tracker

logging

reload

random

ejson

spacebars

check

less

underscore

templating

reactive-var

email

coffeescript

 ///// Meteor Front End /////
natestrauser:animate-css
fortawesome:fontawesome
twbs:bootstrap

///// Meteor Accounts /////

useraccounts:core

accounts-base

accounts-password

useraccounts:bootstrap

cunneen:mailgun

useraccounts:iron-routing

accounts-ui

service-configuration

accounts-facebook

accounts-google

accounts-twitter

bozhao:accounts-instagram

 ///// Meteor Router /////

iron:router@1.0.0

zimme:iron-router-active

 ///// Meteor Forms && MongoDB /////

aldeed:collection2

aldeed:autoform

reywood:publish-composite

matb33:collection-hooks

momentjs:moment

lukemadera:autoform-googleplace

dburles:collection-helpers

 ///// Meteor Forms && MongoDB File FS /////

yogiben:autoform-file

cfs:standard-packages

cfs:gridfs

cfs:ui

 ///// Meteor Security /////

alanning:roles

 ///// Meteor Admin /////

yogiben:admin

 ///// Meteor Search /////

matteodem:easy-search

 ///// Meteor Alert - Notif /////

juliancwirko:s-alert

juliancwirko:s-alert-stackslide

 ///// Meteor JavaScript Lib /////

underscorestring:underscore.string

 ///// Meteor DEV Helpfull Packages /////

meteortoys:allthings

 ///// Meteor SEO /////

yasinuslu:blaze-meta

 ///// Meteor SERVER /////

cmather:handlebars-server@0.2.0


Routes, main templates and views :

Available without login :
Home Page : 
Display top models and photographers, with latest posts.

Timeline :

Display latest 10 posts and projects create by users, search engine input.

SignIn :
SignIn with standard fields, or with Facebook, instagram, twitter and google.

SignUp :
SignUp with standard fields, or with Facebook, instagram, twitter and google.
Set defaults datas after submit.

Forgot Password

Resend Email verification

Choose profile type (Model, Photographer, Other) :
Only accessible after signUp, display 3 buttons with datas actions onClick, update the Users collection and init the profile Collection (Model, Photographer, Other).

Profile Model :
Display public model datas and associate posts. If current User is on his own profile he can update it.

Profile Photographer :
Display public photographer datas and associate posts. If current User is on his own profile he can update it.

Privacy
Terme of use


