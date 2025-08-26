function intersection(arr1,arr2){
    for(let i=0; i<=arr1.length-1; i++){
        for (let j=0; j<=arr2.length-1; j++ ){
            if(arr1[i]===arr2[j]){
               console.log("The common value in both array is "+arr1[i])  
                

            }
        }
    }

}

intersection([1,2,3,4],[5,2,6,7])
intersection([1,2,3,4],[5,6,7,8])
intersection(["apple","orange","custard","papaya"],["grape","kiwi","apple","sapotta"])


/*function intersection(arr1,arr2){
    let output=[]
    for(let i=0; i<=arr1.length-1; i++){
        for (let j=0; j<=arr2.length-1; j++ ){
            if(arr1[i]===arr2[j]){
                output.push(arr1[i])
               console.log(output)    
                

            }
        }
    }

}
intersection([1,2,3,4],[5,6,2,7])*/