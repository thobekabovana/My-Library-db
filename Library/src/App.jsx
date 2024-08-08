import React from 'react';
import {addbook} from './components/add-book';

import Register from './components/register';
import Display from './components/displayBook';
import BookCard from './components/bookCard';



function App() {

  let bookTable = [{
    isbn: "78965",	
    tittle: "fallen",	
    nuofpgs: "500.pgs",	
    eddition: "none",	
    publisher: "google",	
    designer: "Thandeka",
    price: "R1 000",	
    editor: "potia",	
    cover: "https://th.bing.com/th/id/R.bb4b368e3c2a5a39e36a1f4b4b8c4bb6?rik=0DWXM7Uw6VACrQ&riu=http%3a%2f%2fclipart-library.com%2fimg%2f799844.jpg&ehk=CnpoeGurkCKWH29aOVHo84%2bOgffzhGu%2f6q9JNGjNlXQ%3d&risl=&pid=ImgRaw&r=0",	
    format: "hard-cover",
    releaseDate: "09-12-009"

  },
  {
   isbn: 	"7654",
    tittle: "cought",
    nuofpgs: "1000",
    eddition: "none",
    publisher: "code-tribe",
    designer: "tsiki",
    price: "R800",
    editor: "masisi",
    cover: 	"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694188609i/88151671.jpg",
    format: "pdf",
    releaseDate: "07-06-010",
  },
{
   isbn: 	"675",
    tittle: "mylife",
    nuofpgs: "400",
    eddition: "none",
    publisher: "google",
    designer: "lungy",
    price: "R700",
    editor: "luyanda",
    cover: 	"https://th.bing.com/th/id/OIP.09RJn53m7dkjdQvSC1BAFQHaEo?rs=1&pid=ImgDetMain",
    format: "pdf",
    releaseDate: '23-09-021',
}]

localStorage.setItem('bookTable',JSON.stringify(bookTable));


  return (
    <>
    
     <Register book={bookTable[0]}/>
     <Display book={bookTable[0]}/>
     {/* <BookCard book={bookTable[0]}/> */}
    </>
  )
}

export default App
