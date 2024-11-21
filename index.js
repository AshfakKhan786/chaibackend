require('dotenv').config()
const express =require('express');
const app=express();
const port =3000;

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/youtube',(req,res)=>{
    res.send('my youtube chennal')
})
app.listen(process.env.PORT,()=>{
    console.log('app is running on port',3000)
})