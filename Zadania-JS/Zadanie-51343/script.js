

class Ksiazka {
    constructor (title, author, read){
        this.title = title;
        this.author = author;
        this.read = read;
    }

    bookInfo(){
        let readResult = "";
        switch (this.read) {
        case true:
            readResult = "zostala przeczytana";
            break;
        case false:
            readResult = "nie zostala przeczytana";
            break;
    }
        return `Ksiazka ma tytul ${this.title}, autorem jest  ${this.author} i ksiazka ${readResult}`;
    }
}

let firstBook = new Ksiazka("Wiedzmin", "Andrzej Sapkowki", true);
console.log(firstBook);

firstBook.bookInfo();

let secondBook = new Ksiazka("Son of nobody", "Yann Martel", false);
secondBook.bookInfo();

let thirdBook = new Ksiazka("The midnight train", "Matt Haig", false);
thirdBook.bookInfo();

let array = [firstBook, secondBook, thirdBook];
console.log(array);

const numberOfRead = function(books) {
    let bookCount = 0;
    books.forEach (
        function (element, index) {
            if (element.read){
                bookCount = bookCount + 1;
            }
            console.log(element.bookInfo());
    }
    )
    return bookCount;
}
console.log("Liczba przeczytanych ksiazek to " + numberOfRead(array));

