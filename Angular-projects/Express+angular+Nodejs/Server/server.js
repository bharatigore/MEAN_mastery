express=require("express")
eobj=express()
port=5100

eobj.use((req,res,next)=>
    {
        res.header("Access-Control-Allow-Origin","http://localhost:4200");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"
        );
        next();
    })
function myMsg()
{
    console.log("server is running on port 5100..");
}
eobj.listen(port,myMsg)

function welcomemsg(req,res)
{
    res.send("server is running");
}
eobj.get('/',welcomemsg)
function getBatches(req,res)
{
    res.json({"Batch": "PPa","Fees": "21000","Duration": "3 months"});
}
eobj.get('/getbatches',getBatches)
