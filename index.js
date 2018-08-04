const h = require('./helpers');
const config = require('./config');

/**
 * getZacksData
 * @param symbol
 * @returns {Promise}
 */
module.exports.getZacksData = (symbol) => {

  const query = config.zacks.baseUrl + `index?t=${symbol.toLowerCase()}`;

  return h.fetch(query);
};