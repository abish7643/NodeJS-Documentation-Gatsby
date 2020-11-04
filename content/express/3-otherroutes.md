---
title: 'Routes'
---
- Redirect Page
  
  Express automatically sets the status code of redirect

  ```javascript
  app.get("/about-me", (req, res) => {
    res.redirect("about"); 
  });
  ```

- Using Static Files

  Convectionally a public folder is created to serve static files. Static files can be images, css etc. Make a 'public' directory and add static files.
  
  ```javascript
  app.use(express.static("public"));
  ```

- 404 Page
  
  The use method in Express will run wherever want. If any of the request url doesn't match a 404 page has to be given back. Therefore this use method along the 404 page has to reside at the bottom of the code so that after checking each and every route if nothing matches, this will fire!

  ```javascript
  app.use((req, res) => {
    res.status(404).render("404");
  });
  ```
  Note: Express executes the above block each and every time no other route matches, therefore it doesn't know that this is a 404 error page. So has to chain status of 404 explicitely.

