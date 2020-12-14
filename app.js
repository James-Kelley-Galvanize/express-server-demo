const express = require('express');
const cors = require('cors');

const app = express();   // create the server
const port = 3001;          

app.use(cors());
app.use(express.json()) // parse incoming request for JSON


app.use((request, response,next)=>{
    console.log(`\nRequest coming in!`);
    console.log(`Method: `, request.method);
    console.log(`URL: `, request.url)
    next()
})


// Route
app.get(`/`, (request, response)=>{
    
    if(request.query.username){
        console.log(`REQUEST QUERIES:`,request.query)
        response.send("You made a query");
    } else {
        response.send("I am the get route at the base endpoint!")
    }
} )

// looking for params after the colon
app.get('/users/:varName', (request, response)=>{
    // request.params
    response.send(request.params)
})


app.post('/', (request, response)=>{

    console.log(`BODY: `,request.body)

    response.send("I'm the post route at the base endpoint!")
})

app.patch('/update', (request, response)=>{
    response.send("I am the patch route!")
})


app.listen(port, ()=>{
    console.log(`Server is up and running`);
})