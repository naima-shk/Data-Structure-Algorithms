//Work on the problem above to dynamically print the name of each animal and prepend it with ‘this is’ conditionally. Print ‘something else’ if the name doesn’t equal any of the names in the list.
let animals= ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
for (let i=0; i<=animals.length; i++){
    if(animals [i]  === 'cat'){
 console.log('this is ' + animals[i]);
 break;
    } else{
       { console.log(' this is something else');
       }
    }
}

