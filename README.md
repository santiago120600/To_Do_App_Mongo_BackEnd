#   To Do App 
Backend for https://github.com/santiago120600/To_Do_App_Mongo
Using [express](http://expressjs.com/), [mongoose](https://mongoosejs.com/) 

##  Installation
1. `npm install` 
2. `node index`

Routes
GET
POST
http://localhost:3030/todo/new
    {
        "title":"test #2",
        "completed":true
    }
DELETE
http://localhost:3030/todo/remove
    {
        "id":"606a04cdd99453391cb12d60"
    }
UPDATE
