---
title: 'Express App'
---

### Make an Express App
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

