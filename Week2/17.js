    //borrow() - Marks the book as not available
      //returnBook() - Marks the book as available
      //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      //isLongBook() - Returns true if pages > 300, false otherwise

  class Book{
    title;
    author;
    pages;
    isAvailable=true

    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }
        borrow(){
            console.log(`The book ${this.title} is Not Available`)
        }
        returnBook(){
            console.log(`The Book ${this.title} is Available`)
        }
        getInfo(){
            console.log(`The ${this.title} by ${this.author} (${this.pages})`)
        }
        isLongBook(){
            if(this.pages>300){
                return true
            }else{
                return false
            }
        }
        }
        let b1=new Book("The Wings","Abdul",400)
        let b2=new Book("The Harry Potter","Harry",200)
        let b3=new Book("The Sea","Abhi",500)
        let b4=new Book("Salaar","Prashanth",200)
        let b5=new Book("Kalki","Ashwin",700)
        b1.getInfo()
        b2.getInfo()
        b3.getInfo()
        b4.getInfo()
        b5.getInfo()
        b2.borrow()
        b4.borrow()
        b4.returnBook()
        
