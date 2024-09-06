// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    let newStr = '';  
    let arr = [];     
    let word = '';      
    
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i];  
        } else {
            arr.push(word);  
            word = '';      
            arr.push(' ');   
        }
    }
    arr.push(word);  

    
    for (let i = 0; i < arr.length; i++) {
        let reverse = '';
        if (arr[i] !== ' ') {
            let currentWord = arr[i];
            for (let j = currentWord.length - 1; j >= 0; j--) {
                reverse += currentWord[j];  
            }
            newStr += reverse;  
        } else {
            newStr += ' ';  
        }
    }
    
    return newStr; 
}
