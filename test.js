'use strict'
const test = require('tape')
const path = require('path')
const isSubdir = require('.')

test('all', t => {
  t.ok(isSubdir(process.cwd(), path.resolve('node_modules')))
  t.ok(!isSubdir(process.cwd(), path.resolve('..')))
  t.end()
})
