---
title: "Global Object"
---

## Window Object & Global Object

Global Object is similar to window object available in the browser. It consist of a host of methods. Window methods such as querySelector isn't available since Nodejs runs on a server.

### Some Methods From The Global Objects
```javascript
setTimeout(() => {
  console.log("Wait for Next 3 Second");
  clearInterval(interval); // interval stop after timeout
}, 3000);

const interval = setInterval(() => {
  console.log("Runs Every Second");
}, 1000);
```

### Getting the path of directory & file

```javascript
console.log(__dirname);
console.log(__filename);
```