// const express= require('express')
import express from 'express';

const app= express()

app.use(express.static('dist')) // After build the front end that can be use in the backend

app.get('/',(req,res)=>{
    res.send("Server is ready")
})


//get a list of 5 Jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"A Joke",
            content:"This is a Joke"

        },{
            id:2,
            title:"Second Joke",
            content:"This Second a Joke"

        },
        {
            id:3,
            title:"A ThirdJoke",
            content:"This is Third Joke"
        },{
            id:4,
            title:"A forth Joke",
            content:"This is forth Joke"
        },
        {
            id:5,
            title:"Fifth Joke",
            content:"This is Fifth Joke"
        }
    ]
    res.send(jokes)
})

const port=process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log(`Server is Ready ${port}`);
    
 })