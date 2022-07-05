'use strict';

/**
 *  project controller test
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project');
