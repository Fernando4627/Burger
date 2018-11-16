const app = require(app);

/// Bad code, please fix the variables. // 
app.get("/", function(req,res){
    db.all(function(data){
        var burgersObject = {
            burgers:data
        }
    })
});

app.post("", function(req,res){

});

app.put("", function(req,res){

});

app.delete("", function(req,res){

});