import { pool } from './db';


export function getRecipes(): Promise<any> {
    return pool.query('SELECT * from recipe');
}

export function getRecipeById(id: string): Promise<any> {
    return pool.query('SELECT * from recipe WHERE id =' + id);
}

export function createRecipe(name: string, description: string, img: string): Promise<any> {

    const query = "INSERT INTO recipe (name, description, img) VALUES ($1, $2, $3) RETURNING id";
    const data = [name, description, img];

    return pool.query(query, data);
}

export function getIngredients(): Promise<any> {
    return pool.query('SELECT * from ingredient');
}

export function getIngredientById(id: string): Promise<any> {
    return pool.query('SELECT * from ingredient WHERE id =' + id);
}

export function createIngredient(name: string, img: string): Promise<any> {

    const query = "INSERT INTO ingredient (name, img) VALUES ($1, $2) RETURNING id";
    const data = [name, img];

    return pool.query(query, data);
}

export function addIngredientToRecipe(recipe_id: string, ingredient_id: string, quantity: string, unit:string): Promise<any> {

    const query = "INSERT INTO recipe_ingredient VALUES ($1, $2, $3, $4) RETURNING $1";
    const data = [recipe_id, ingredient_id, quantity, unit];

    return pool.query(query, data);
}