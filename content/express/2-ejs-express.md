---
title: 'Using EJS'
---

- Using EJS
  
  1. Set the view engine as ejs,

  ```javascript
  app.set("view engine", "ejs");
  ```
  2. Create ejs files in views, for example we can rename about.html to about.ejs

  ```javascript
  app.get("/about", (req, res) => {
    res.render("about"); // Uses about.ejs
  });
  ```

  3. Pass Some Data to Make Make Dynamic HTML Files

  ```javascript
  app.get("/about", (req, res) => {
    
    const list = [
      { title: "Title 1", description: "Lorem Lepsum 1" },
      { title: "Title 2", description: "Lorem Lepsum 2" },
    ];

    res.render("about", { title: "About", list: list });
  });
  ```

  4. Use this data in the ejs file to be send as response
