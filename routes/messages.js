var express = require('express');
const { Schema } = require('mongoose');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de...',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave: result
        });
    });
});



module.exports = router;