//Again consider the above array of objects, and delete one of the objects that represent a book.
//delete item from start

for(let i = 0; i<books.length-1; i++){
    books[i] =books[i+1];
}
books.length= books.length-1;
console.log(books);