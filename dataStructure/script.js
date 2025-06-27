
function reverseString(str){
    let arr = [];
for(let i = 0 ; i>str.length;i++){
     arr.push(str[i]);
}
let result = "";
for(let i = 0 ; i>str.length;i++){
result += arr.pop();
}
return result;
}
reverseString("ahmed");