express=require("express")

eobj=express();

port=5100;

function welcomeMessage()
{
    console.log("server is on at port 5100...");
}

eobj.listen(port,welcomeMessage);

function Acceptrequest(req,res)
{
    res.send("Server connection is succesful..");
}
eobj.get('/',Acceptrequest);

function batches(req,res)
{
    res.send("we have PPA LB Python Angular batches");
}
eobj.get('/batches',batches)
function address(req,res)
{
    res.send("Location is Pune")
}
eobj.get('/location',address)
function Batchesdetails(req,res)
{
    res.json({"Batch":"PPA","Fees":"21000","Duration":"3 months"});
}
eobj.get('/batchdetail',Batchesdetails)