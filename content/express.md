---
title: 'Express JS'
---

## Express

Express is a framework which is used to make HTTP requests as easy as possible and also include other host of features.

### Why Express?

You saw how to setup an HTTP request before. If it's a really large app, these routing can be a pain in the ass. Enough ditching http, express has a ton of features with very low amount of configuration required as well as it's literally easy to customize. For example we'll be using ejs for adding dynamic data in the html file. It's literally easy to integrate any kind of view engine like ejs, pug etc with express.

> So Express is a framework to handle server side logic in an easy and elegant manner.

### Make a Express App
- Import Express
  
  ```javascript
  const express = require("express");
  ```

- Make an Instance of Express
  
  ```javascript
  const app = express();
  ```

- Listen to Request
  
  ```javascript
  app.listen(3000); // Port 3000
  ```

- Handle Routes

  Express sets the Content-Type and Status Code Automatically.
  
  ```javascript
  app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
    // Express looks for a absolute path => __dirname has to be passed
  }
  ```

