var express=require('express')

var router=express.Router()

router.use(function timeLog(req,res,next){
    var dt=new Date();
    console.log(dt.toLocaleString() , "\t", req.ip , "\t", req.method + ' to: ' , req.originalUrl,  )
    next()
})

var headers={'Access-Control-Allow-Origin': '*',
'Content-Type': 'Application/Json'
}

var channelList=["can", "gps", "sin", "asimov", "eth", "mobileeye"]
router.get("/pandora/api/status", (req,res) =>{
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

module.exports=router