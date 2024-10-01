'use strict';

/**
 * count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::count.count');
