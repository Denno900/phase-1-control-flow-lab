let feet = 0;
let charge = 0;

function scuberGreetingForFeet(feet){
  if (feet <= 400 ) {
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return charge = "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
   return city === "NYC" ? "Ok, sounds good." : "No go."
}

let tip = ""

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."

    
  } 
}