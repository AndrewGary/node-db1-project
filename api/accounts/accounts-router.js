const router = require('express').Router()
const Account = require('./accounts-model');
const middleWare = require('./accounts-middleware');

const { checkAccountId, checkAccountNameUnique, checkAccountPayload } = middleWare;

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
  .then(resp => {
    console.log('herrrrr');
    res.status(200).json(resp);
  })
  .catch(error => {
    res.status(500).json({ message: 'Server Error'})
  })
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  Account.getById(req.params.id)
  .then(resp => {
    if(resp){
      res.status(200).json(resp);
    }else{
      res.status(404).json({ message: 'account not found' })
    }
  })
  .catch(error => {
    res.status(500).json({ message: 'Server Error' })
  })
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  Account.create(req.body)
  .then(resp => {
    
  })
  .catch(error => {
    res.status(500).json({ message: 'Server Error' })
  })
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
