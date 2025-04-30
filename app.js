const express = require('express');
const pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req,res)=> res.send("Hello dans mon app express !"));
app.get('/api/pokemons', (req,res)=>{
    res.send(`Il y a ${pokemons.length} pokemons dans le pokédex pour le moment.`)
});
app.get('/api/pokemons/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon=>pokemon.id === id);
    res.json(pokemon)
});

app.listen(port, ()=> console.log(`Notre application node est démarré sur: http://localhost:${port}`));