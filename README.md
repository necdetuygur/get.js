# get.js
Node.js HTTP &amp; HTTPS GET Request

## For Dependencies
```npm install``` or ```npm i system-sleep```

## Example
```
var get = require('./get')
get('https://google.com', content => console.log(content.length))
```
or
```
var get = require('./get')
var content = get('https://google.com')
console.log(content.length)
```
