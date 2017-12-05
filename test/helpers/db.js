const db = require('../../src/models/db/db')

const clearColums = () => {
  return db.none('TRUNCATE TABLE contacts;')
  .then((result) => {
    console.log('successful truncate')
  })
}

const clearId = () => {
  return db.any('ALTER SEQUENCE "contacts_id_seq" RESTART with 1;')
  .then((result) => {
    console.log('successful reset of ids')
  })
}

const reseedData = () => {
  return db.any('INSERT INTO contacts (first_name, last_name) VALUES ('Jared', 'Grippe'),('Tanner', 'Welsh'),('NeEddra', 'James')')
  .then((result) => {
    console.log('successful seeded data')
  })
}

const reset = () => {
  return clearColums()
  .then(() => clearId())
  .then(() => reseedData())
  .catch(console.error)
}

module.exports = reset
