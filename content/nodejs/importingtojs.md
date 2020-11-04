---
title: "Importing From Other JS Files"
---
## Importing From Other Files

require("path/filename") helps to execute files to be imported.

```javascript 
// module.js file
const list = require("./functions");
// importing functions.js
```
if there no export in the functions.js file, then list becomes an empty object. To access the stuff in function.js file, an export has to be done as shown below.

```javascript
// function.js file
const list_people = ["Austin", "Linus", "Dave", "MKBHD", "Mathew Moniz"];
const field = ["Mystery tech", "LTT Store", "Laptops", "Kidney"];

module.exports = list_people;
```
Now list will become an object with list_people within the same. Inorder to access multiple variables in function.js,

```javascript
// function.js file
const list_people = ["Austin", "Linus", "Dave", "MKBHD", "Mathew Moniz"];
const field = ["Mystery tech", "LTT Store", "Laptops", "Kidney"];

module.exports = {
  people: list_people,
  field, //equivalent to field: field
};
```
Now list will become an object with two list, people and field. If multiple items are exported from a file, destructuring can be used while importing inorder to simplify the usage.


```javascript 
const { people, field } = require("./functions");
```