var app=require('express')();

app.get("/poll/:id",function (req,res) {
    res.append("Access-Control-Allow-Origin","http://localhost:63342");
    setTimeout(function () {
        res.send("第"+req.params.id+"次请求");
    },2000)
});

app.get("/stream",function (req,res) {
    res.append("Access-Control-Allow-Origin","*");
    res.append('Content-Type','text/html');
    var count = 0;
    setTimeout(function () {
        res.write(Math.random()+"");
            count++;
        if(count<5){
                setTimeout(arguments.callee,1000)
        }else{
                res.end();
        }
    },1000);
    // var sid = setInterval(function(){
    //     res.write(Math.random()+"");
    //     if(++count == 5){
    //         clearInterval(sid);
    //         res.end();
    //     }
    // }, 1000);
});
app.listen(3000);