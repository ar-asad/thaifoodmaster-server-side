const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');



app.get('/', (req, res) => {
    res.send('cheif api is running');
});

app.get('/chef', (req, res) => {
    res.send(chef);
});

app.get('/chefDetails/:id', (req, res) => {
    const paramId = req.params.id;
    const identyChef = chef.find(c => +c.id === +paramId)
    res.send(identyChef)
});

app.get('/recipes/:id', (req, res) => {
    const recipeId = req.params.id;
    const recipes = recipe.filter(r => +r.recipe_id === +recipeId);
    res.send(recipes)
})


app.listen(port, () => {
    console.log('ThaifoodMaster running on', port);
})