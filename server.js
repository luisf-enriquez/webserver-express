const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

require('./helpers/helpers')

const port = process.env.PORT || 3000;

const dirNode_modules = path.join(__dirname, './node_modules');

//midleware: es un callback que se ejecuta siempre sin importar la url
//para que use el contenido de la carpeta public

app.use(express.static(__dirname + '/public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

hbs.registerPartials(__dirname + '/views/partials');

//view Engine
app.set('view engine', 'hbs');


//routes
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'luis'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Conectado en el puerto ${port}`)
});