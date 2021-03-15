const PORT = 5000
const mongo_uri = "mongodb+srv://ivic:edBUiCVTokIQpfXi@cluster0-z9jrb.mongodb.net/test-new?retryWrites=true&w=majority"
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use(morgan("dev"))

app.use("/", require("./order.routes"))

mongoose.connect(mongo_uri, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to Mongodb")
})
.catch(err => {
    console.log(err)
})


app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})


