/* @flow */
/**
 * Application routes.
 * @module Routes
 */

const nextRoutes = require('next-routes');
const routes = nextRoutes();

routes.add('index', '/');
routes.add('about', '/about-us');
routes.add('contact', '/contact');

module.exports = routes;
