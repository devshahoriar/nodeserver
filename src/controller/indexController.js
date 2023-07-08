const express = require('express')
const { index } = require('../router/home')

const router = express.Router()

router.all('/index', index)

module.exports = { router }
