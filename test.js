'use strict'
const test = require('tape')
const path = require('path')
const isSubdir = require('.')
const isWindows = require('is-windows')()

test('isSubdir()', t => {
  t.ok(isSubdir(process.cwd(), path.resolve('node_modules')))
  t.ok(!isSubdir(process.cwd(), path.resolve('..')))

  t.ok(isSubdir('node_modules', path.resolve('node_modules', 'tape')))

  if (isWindows) {
    t.ok(isSubdir('C:', 'C:\\.pnpm-store'))
  }

  t.end()
})
