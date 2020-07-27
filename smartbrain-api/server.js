const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const id = require('./controllers/id')
const image = require('./controllers/image')
const knex = require('knex')
const clarifai = require('clarifai')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'canyon',
    password : '36659206',
    database : 'smart-brain'
  }
});

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{res.send(database.users);})

app.post('/signin',(req,res)=>(signin.handleSignIn(req,res,db,bcrypt)))

app.post('/register',(req,res)=> {register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{id.handleId(req,res,db)})

app.put('/image',(req,res)=>{image.handleImage(req,res,db)})

app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})

app.listen(3000, ()=>{
	console.log('app is running on 3000');
})


/*
API DESIGN

/ --> res = this is working

/signin -> POST = success / fail


/register -> POST = user

/profile/:userId --> GET = user

/image --> PUT --> user (count)

*/