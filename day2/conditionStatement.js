launchBrowser("chrome")
function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("Launch the chrome browser")
    }
    else if(browserName=="edge"){
        console.log("Launch the Edge browser ")
    }
    else if(browserName=="safari"){
        console.log("Launch the safari browser")
    }
    else{
        console.log("The browser did not match")
    }            
}

