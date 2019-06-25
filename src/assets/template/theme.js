const { TEMPLATE } = process.env
module.exports = require(`./${TEMPLATE || '3s'}/theme`) // eslint-disable-line
