const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach(function(item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
    
} )


const myCoding = [
    {
        languagename: "javascript",
        languagefile: "js"
    },
    {
        languagename: "java",
        languagefile: "java"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languagename);
    
})