runTests()
function runTests(testType){
    switch(testType){
        case "sanity":
            console.log("Run the sanity testing")
            break
        case "regression":
            console.log("Run the regression testing")  
            break
        default:
            console.log("Run the smoke testing")     
    }

}