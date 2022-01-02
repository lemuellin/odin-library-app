let myLibrary = [];

const book1 = new book('Digital Minimalism','Cal Newport','500','read');
const book2 = new book('Atomic Habits','James Clear','150','not read');
const book3 = new book('Rich Dad Poor Dad','Robert T.Kiyosaki','500','read');
myLibrary.push(book1,book2,book3);

const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', ()=>addBookToLibrary());


function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

function addBookToLibrary(){
    let title = document.querySelector('.title').value;
    let author = document.querySelector('.author').value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read').value;
    console.log(read);
    
    let bookNew = new book(title, author, pages, read);
    myLibrary.push(bookNew);
    displayData();
    closeForm();
}


function displayData(){
    let tables ="";

    for (eachBook in myLibrary){
        tables += 
        "<td>"+ myLibrary[eachBook].title +"</td>" +
        "<td>"+ myLibrary[eachBook].author +"</td>" +
        "<td>"+ myLibrary[eachBook].pages +"</td>" +
        "<td>"+ `<button class='changeRead' onclick="changeRead(${eachBook})">`+
        myLibrary[eachBook].read +"</button>" +
        `<button class='rmvBook' onclick="rmvBook(${eachBook})">Remove</button>`+
        "</td>" +
        "</tr>";
    }

    document.querySelector(".table").innerHTML = 
        "<thead>"+"<tr>" +
        "<th>"+"Title"+"</th>" +
        "<th>"+"Author"+"</th>" +
        "<th>"+"Pages"+"</th>" +
        "<th>"+"Status"+"</th>" +
        "</tr>" + "</thead>" +
        "<tbody>"+"<tr>" +
        tables+"</tbody>";
}
displayData();

function changeRead(a){
    myLibrary[a].read = (myLibrary[a].read == "read"? "not read":"read");
    displayData();
}

function rmvBook(a){
    myLibrary.splice(a,1);
    displayData();
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }