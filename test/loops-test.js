/*global describe, it*/

const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect

function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

{
  function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }
  do {
     array.pop()
  } while ( array.length > 0 && maybeTrue())
  
return array
}

  