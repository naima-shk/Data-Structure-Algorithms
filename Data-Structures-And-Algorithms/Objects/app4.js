//Take the above array of objects and add a book of your choice to it with the same properties.
//push algorithm
function customInsertAtTheEnd(name){
    books.length = books.length+1;
    books[books.length-1] = {name: 'the power of your sub conscious mind',
    topics :['self help']
};

}

customInsertAtTheEnd(books);
console.log(books);

//unshift algorithm
function insertAtStart(name) {
    books.length = books.length + 1;
    for (let i = books.length - 1; i > 0; i--) {
      books[i] = books[i - 1];
    }
    books[0] = {
      name: "the power of your sub conscious mind",
      topics: ["self help"],
    };
  }
  insertAtStart(books);
  console.log(books);