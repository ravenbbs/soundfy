/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules
 * */
const { getData } = require("../config/axios.config");
const { getUrlQuery } = require("../utils/helpers.util");


/**
 * Get a list categories used to tag items in Spotify
 * @param {Object} req - server request object 
 * @returns {Object}
 */
const getSeveralDetail = async (req) => {
  const { limit, offset, page } = getUrlQuery(req.params);

  const { data: { categories }} = await getData(`/browse/categories?limit=${limit}&offset=${offset}`, req.cookies.access_token)

  return { baseUrl: req.baseUrl, page, name: 'Explore', ...categories }

}

module.exports = {
  getSeveralDetail
}