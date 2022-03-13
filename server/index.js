const express = require("express")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth.route")
const dotenv = require('dotenv'); 
const cors = require('cors');
dotenv.config()

const app = express()
app.use(cors());

const  dbURI = process.env.DATABASEURL
app.use(express.json())

app.use('/api/auth', authRoute)


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started enjoy!!!!")})

const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => {
//     res.send("Working")
// })

app.listen(PORT, () => {console.log(`Sever live at https://localhost:${PORT}/api/auth`)})