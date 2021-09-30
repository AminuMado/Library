
//DOM Elements
const inputAuthor = document.getElementById("author");
const inputTitle = document.getElementById("title");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("toggleButton");
const submitted = document.getElementById("submit");
const booksArray = [];
const booksContainer = document.querySelector(".booksContainer")
const overlay = document.querySelector(".overlay");
const modal = document.querySelector("form");
const addButton = document.querySelector(".add_circle");
const modalSubmitButton = document.querySelector("#submit");
const modalCancelButton = document.querySelector("#cancel");


/* Event Listerners */
modal.addEventListener("click",function(event){
    if(event.target.id == "cancel"){
        removeModal()
    };
})

addButton.addEventListener("click",function(e){
    addModal();
})

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
        removeModal();
        
};
    
});

booksContainer.addEventListener("click",function(event){
    
    if(event.target.classList == "material-icons-outlined"){
        deleteBook(event.target.parentNode.parentNode.getAttribute("data-id"))
    }
});



//Constructor
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


//functions

function clearAll(){
    inputAuthor.value = "";
    inputTitle.value ="";
    inputPages.value ="";
    inputRead.checked = false;
}

function deleteBook(bookId){
    booksArray.splice(bookId,1);
    addBookToLibrary()
}

function addModal(){
    overlay.classList.add("active");
    modal.classList.add("active");
    addButton.classList.add("active"); 
}

function removeModal(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    addButton.classList.remove("active");
    
}

function addBookToLibrary(){
    booksContainer.innerHTML="";
    for(let i = 0; i <= booksArray.length-1; i++){
        const bookHolder = document.createElement("div");
        bookHolder.classList.add("book");
        bookHolder.setAttribute("data-Id", i);
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