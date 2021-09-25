
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
    const bookHolder = document.createElement("div");
    bookHolder.classList.add("book");
    const deleteIconContainer = document.createElement("p");
    deleteIconContainer.classList.add("delete");
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-icons-outlined");
    deleteIcon.innerText = "delete_outline";
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = "Alice In Wonderland";
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = "by: Lewis Caroll";
    const seperator = document.createElement("seperator");
    seperator.classList.add("seperator");
    const bookPages = document.createElement("p");
    bookPages.classList.add("bookPages");
    bookPages.textContent = "Length: 500 pages";
    const bookToggle = document.createElement("p");
    bookToggle.classList.add("bookToggle");
    const toggleIcon = document.createElement("input");
    toggleIcon.classList.add("toggleButton-Book");
    toggleIcon.type = "checkbox";
    booksContainer.appendChild(bookHolder);
    bookHolder.appendChild(deleteIconContainer);
    deleteIconContainer.appendChild(deleteIcon);
    bookHolder.appendChild(bookTitle);
    bookHolder.appendChild(bookAuthor);
    bookHolder.appendChild(seperator);
    bookHolder.appendChild(bookPages);
    bookHolder.appendChild(bookToggle);
    bookToggle.appendChild(toggleIcon);

}


submitted.addEventListener("click",function(){
    let bookAuthor = inputAuthor.value;
    let bookTitle = inputTitle.value;
    let bookPages = inputPages.value;
    let bookRead = inputRead.checked;
    if (bookAuthor && bookTitle && bookPages){
        booksArray.push(new Book(bookTitle,bookAuthor,bookPages,bookRead));
        console.log(booksArray);
        /* clearAll(); */
         addBookToLibrary();
    }
    
});

function addBookToLibrary(){
    booksContainer.innerHTML="";
    for(let i = 0; i <= booksArray.length-1; i++){
        const bookHolder = document.createElement("div");
        bookHolder.classList.add("book");
        const deleteIconContainer = document.createElement("p");
        deleteIconContainer.classList.add("delete");
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-icons-outlined");
        deleteIcon.innerText = "delete_outline";
        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("bookTitle");
        bookTitle.textContent = booksArray[i].title;
        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = `by: ${booksArray[i].author}`;
        const seperator = document.createElement("seperator");
        seperator.classList.add("seperator");
        const bookPages = document.createElement("p");
        bookPages.classList.add("bookPages");
        bookPages.textContent = `Length: ${booksArray[i].pages} pages`;
        const bookToggle = document.createElement("p");
        bookToggle.classList.add("bookToggle");
        bookToggle.textContent = "Mark as Read: ";
        const toggleIcon = document.createElement("input");
        toggleIcon.classList.add("toggleButton-Book");
        toggleIcon.type = "checkbox";
        
        toggleIcon.checked = booksArray[i].read;
        booksContainer.appendChild(bookHolder);
        bookHolder.appendChild(deleteIconContainer);
        deleteIconContainer.appendChild(deleteIcon);
        bookHolder.appendChild(bookTitle);
        bookHolder.appendChild(bookAuthor);
        bookHolder.appendChild(seperator);
        bookHolder.appendChild(bookPages);
        bookHolder.appendChild(bookToggle);
        bookToggle.appendChild(toggleIcon);
    }

}

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