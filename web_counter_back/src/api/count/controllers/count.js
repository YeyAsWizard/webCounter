'use strict';

/**
 * count controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::count.count');
