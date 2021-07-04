//You are given a object of user’s details as:

 /*let userObject = {
	userName: 'Philip',
	fatherName: 'Norman',
	className: 'four',
};
for ( let userName in userObject){
    console.log(userName+ ": "+ userObject[userName] )

}
userName = userObject.name;
fatherName =userObject.fathersName;
className = userObject.class;
*/
//Your task is to traverse the object and print its properties (both names and values).

//Now, using the same object, change the userName to your name, fatherName to your father’s name, and className to your class.


//Suppose you have an array of objects:

	let books = 
        [{
                    name: 'The Lean Startup',
                    topics: ['entrepreneurship','startups'],
                },
                {
                    name: 'War and Peace',
                    topics: ['peace', 'politics']
                }];
/*
                for (let i=0; i<books.length; i++){
                    console.log(books[i].name);
			console.log(books[i].topics);

                } */
        
       // Now you need to print the name and topics separately, how would you do that?

       //Take the above array of objects and add a book of your choice to it with the same properties.

       
       function customInsertAtTheEnd(name){
           books.length = books.length+1;
           books[books.length-1] = {name: 'the power of your sub conscious mind',
           topics :['self help']
       };
       
       }
       
       customInsertAtTheEnd(books);
       console.log(books);