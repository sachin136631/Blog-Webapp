import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
var count=-1;
let array=[];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{arr:array,c:count});
});

app.post("/submit",(req,res)=>{
    count++;
    var data=req.body;
    array[count]=data;
    res.render("index.ejs",{arr:array,c:count});
    
});

app.get("/del",(req,res)=>{
    console.log(array);
    const ind=parseInt(req.query.index);
    array.splice(ind,1);
    console.log(ind);
    res.render("index.ejs",{arr:array,c:count});
    
});



app.listen(port,(req,res)=>{
    console.log("the server is live at port 3000");
});
