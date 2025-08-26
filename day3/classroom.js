let myName="neethu"
/*let count= 0
for(let i=0;i<=myName.length;i++){
    if(myName.charAt(i) =="e"){
        count=count+1
    }
}
console.log("the count of letter e in myName is "+count)
let rev=""
let length = myName.length
for(i=length-1;i>=0;i-- ){
    rev +=myName.charAt (i)
}
console.log(rev)*/
//console.log(myName.slice(-6))


// array

let arrayNums= [3,4,5,6,3,5,8,9,3]
let k=[3,5]

let count =0
for(i=0;i<=arrayNums.length;i++){
    if (k.includes(arrayNums[i])){
        count++
    }
    
    }
    //console.log("comparing data")
    //for(j=i+1;j<=arrayNums.length-1;j++){
        //if(arrayNums[i]==arrayNums[j]){
           // console.log("The repeated value is "+arrayNums[i])
        //}
        console.log("the repeated number"+k +"and it occured "+count)

   // }
//}