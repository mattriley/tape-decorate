# tape-decorate

Decorate your [tape](https://github.com/substack/tape) tests for greater extensibility.

Ensures `tape.only` and `tape.skip` are also decorated to preserve behaviour.

## Install

`npm install tape-decorate --save-dev`

## Usage

```js
const tape = require('tape');
const decorate = require('tape-decorate');

const test = decorate(tape, test => (...args) => { 
    const cb = args.pop();      
    test(...args, t => {
         // custom code here
         return cb(t);
    );
});
```
