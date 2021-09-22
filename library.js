
//DOM Elements
const inputAuthor = document.getElementById("author");
const inputTitle = document.getElementById("title");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("toggleButton");
const submitted = document.getElementById("submit");
let bookAuthor
let bookTitle
let bookPages
let bookRead

console.log(inputAuthor.value);
console.log(inputTitle);
console.log(inputPages);
console.log(inputRead.checked);
console.log(submitted)


submitted.addEventListener("click",function(){
    let bookAuthor = inputAuthor.value;
    let bookTitle = inputTitle.value;
    let bookPages = inputPages.value;
    let bookRead = inputRead.checked;
    let newBook = new Book(bookAuthor,bookTitle,bookPages,bookRead);
    console.log(newBook);
});

//Constructor
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.show = function(){
        console.log(`Author: ${this.author} Title: ${this.title} Pages: ${this.pages}`)
    }
}
let book1 = new Book("One Piece","Oda Sensei",1500,true);
book1.show();
