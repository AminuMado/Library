
//DOM Elements
const inputAuthor = document.getElementById("author");
const inputTitle = document.getElementById("title");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("toggleButton");
const submitted = document.getElementById("submit");
const booksArray = [];
const booksContainer = document.querySelector(".booksContainer")

console.log(booksContainer)
console.log(inputAuthor.value);
console.log(inputTitle);
console.log(inputPages);
console.log(inputRead.checked);
console.log(submitted)
function createElement(){
    const newDiv= document.createElement("div");
    newDiv.classList.add("book")
    newDiv.textContent = "show me and i was created dynamically";
    booksContainer.appendChild(newDiv)

}
createElement();

submitted.addEventListener("click",function(){
    let bookAuthor = inputAuthor.value;
    let bookTitle = inputTitle.value;
    let bookPages = inputPages.value;
    let bookRead = inputRead.checked;
    if (bookAuthor && bookTitle && bookPages){
        booksContainer.push(new Book(bookAuthor,bookTitle,bookPages,bookRead));
        console.log(booksContainer);
        clearAll();
    }
    
});



//Constructor
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

let book1 = new Book("One Piece","Oda Sensei",1500,true);

//functions
function clearAll(){
inputAuthor.value = "";
inputTitle.value ="";
inputPages.value ="";
inputRead.checked = false;
}