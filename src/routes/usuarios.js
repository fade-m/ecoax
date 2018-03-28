const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('ecoax', ['usuarios']);

router.get('/usuarios', (req,res,next) => {
    db.usuarios.find((err,usuarios) => {
        if (err) return next(err);
        res.json(usuarios);
    })
});


router.get('/usuarios/:id', (req,res,next) => {
    db.usuarios.findOne({_id: req.params.id}, (err,usuario) => {
        if (err) return next(err);
        res.json(usuario);
    })
});

router.post('/usuarios', (req,res,next) => {
    const usuario = req.body;
    if(!usuario.nombre) {
        res.status(400).json({
            error: 'bad data'
        });
    }else {
        db.usuarios.save(usuario, (err,usuario) => {
            if (err) return next(err);
            res.json(usuario);
        });
    }


});



module.exports = router;