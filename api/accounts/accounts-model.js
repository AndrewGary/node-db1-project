const db = require('../../data/db-config');


const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
   return db('accounts').where('id', id).first();
}

const create = account => {
  // DO YOUR MAGIC
  db('accounts').insert(account)
  .then(resp => {
    return resp;
  })
  .catch(error => {
    console.log(error);
  })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts').where('id', id).update(account) //THIS ONE MIGHT BE WRONG
}

const deleteById = id => {
  // DO YOUR MAGIC
  db('accounts').where('id', id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
