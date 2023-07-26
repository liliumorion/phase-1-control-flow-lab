function scuberGreetingForFeet(feetNumber){
  let result
  if (feetNumber <= 400) {
    result = "This one is on me!" ;
  } 
  else if (feetNumber>400 && feetNumber<=2000){
    result = "That will be twenty bucks.";
  } 
  else if (feetNumber > 2000 && feetNumber <=2500){
    result = "I will gladly take your thirty bucks."; 
  } 
  else if (feetNumber > 2500){
    result = "No can do.";
  }
  return result;
  } 


function ternaryCheckCity(destination){
 

  return destination === "NYC"? "Ok, sounds good." : "No go.";
  
}


function switchOnCharmFromTip(tip){
  
  switch(tip){
  case 'generous':
    return'Thank you so much.';
    
  case 'not as generous':
   return'Thank you.';
    
  default:
    return'Bye.';
  }
  
}
