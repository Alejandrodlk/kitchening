const express = require("express")
const path = require("path")

const app = express()
const port = 3030

app.use(express.static("public"))


app.get("/" , (req,res) => res.sendFile(path.resolve(__dirname , "views/index.html")))




app.listen(port , () => console.log(`Servidor corriendo en http://localhost:${port}`))