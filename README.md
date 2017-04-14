# is-subdir

> Return whether a directory is a subdirectory of another directory

<!--@shields('npm', 'travis', 'appveyor')-->
[![npm version](https://img.shields.io/npm/v/is-subdir.svg)](https://www.npmjs.com/package/is-subdir) [![Build Status](https://img.shields.io/travis/zkochan/is-subdir/master.svg)](https://travis-ci.org/zkochan/is-subdir) [![Build Status on Windows](https://img.shields.io/appveyor/ci/zkochan/is-subdir/master.svg)](https://ci.appveyor.com/project/zkochan/is-subdir/branch/master)
<!--/@-->

Cross-platform. Works correctly on Windows, where directory paths can start with disk drive letters in different casings. Like `c:\foo` and `C:\foo\bar`.

## Installation

```sh
npm i -S is-subdir
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const path = require('path')
const isSubdir = require('is-subdir')

console.log(isSubdir(process.cwd(), path.resolve('node_modules')))
//> true
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)
