'use strict';

/**
 * custom-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-client.custom-client');
