import express, { Application, Request, Response } from 'express';
import { pool } from './db';
import { getRecipes, getRecipeById, createRecipe, createIngredient, getIngredients, getIngredientById, addIngredientToRecipe } from './queries';

const app: Application = express();

const PORT: number = 3001;

app.use(express.urlencoded());
app.use(express.json());

app.use('/getrecipes', (req: Request, res: Response): void => {

    getRecipes()
        .then(result => { 
            res.json(result.rows);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })

});


app.use('/getrecipe/:recipeId', (req: Request, res: Response): void => {

    getRecipeById(req.params.recipeId)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })

});

app.use('/createrecipe', (req: Request, res: Response): void => {

    createRecipe(req.body.name, req.body.description, req.body.img).
        then(result => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })
});


app.use('/createingredient', (req: Request, res: Response): void => {

    createIngredient(req.body.name, req.body.img).
        then(result => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })
});

app.use('/getingredients', (req: Request, res: Response): void => {

    getIngredients()
        .then(result => { 
            res.json(result.rows);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })

});

app.use('/getingredient/:recipeId', (req: Request, res: Response): void => {

    getIngredientById(req.params.recipeId)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })

});

app.use('/addingredienttorecipe', (req: Request, res: Response): void => {

    addIngredientToRecipe(req.body.recipe_id, req.body.ingredient_id, req.body.quanitity, req.body.unit).
        then(result => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            res.send("ERROR: " + error);
        })
});




app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});