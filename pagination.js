console.log('hello world');

const numOfBooks = 20;
const booksPerPage = 6;
const numberOfPages = Math.ceil(numOfBooks/booksPerPage);

let pageNumber = 0;

let bookList = [];
for (let i=0; i<numOfBooks; i++) {
    let book = {
        bookId: i,
        title: 'Title: ' + i,
        authorName: 'Author: ' + i
    };
    bookList.push(book);
}

let table = document.getElementById("table");

let showPage = () => {
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }

    for (let i=booksPerPage*pageNumber, j=i+booksPerPage; i<j; i++) {
        let row = document.createElement('tr')
        let bookId = document.createElement('td');
        bookId.innerText=bookList[i].bookId;

        let title = document.createElement('td');
        title.innerText=bookList[i].title;

        let authorName = document.createElement('td');
        authorName.innerText=bookList[i].authorName;

        row.appendChild(bookId);
        row.appendChild(title);
        row.appendChild(authorName);

        table.appendChild(row)
    }
}

showPage();

let buttonRow = document.getElementById('buttonRow')

let prevButton = document.createElement('button');
prevButton.className='btn btn-primary';

prevButton.innerText = '<';
prevButton.onclick = () => {
    if (pageNumber> 0){
        pageNumber--;        
    }
    showPage();
}
buttonRow.appendChild(prevButton);

for (let i=0; i<numberOfPages; i++){
    let button = document.createElement('button');
    button.className='btn btn-primary';

    button.innerText =i+1;
    button.onclick = () => {
        pageNumber = i;
        showPage();
    }
    buttonRow.appendChild(button);
}

let nextButton = document.createElement('button');
nextButton.className='btn btn-primary';

nextButton.innerText = '>';
nextButton.onclick = () => {
    if (pageNumber < numberOfPages-1) {
        pageNumber++;        
    }
    showPage();
}
buttonRow.appendChild(nextButton);
