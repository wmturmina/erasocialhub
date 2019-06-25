const { TEMPLATE } = process.env
module.exports = require(`./${TEMPLATE || '3s'}/Logo`) // eslint-disable-line
