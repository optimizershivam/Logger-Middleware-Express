// Problem statement

// Configure a middleware called as 'morgan' for express
// Look for docs to learn how to configure it
// Print following data on every single request on server:
// Method
// status
// content-length
// time taken
// date
// http version
// url accesed
// newline at the end


const express = require("express")

const app = express()
const morgan = require("morgan")



  const logger = (tokens, req, res) => {
  
        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'), '-',
          tokens['response-time'](req, res), 'ms'
        ].join(' ')
      }

  
  app.use(morgan(logger))
  app.get("/",(req,res)=>
  {
    res.send("Hello world")
  })
  
  app.get("/products",(req,res)=>{
    res.send("Products page")
  })
  app.get("/mobile",(req,res)=>{
    res.send("Mobile page")
  })
  

app.listen(8080, ()=> {
    console.log("Server started")
})