'use strict'
const path = require('path')
const isWindows = require('is-windows')

const isSubdirOnNormalized = isWindows()
  ? isSubdirOnNormalizedWin
  : isSubdirOnNormalizedNonWin

module.exports = function isSubdir(parent, dir) {
  return isSubdirOnNormalized(
    path.resolve(parent),
    path.resolve(dir)
  )
}

function isSubdirOnNormalizedWin (parent, dir) {
  const parentParts = parent.split(':')
  const dirParts = dir.split(':')
  return parentParts[0].toLowerCase() === dirParts[0].toLowerCase() &&
    dirParts[1].startsWith(parentParts[1])
}

function isSubdirOnNormalizedNonWin (parent, dir) {
  return dir.startsWith(parent)
}
