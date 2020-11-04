---
title: 'Streams and Buffer'
---

## Streams and Buffer

Streams are used to get very large data in a progressive way so that the
server doesn't need to wait till the whole data is brought. So Reading as Chunks of Data. Basically it's just like streaming a video.

Read & Write Stream

```javascript
const readStream = fs.createReadStream('./docs/long-data.txt', {
  encoding: 'utf8',
});
//Make Enoding to Utf-8 in readStream to avoid toString Method

const writeStream = fs.createWriteStream('./docs/write-stream.txt');
```

Reading Chunk of Data and Writing to another file

```javascript
readStream.on('data', chunk => {
  console.log('---------Chunk---------');
  console.log(chunk);

  writeStream.write('--------Chunk--------');
  writeStream.write(chunk);
});
```

This Whole Process of Reading Chunks and Writing the Same to another file can be implemented using pipes, which simplifies the above code

```javascript
readStream = pipe(writeStream);
```
