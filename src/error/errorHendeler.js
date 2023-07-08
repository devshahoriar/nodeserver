const errorHendeler = (err, req, res, next) => {
  console.log('Error from errorHandling')
  console.log(err)
  res.status(500)

  if (typeof err === 'string') {
    res.json({ message: err, success: false })
    return
  }

  // if (err.code === 'P2002') {
  //   res.json({
  //     message: 'filds are duplicate.',
  //     meta: err.meta.target,
  //     success: false,
  //   })
  //   return
  // }

  res.json({ message: 'Something went wrong.', success: false })
}

module.exports = errorHendeler
