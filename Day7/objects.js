//DAY7-objects
console.log('----------------Activity1(Object Creation and Access),Task1,2----------------');
const book={
    title:"Attitude is Everything.",
    author:"Jeff Keller",
    year:"2021"
}
console.log(book);
console.log(`Title of the book is :${book.title} and Author of the book is :${book.author}`);


console.log('\n------------Activity-2(Object Methods),Task3,4--------------');
 book.details=function(){
    return`Book title is :${book.title} and Author is :${book.author}`;
 }
 console.log(book.details());

 book.updateYear=function(year){
    console.log(`Updated Year is:${this.year=year}`);
 }
 console.log(book);
 book.updateYear(2022);

 console.log('\n----------Activity-3(Nested Objects),Task5,6----------------');
 console.log('Creating Nested Objects(Array Objects) representing a library:');
 const library={
    name:'Modern Library',
    books:[
          {
            category:'nonFiction',
            title:'Attitude is Everything',
            author:'Jeff Keller'
          },
          { category:'Fiction',
            title:'Harry Potter',
            author:'JK Rowling'

          }
       
    ]
 }
 console.log(`\nLogging library object:\n`);
 console.log(library);

 console.log(`Name of Library is :${library.name}`);
 let titles=library.books.map((book)=>book.title);
 console.log(`\nTitle of all books are:${titles}`);
//   library.books.forEach((book) => {
//    console.log(book.title);
//  });


 console.log('\n----------This Keyword,Activity4,Task-7---------------');
 console.log(book);
 book.bookDetails=function(){
    console.log('Using this keyword that points to current object of book.');

    return`Book title is :${this.title} and Updated Year is ${this.year}`;
 }
 console.log(book.bookDetails());
 
 console.log('\n-------Object Iteration,Activity-5,Task8,9---------------');
 console.log('Using For in loop ,to iterate through book object.');
 
 for (const books in book) {
    
        console.log(`book.${books}=${book[books]}`);
        
    
 }
 
 console.log('\nUsing Object keys and values');
 console.log(`Book Keys are:${Object.keys(book)}  \nBook Values are:${Object.values(book)}`);

