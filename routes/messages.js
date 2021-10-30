var express = require('express');
var router = express.Router();

var Message = require('../models/message');

//const { Schema } = require('mongoose');


router.get('/', function (req, res, next) {
    Message.find()
        .exec(function(err, result) {
            if (err) {
                return res.status(500).json({
                    myErroTitle: 'Um erro aconteceu na hora de buscar a mensagem',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: 'Mensagem recuperada com sucesso',
                objSMessageSRecuperadoS: result
            });
        });
});

module.exports = router;