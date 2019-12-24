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
table.className='table card mb-0'

let tHead = document.createElement('thead');
let tRow = document.createElement('tr');
tRow.className='d-flex justify-content-around bg-primary text-white'
tHead.appendChild(tRow);

let thID = document.createElement('th');
thID.className='col-lg-4';
thID.innerText='Book ID';
tRow.appendChild(thID);

let thTitle = document.createElement('th');
thTitle.className='col-lg-4';
thTitle.innerText='Book Title';
tRow.appendChild(thTitle);

let thAuthor = document.createElement('th');
thAuthor.className='col-lg-4';
thAuthor.innerText='Author Name';
tRow.appendChild(thAuthor);

table.appendChild(tHead);

let tableBody=document.createElement('tbody');
table.append(tableBody);

let showPage = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    }

    for (let i=booksPerPage*pageNumber, j=i+booksPerPage; i<j; i++) {
        let row = document.createElement('tr')
        row.className='flex-row d-flex justify-content-around';
        if (i%2==1){
            row.className+=' bg-light'
        }

        let bookId = document.createElement('td');
        bookId.className='col-lg-4';
        bookId.innerText=bookList[i].bookId;

        let title = document.createElement('td');
        title.className='col-lg-4';
        title.innerText=bookList[i].title;

        let authorName = document.createElement('td');
        authorName.className='col-lg-4';
        authorName.innerText=bookList[i].authorName;

        row.appendChild(bookId);
        row.appendChild(title);
        row.appendChild(authorName);

        tableBody.appendChild(row)
    }
}

showPage();

let buttonRow = document.getElementById('buttonRow')
buttonRow.className='btn-group btn-block';

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
