//# HTTP-SERVER-of-kidney-doctor-logic

//1.GET - User can  check how many kidneys they have and their health.
//2.POST- User can add a new kidney 
//3.PUT-User casn replace a kidney,make it healthy 
//4.DELETE User can remove a kidney

const express = require ('express');
const app = express ();

 const users =[{
    name:"john",
    kidneys :[{
        healthy:false
    }]
 }];

 app.use (express.json());

app.get ('/',function (req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let  numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if (johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys ;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
 
app.post ("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy :isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for (let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true ;
    }
    res.json({});
})
// removing all the unhealthy kidneys

app.delete ("/",function(req,res){
    const newKidneys = []
    for(let i = 0; i<users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "You have good kidneys bro !"
    })
})
app.listen (3000);
