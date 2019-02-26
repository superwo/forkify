// Global app controller
//96c0f156a634b7a19acd17bd9684e913
import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - LIked recipes
 */
const state = {};

const search = new Search('pizza');

console.log(search);
search.getResults();