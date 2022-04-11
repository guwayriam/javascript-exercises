const palindromes = function (str) {
    let word = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    string = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    let reverseString = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseString += word.charAt(i);
    } 
        
    //console.log(reverseString);
    //console.log(string)

    let bool = true;
    let i = 0;
    while(bool && i < string.length){
        if (reverseString.charAt(i) === string.charAt(i)){
            //console.log(reverseString[i] + "   " + string[i])
            bool = true;
            i++
        }else{
            return false;
        }
    }
    //console.log(bool)
    
    return bool;
};
console.log(palindromes('Racecar!'))
// Do not edit below this line
module.exports = palindromes;
