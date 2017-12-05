const app = require('../../src/server')
const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const reset = require('../helpers/db')

chai.use(chaiHttp)

decribe('end to end testing', function() {
  beforeEach('reset the database', function() {
    return reset()
  })
  
})
