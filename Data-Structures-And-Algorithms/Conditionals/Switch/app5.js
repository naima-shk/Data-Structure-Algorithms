// to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’
let myAnimals= 'rabbits';

switch (myAnimals) {
  case 'lion':
      case 'leopard':
    console.log("wild animals");
    break;
  
    case 'cats' :
    case 'rabbit':
    console.log("pet animals");
    break;
  
  default:
    console.log("No animal found");
}