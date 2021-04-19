# JS Keywords
Custom keywords in JavaScript!

*(this is not a serious repository, PLEASE don't use it in production code)*

## Create your keywords:
Just define a handler function and a maximum number of arguments:
```js
const my_keywords = {
  print:  msg =>            console.log("PRINT: " + msg),
  split:  (text, char) =>   console.log(text.split(char)),
  add:    (a, b, c, d) =>   console.log(a + b + c + d)
}
```

## Then, use them in a `with` block:
```js
with (useKeywords(keywords)) {
  print, sHelloworld
}
```

**Params:**
only number or string supported for now.
1. `n<number>` ex: `n1002` becomes `1002`
2. `s<string>` ex: `sBlue` becomes `"Blue"`
   
```js
with (proxy) {
  add, n10, n30, n5, n8
}
```
