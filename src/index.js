const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
//const indexRutas = require('./routes/index');
const usuariosRutas = require('./routes/usuarios');
//app.use(indexRutas);
app.use('/api',usuariosRutas);

//static files
app.use(express.static(path.join(__dirname, 'dist')));

//start server
app.listen(app.get('port'), () => {
    console.log("Server on port" + app.get('port'));
})

