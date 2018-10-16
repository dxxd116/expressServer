console.log("Test is skipped!")


testit()


function testit(){
    logit()
    console.log("After function return call")
}


function logit(){
    console.log("Inside function")
    return
}