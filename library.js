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
