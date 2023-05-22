"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const queries_1 = require("./queries");
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use('/getrecipes', (req, res) => {
    (0, queries_1.getRecipes)()
        .then(result => {
        res.json(result.rows);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/getrecipe/:recipeId', (req, res) => {
    (0, queries_1.getRecipeById)(req.params.recipeId)
        .then(result => {
        res.send(result.rows);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/createrecipe', (req, res) => {
    (0, queries_1.createRecipe)(req.body.name, req.body.description, req.body.img).
        then(result => {
        res.send(result.rows[0]);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/createingredient', (req, res) => {
    (0, queries_1.createIngredient)(req.body.name, req.body.img).
        then(result => {
        res.send(result.rows[0]);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/getingredients', (req, res) => {
    (0, queries_1.getIngredients)()
        .then(result => {
        res.json(result.rows);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/getingredient/:recipeId', (req, res) => {
    (0, queries_1.getIngredientById)(req.params.recipeId)
        .then(result => {
        res.send(result.rows);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.use('/addingredienttorecipe', (req, res) => {
    (0, queries_1.addIngredientToRecipe)(req.body.recipe_id, req.body.ingredient_id, req.body.quanitity, req.body.unit).
        then(result => {
        res.send(result.rows[0]);
    })
        .catch(error => {
        res.send("ERROR: " + error);
    });
});
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
