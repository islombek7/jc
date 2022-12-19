//push

let Push = ['Banana' , 'Apple' , 'Orange' , 'Cherry' ];
function pushMathod (str, arr){
  Push = [Push,'Apple'];
  return Push;
}
console.log(pushMathod(Push));

//pop

let Pop = ['Banana' , 'Apple' , 'Orange' , 'Cherry'];
function popMathod (arr){
    for (i = arr.length-1; i > arr.length-2; i--){
      arr = arr[i];
    } 
    return arr;
  } 
console.log(popMathod(Pop));