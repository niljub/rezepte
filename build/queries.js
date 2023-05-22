"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIngredientToRecipe = exports.createIngredient = exports.getIngredientById = exports.getIngredients = exports.createRecipe = exports.getRecipeById = exports.getRecipes = void 0;
const db_1 = require("./db");
function getRecipes() {
    return db_1.pool.query('SELECT * from recipe');
}
exports.getRecipes = getRecipes;
function getRecipeById(id) {
    return db_1.pool.query('SELECT * from recipe WHERE id =' + id);
}
exports.getRecipeById = getRecipeById;
function createRecipe(name, description, img) {
    const query = "INSERT INTO recipe (name, description, img) VALUES ($1, $2, $3) RETURNING id";
    const data = [name, description, img];
    return db_1.pool.query(query, data);
}
exports.createRecipe = createRecipe;
function getIngredients() {
    return db_1.pool.query('SELECT * from ingredient');
}
exports.getIngredients = getIngredients;
function getIngredientById(id) {
    return db_1.pool.query('SELECT * from ingredient WHERE id =' + id);
}
exports.getIngredientById = getIngredientById;
function createIngredient(name, img) {
    const query = "INSERT INTO ingredient (name, img) VALUES ($1, $2) RETURNING id";
    const data = [name, img];
    return db_1.pool.query(query, data);
}
exports.createIngredient = createIngredient;
function addIngredientToRecipe(recipe_id, ingredient_id, quantity, unit) {
    const query = "INSERT INTO recipe_ingredient VALUES ($1, $2, $3, $4) RETURNING $1";
    const data = [recipe_id, ingredient_id, quantity, unit];
    return db_1.pool.query(query, data);
}
exports.addIngredientToRecipe = addIngredientToRecipe;
