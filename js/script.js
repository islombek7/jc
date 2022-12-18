// slice

let examplee = "Open web";

function slice(str, start, end = str.length) {
 let result = '';
 for (; start < end; start++) {
  result += str[start];
 }
 return result;
}

console.log(slice(examplee, 1, 6));

// substring 

let example1 = "Open web studycenter";

function substring(str, start, end = str.length) {
 let result = '';
 for (; end < start; end++) {
  result += str[end];
 }
 return result;
}

console.log(substring(example1, 8, 1));

// substr 

let example = 'Open Web' ;
function myFunction( str, num, num1, ) {
    let result1 = "";
      for (i = num; i < num1; i++) {
        result1 +=  str[i];
      }
      console.log(result1);
    }
    myFunction(example, 1, 4);