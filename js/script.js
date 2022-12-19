//push
let Push = ['Banana' , 'Apple' , 'Orange' , 'Cherry'];
function pushMathod (str, arr){
  Push = [Push,10];
  return Push;
}
console.log(pushMathod(Push));
//pop
let Pop = [1, 2, 3, 4,5];
function popMathod (arr){
    for (i=arr.length-1; i>arr.length-2; i--){
      arr = arr[i];
    } return arr;
  } 
console.log(popMathod(Pop));