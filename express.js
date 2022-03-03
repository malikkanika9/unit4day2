const express=require("express");

const app=express();
app.get("/users", function(req,res){

console.log("hello");


});
app.listen(7000,()=>{
console.log("port")

})