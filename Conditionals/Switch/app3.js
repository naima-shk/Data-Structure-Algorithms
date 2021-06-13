//Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. However, if it’s greater than 10, print ‘greater than 10’. Also, deal with the case in which it’s equal to 10 with an appropriate message.
let numb = 15;

switch (numb) {
  case 10:
    console.log("equals to 10");
    break;
  case 15:
    console.log("greater than 10");
    break;
    case 5:
    console.log("less than 10");
    break;
  default:
    console.log("No value found");
}
