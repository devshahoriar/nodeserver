const urlNotFound = (req, res) => {
  res.json({ message: 'url not found' })
}

module.exports = urlNotFound