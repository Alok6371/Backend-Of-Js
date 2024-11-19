require('dotenv').config()

const express = require('express')
// import express from 'express'

const app = express()

// const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
    
})

app.get('/twi', (req, res) => {
    res.send("AlokPradhan@Twitter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at chai Aur Code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
