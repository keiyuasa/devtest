# devTest
## Download
```
$ git clone https://github.com/keiyuasa/devtest.git
```
## Deploy
```
$ cd devtest
$ cd devEmber
$ ember build --environment=production --output-path=../public/
```

## Run
```
$ cd ..
$ node server.js
```

## Access
In browser, access to http://localhost:3000/

You can access to http://localhost:3000/users to get a list of users, and http://localhost:3000/user/:id to get a single user.

## Development
The top directory (devtest) is written in node, and sub directory (devEmber) is written in Ember-js.  When you develop the page in Ember, you can set up server in Ember.
```
$ cd devEmber
$ ember server
```
In browser, access to http://localhost:4200/
