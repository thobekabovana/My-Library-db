import React from "react";
import {addbook} from './add-book';
import { useState } from "react";


function register() {
       
       const [user, setUser] = useState("");
       const [username, setUsername] = useState("");
       const [book, setBook] = useState("");
       const [price, setPrice] = useState("");

       const handleChange = (event) => {
              const name = event.target.name;
              const value = event.target.value;
              setUser(values => ({...values, [name]: value}))
              setUsername(values => ({...values, [name]: value}))
              setBook(values => ({...values, [name]: value}))
              setPrice(values => ({...values, [name]: value}))
       }

       const handleSubmit = (event) => {
              event.preventDefault();
              console.log(" this is the input from the form",book);
              alert("Successful");
              addbook(book)
       }

    return(
     <>
       

     <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignIitems: "center",
        padding: "15%",
        margin: "4%",
        width: "15%",
        // height: "100%",
        borderRadius: "5px",
        boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
        backgroundColor: "white",
        justifyContent: "center",
     }}>

<h1>Registration Form</h1>
       
            <input name="user" 
                   value={book.user || ""} 
                   onChange={handleChange}
       
                   style={{
                   fontSize: "15px",
                   width: "200px",
                   height: "40px",
                   textAlign: "center",
                   marginBottom: "10px",
                 }} placeholder="ISBN" type="text"/>
            
          
            <input name="username" 
                   value={book.username || ""} 
                   onChange={handleChange}
          
                   style={{
                   fontSize: "15px",
                   width: "200px",
                   height: "40px",
                   textAlign: "center",
                   marginBottom: "10px",
            }} placeholder="Tittle" type="text"/>
            
            <input name="book" 
                   value={book.book || ""} 
                   onChange={handleChange}
            style={{
                   fontSize: "15px",
                   width: "200px",
                   height: "40px",
                   textAlign: "center",
                   marginBottom: "10px",
            }} placeholder="Publisher" type="text"/>
            
           
            <input name="price" 
                   value={book.price || ""} 
                   onChange={handleChange}
            style={{
                   fontSize: "15px",
                   width: "200px",
                   height: "40px",
                   textAlign: "center",
                   marginBottom: "10px"
            }} placeholder="Amount" type="0"/>
      

        <button  style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        width: "20%",
        fontSize: "15px",
        width: "200px",
        height: "40px",
        textAlign: "center",
        }}>Sign Up</button> 
     </form>
     
     </>
    )
}


export default register