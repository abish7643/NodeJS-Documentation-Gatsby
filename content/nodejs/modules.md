---
title: 'Inbuilt Modules'
---

## OS Module

Node comes with multiple modules out of the box such as fs, os and much more.

```javascript
const os = require('os');
console.log(os.platform(), os.homedir());
```

## File System (FS Module)

Operations including reading, writing, data streams etc. are available by default through the fs module

`const fs = require('fs')`

## Methods with FS Module

Methods from fs module are asychronous since it requires some amout of time to execute.

### Reading Files {#custom-id-one}

```javascript
fs.readFile('./docs/blog1.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  //Returns a buffer if encoding is not specified
  // Else toString method has to be used to convert to readable format.
});
```

### Writing Files

writeFile Method is used to write a file. If a file doesn't exist writeFile method creates one for us and writes onto it. _Note: A file can also be created using the open method & data can be appended to the file using the append method._

```javascript
fs.writeFile('./docs/blog2.txt', 'Hey Guys!', () => {
  console.log('Files Was Written');
});
```

### Deleting Files

existsSync Method is used to check whether the file exist or not, this is recommended inorder to handle error that may occur if file doesn't exist. unLink method is used to delete the file.

```javascript
if (fs.existsSync('./docs/docs.txt')) {
  fs.unlink('./docs/docs.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
```

### Creating or Removing Directories

existsSync is used to check whether the folder exists or not & mkdir method is used to create a folder while rmdir is used to remove a folder.

```javascript
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder removed');
  });
}
```
