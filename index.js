import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

const addedData = []

app.get("/", (req, res)=>{
    res.render("index.ejs", {addedData});
}) 
  
app.post("/add", (req, res)=>{
   if (req.body.tital || req.body.add) {
    const destuctedOBJ = {
        ...req.body,
        idNo:addedData.length+1
    };
    addedData.push(destuctedOBJ); 
   }
    res.render("add.ejs")
})  
    
app.post("/about", (req, res)=>{
    res.render("about.ejs")
}) 

app.get("/readMore/:aKey", (req, res)=>{
    var index = addedData.findIndex( (obj) =>{
        return obj.idNo == req.params.aKey;
    });

    var mainObj = addedData[index]

    res.render("readmore.ejs",mainObj)

})

app.listen(3000, ()=>{
    console.log("server is runing on port 3000");
})    