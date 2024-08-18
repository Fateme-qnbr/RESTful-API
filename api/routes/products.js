const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        massage: 'Handling GET request to /products'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        massage: 'Handling POST request to /products'
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            massage: 'You discovered the special Id',
            id: id
        });

    }else{
        res.status(200).json({
            massage: 'You passed an Id'
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
   res.status(200).json({
    massage: 'Update product!'
   })
});
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
     massage: 'Delete product!'
    })
 });
 
module.exports = router;