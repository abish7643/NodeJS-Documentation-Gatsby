---
title: 'Create Server Using HTTP'
---

## Using HTTP Module

To import http,

```javascript
const http = require("http");
```

### Creating and Listening To Server
   
To create an http server, use the createServer method,
```javascript
const server = http.createServer((req, res) => {
  console.log(req.headers.host); // localhost:3000
  console.log(req.url, req.method); // Example of Method is POST, GET etc

  // Listen to localhost:3000 to interact with the server,
  server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
  });
}
```

### Handling Simple Routing and HTML Response Views

To respond to a request from the client, a html can be sent as a response. Therefore the already created server gets a request, get the path, send back the required html file accordingly.

Create index.html, about.html, 404.html in a new directory, usually the directory is given the name views. 
> For example if the client requires the home page, the path to index.html, ie './views/index.html' can be passed as response.

Also a status code has to be given accordingly so that the client knows exactly what happended in a nutshell. For example status code 404 means the server has no fucking response to show you for the request you made.

```javascript
const server = http.createServer((req, res) => {
  console.log(req.headers.host); // localhost:3000
  console.log(req.url, req.method); // Example of Method is POST, GET etc

  let path = "./views/"; // views folder path
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // Redirect
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about"); // Redirecting
      res.end(); // Ending the response
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  console.log(path);  

  // Listen to localhost:3000 to interact with the server,
  server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
  });
}
```