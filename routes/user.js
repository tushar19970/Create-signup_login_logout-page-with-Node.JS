const {generateToken, accessToken} = require('../Auth/auth')
const bcrypt = require('bcrypt')
const express = require("express")
const knex = require('../database/db')
const router = express.Router()


//// This is a signup function 
router.post('/signup', (req, res) => {
    const hash = bcrypt.hashSync(req.body.Password,10)
    knex.select('*').from('Data').where('Email', req.body.Email).then((data) => {
        if (data.length < 1){
            knex('Data').insert({
                "Name" : req.body.Name,
                "Last_Name" : req.body.Last_name,
                "Email" : req.body.Email,
                "Password" : hash
            }).then((data) => {
                res.send("Your signup has been successfully")
                console.log("Your signup has been successfully");
            }).catch((err) => {
                res.send({"err":err.message})
                console.log({"err":err.message});
            })
        } else{
            res.send("You have already signup :")
            console.log("You have already signed");
        }
    })  
})

//// This is a login function 
router.post('/login', (req, res) => { 
    knex.select("*").from('Data').where('Email',req.body.Email).then((data) => {
        if (data < 1) {
            res.send('You cant login this page\nBecause you did not signup yet..')
        } else {
            const match = bcrypt.compareSync(req.body.Password, data[0].Password)
            if(match){
                const data1 ={'Email':data[0].Email,'Password':data[0].Password,'Name':data[0].Name,'Last_name':data[0].Last_name}
                // console.log(data1);
                const token = generateToken(data1)
                res.cookie('token', token) 
                res.status(200).send("Your login has completed successfully..")
                console.log('Your login has completed successfully..');
            }else{
                res.send({ "Error": "Password is invalid" })
            }
        }
    })
})

//// This is logout function 
router.get('/logout', accessToken, (req, res) => {
    try{
        res.clearCookie('token')
        res.send('Logout successfully..')
        console.log("Logout successfully..");
    }catch(err){
        res.send(err.message)
    }
})

module.exports = router
