const index = async (req, res, next) => {
  res.json({ message: 'Hello World' })
  return
  //return error like this
  //this error will be catch by errorHendeler
  next(new Error('email, pass is required'))
}

module.exports = { index }
