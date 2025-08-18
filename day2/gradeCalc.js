function gradeCalc(score){
    switch(true){
        case (score>=90):
            console.log ("The grade obtained is A+")
            break
        case (score>=75):
            console.log("The grade obtained is A")
            break
        case (score>=60):
            console.log("The grade obtained is B+")
            break
        case (score>=45):
            console.log("The grade obtained is B")
            break
        default:
            console.log("The grade obtained if F")            
    }
}
gradeCalc(78)