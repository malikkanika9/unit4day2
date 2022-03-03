const express=require("express");

const app=express();
app.get("/books", function(req,res){

res.send([
{
    bookname: "Right Under Our Nose",
    Author:"R. Giridharan"
},

{
    bookname: "Making of a General-A Himalayan Echo",
    Author:"Lt. Gen. Konsam Himalay Singh"
},
{
    bookname: "The Commonwealth of Cricket",
    Author:"Lt. Gen. Konsam Himalay Singh"
},
{
    bookname: "Manohar Parrikar-Off the Record",
    Author:"Waman Subha Prabhu"
}
])

});
app.listen(8000,()=>{
console.log("port")

})