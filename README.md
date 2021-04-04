#   To Do App 
Backend for https://github.com/santiago120600/To_Do_App_Mongo
Using [express](http://expressjs.com/), [mongoose](https://mongoosejs.com/) 

##  Installation
1. `npm install` 
2. `node index`

## Routes

### GET

http://localhost:3030/todos/

### POST

http://localhost:3030/todos/
```
    {
        "title":"test #2",
        "completed":true
    }
```    
### DELETE

http://localhost:3030/todos/:id

### PUT

http://localhost:3030/todos/:id
