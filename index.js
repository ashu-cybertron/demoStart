const express = require("express");

const redis = require("redis");

const app = express();

const redisclient = redis.createClient({
	"host":"redis-server","port":6379
});


redisclient.set('visit',0);

app.get("/",(req,res,next)=>{
	
	redisclient.get("visit",(err,visitcount)=>{
		res.status(200).send("No of times visited: "+visitcount );
		redisclient.set("visit",+visitcount+1);
	});
});





app.listen(8000);
