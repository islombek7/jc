function getCardNumber(str){
  if(str.length===16){
      if(str.startsWith("8600")){
          console.log("This is UzCard")
      } else if(str.startsWith("9860")){
          console.log("This is Khumo");
      }else{
          console.log("Error card");
      }  
      let str2 =  ` ${str.slice(0, 4)} **** **** ${str.slice(12)}` ;
      console.log(str2);
  }
}
getCardNumber("8600960909877699") ;