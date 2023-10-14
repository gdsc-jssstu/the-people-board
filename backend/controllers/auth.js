const express = require('express');
const router =  express.Router();

const bypass =  require('../middleware/bypass');
const knex = require('knex')

router.get('/',bypass,(req,res )=> {
    res.send("Working User API")
});


router.get('/get',bypass, async (req,res)=>{
    const ans = await knex.select().table(user);
    res.json({ans})
});

module.exports = router