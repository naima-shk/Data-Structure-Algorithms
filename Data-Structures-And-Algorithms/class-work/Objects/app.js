let  myJSON = {
    name:"naima",
     age:25,
     education: 'BEng'
    };
    //traverse
for ( let name in myJSON){
    console.log(name+ ": "+ myJSON[name] )
}
//access
console.log(myJSON.age);
//insertion
myJSON.location= 'karachi';

console.log( myJSON) 
//updation
myJSON.location= 'lahore';
console.log( myJSON);
//delete
delete myJSON.location;
console.log( myJSON);