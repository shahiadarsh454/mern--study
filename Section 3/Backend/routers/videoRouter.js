const express = require('express');
const router=express.Router();
router.get('/add',(req,res)=>{
    res.send('add videorequest!!');
});
router.get('/getall',(req,res)=>{
    res.send('run video');
})
module.exports=router;