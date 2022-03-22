exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if(!req.body.name || !req.body.budget){
    res.status(400).json({ message: 'name and budget are required'})
  }else if(req.body.name.trim().length < 3 || req.body.name.trim().length > 100 ){
    res.status(400).json({ message: 'name of account must be between 3 and 100"'})
  }else if(!parseInt(req.body.budget)){
    res.status(400).json({ message: 'budget of account must be a number'})
  }else if(parseInt(req.body.budget) < 0 || parseInt(req.body.budget) > 1000000 ){
    res.status(400).json({ message: 'budget of account is too large or too small'})
  }else{
    next();
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  let test;

  db('accounts').where('name', req.body.name.trim()).first()
  .then(resp => {
    test = resp;

    if(resp){
      console.log('there is a resp');
    }else{
      console.log('there is NOT a resp');
    }
  })
  .catch(error => {
    console.log(error);
  })
  // DO YOUR MAGIC

}

exports.checkAccountId = (req, res, next) => {
  db('accounts').where('name', req.body.name)
  .then(resp => {
    console.log(resp)
  })
  .catch(error => {
    console.log(error);
  })
}
