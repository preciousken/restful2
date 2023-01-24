const express = require('express')
const uploadRouter = require('./router/upload')
const cors = require('cors')
const app = express()

app.get('/',(req,res)=>{
 res.status(200).json({
  welcome:'Welcome to the base URL'
 })
})

// middlewares
app.use(express.json())
app.use(cors())
app.use('/upload',uploadRouter)

const port  = process.env.PORT || 3000

app.listen(port,()=>{
  console.log(`
  App listening on port ${port}
  `)
})