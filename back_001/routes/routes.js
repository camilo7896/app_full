const express = require('express');
const modelUser = require('../schemas/model');
const router = express.Router();


router.get('/', async (req, res)=>{
    const respuesta = await modelUser.find({}) 
    res.json(respuesta)
})

router.post('/', async (req, res)=>{
    const body = req.body;
    const respuesta =  await modelUser.create(body)
    res.send(respuesta)
})

router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    const respuesta = await modelUser.findById(id)
    res.send(respuesta)
})

router.put('/:id', async(req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await modelUser.findOneAndUpdate({_id:id}, body)
    res.send(respuesta)
})

router.delete('/:id', async(req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await modelUser.deleteOne({_id:id})
    res.send(respuesta)
})


module.exports= router