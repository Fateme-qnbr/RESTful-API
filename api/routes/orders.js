const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        massage: 'You GET order'
    });

});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        massage: 'You Post order'
    });

});
router.get('/:orderid',(req,res,next)=>{
    res.status(200).json({
        massage: 'You passed the orderid',
        orderid: req.params.orderid
    });

});
router.delete('/:orderid',(req,res,next)=>{
    res.status(200).json({
        massage: 'You deleted the orderid',
        orderid: req.params.orderid
    });

});
module.exports =router