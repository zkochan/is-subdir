'use strict'
const test = require('tape')
const path = require('path')
const isSubdir = require('.')

test('isSubdir()', t => {
  t.ok(isSubdir(process.cwd(), path.resolve('node_modules')))
  t.ok(!isSubdir(process.cwd(), path.resolve('..')))

  t.ok(isSubdir('node_modules', path.resolve('node_modules', 'tape')))

  t.end()
})
