'use strict';

/**
 * custom-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-client.custom-client');
