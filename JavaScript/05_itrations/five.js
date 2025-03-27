const language = ['hindi', 'marathi', 'tamil', 'punjabi', 'maithly']

language.forEach(function(value){
    // console.log(value); 
})

language.forEach( (val) => {
    // console.log(val);
    
})

// function printme(lang){
//     console.log(lang); 
// }
// language.forEach(printme)


// language.forEach( (item, index, arr) => {
//        console.log(item, index, arr);
       
// })


const languages =[
    {
        languageName: 'maithly',
        languageState: 'Bihar'
    },
    {
        languageName: 'punjabi',
        languageState: 'punjab'
    },
    {
        languageName: 'tamil',
        languageState: 'tamilNadu'
    }
]

languages.forEach( (item) =>{
    console.log(item.languageName);
    
})