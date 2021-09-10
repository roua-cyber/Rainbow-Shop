const express=require('express')
const app=express()
const ConnectDB=require('./helpers/ConnectDB')
ConnectDB()
app.use(express.json())
app.use('/register',require('./routes/register'))
app.use('/login',require('./routes/login'))
app.use('/post',require('./routes/post'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
 