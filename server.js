 var express = require('express');
 var app = express();
 var BodyParser = require('body-parser');
 var urlencoded = BodyParser.urlencoded({extended:false});
 
 app.use(express.static('D'));
 app.get('/index.html', function(req,res){
	 res.sendFile(_dirname+"/"+"index.html");
 })
 
 
 app.get('/process_post',function(req,res){
	 response={
		 first_name:req.query.first_name,
	 last_name:req.query.last_name,
	function(nm,skills){
	data=nm+",";
	for(i=0;i<skills.length;i++){
		data=data+skills[i]+",";
		
	}
	fs.appendFile("userdata.txt",data);
}
	 
	 
	 
	 };
	 
	 
	 console.log(response);
	 res.send(JSON.stringify(response));
 })
 var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   
 })
 
 
 
 
 
 
 
 
 
 
 
 