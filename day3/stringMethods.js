//Example 

let input1 = "Hello World"
let split = (input1.split(" "))
console.log(split)
console.log(split[1])
console.log(split[1].length)

//Example 2

let input2 =" fly me  to  the moon "
let trim= (input2.trim(""))
console.log(input2)
console.log(trim)
let split1=(trim.split(" "))
console.log(split1[split1.length-1])
console.log(split1[split1.length-1].length)

//Example 3

function anagram(input3,input4){
     
    let word1 =input3.toLowerCase().split("").sort()
    let word2 =input4.toLowerCase().split("").sort()
    let isAnagram=true
     for( i=0; i<=word1.length; i++){
        if(word1[i]!==word2[i]){
            isAnagram=false
            break;
        
        }
    }   
        if (isAnagram){
            console.log("The given word is an Anagram")
            }
        else{
            console.log("The given word is not an Anagram")
            }

        
    
    }


anagram("LISTEN","silent")
anagram("hello","world")
