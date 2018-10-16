var express=require('express')

var router=express.Router()
var headers={
"Access-Control-Allow-origin": "*",
"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
"Access-Control-Allow-Headers": "Authorization, Content-Type",
"Access-Control-Expose-Headers": "Authorization"
}



router.use(function timeLog(req,res,next){
    var dt=new Date();
    console.log(dt.toLocaleString() , "\t", req.ip , "\t", req.method + ' to: ' , req.originalUrl,  )
    res.set(headers)
    next()
})

// var headers={
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'Application/Json'
// }

var channelList=["can", "gps", "sin", "asimov", "eth", "mobileeye"]
router.use("/pandora/api/status", (req,res) =>{
    var status={}
    channelList.forEach((item, index) =>  {
        var rad=Math.random()
        if (rad < 0.2 ){
            status[item] =0
        }else if (rad <0.5){
            status[item]=1
        }else if(rad < 0.8){
            status[item]=2
        }else if (rad < 1){

        }       }
    )
    var data={'data':status}
    res.set(headers)
    res.send(JSON.stringify(data))   

    
})

router.get("/fd", (req,res,next) =>{
    console.log(req.path)
    res.json(req.data)
})


router.post("/auth/login/", function(req,res) {
    var token="MyaToken"
    var tokenHeader="Bearer " + token
    res.set({
        "Authorization": tokenHeader
    })
    var data={
        data: {
            id: 1,
            name: "Cai Xingliang",
            roles: ["admin","user"]
        }
    }
    res.json(data)
})

router.use("/auth/user/", function(req,res) {
    var token="MyaToken"
    var tokenHeader="Bearer " + token
    res.set({
        "Authorization": tokenHeader
    })
    var data={
        data: {
            id: 1,
            name: "Cai Xingliang",
            roles: ["admin","user"]
        }
    }
    setTimeout(function(){res.json(data)},5000)
})

router.use("/auth/refresh/", function(req,res) {
    var token="MyaToken"
    var tokenHeader="Bearer " + token
    res.set({
        "Authorization": tokenHeader
    })
    var data={
        data: {
            id: 1,
            name: "Cai Xingliang",
            roles: ["admin","user"]
        }
    }
    res.json(data)
})



router.use("/auth/logout/", function(req,res) {
    
    var data={
        result_code: "success"
    }
    res.json(data)
})

module.exports=router