

import React, { useState } from 'react';
import {addbook} from './add-book';
// import addBook from "./addBook"
function register() {

       const [formData, setFormData] = useState({
               author: '',
               title: '',
               edition: '',
               numPages: '',
               numberOfPages: '',
               coverDesign: '',
               releaseDate: '',
               });

  function handleChange(event) {
       setFormData({
         ...formData,
         [event.target.name]: event.target.value,
       });
     };
   
     function handleSubmit(event){
       event.preventDefault();
       addbook(formData);
       alert("Added Successfully");
     };
   
return(
       <>
       <div style={{backgroundColor: "pink"}}>
       <form onSubmit={handleSubmit}
                 style={{
                      display: "flex",
                      flexDirection: "column",
                      alignIitems: "center",
                      padding: "15%",
                      margin: "4%",
                      width: "12.4%",
                      height: "200px",
                      // height: "100%",
                      borderRadius: "5px",
                      boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
                      backgroundColor: "white",
                      justifyContent: "center",
                   }}> 
        
                
                <input name="title" id="" placeholder="Name & Suername"  onChange={handleChange}  type="text" 
                    style={{ 
                         fontSize: "15px",
                    width: "200px",
                    height: "40px",
                    textAlign: "center",
                    marginBottom: "10px"
                    }} />
                
                <input  type="text" name="title" id="" placeholder="Title"  onChange={handleChange}
                     style={{
                     fontSize: "15px",
                     width: "200px",
                     height: "40px",
                     textAlign: "center",
                     marginBottom: "10px"
                }} />
                
                <input  type="0" name="releaseDate" id=" " placeholder="ReleaseDate" onChange={handleChange}
                     style={{
                     fontSize: "15px",
                     width: "200px",
                     height: "40px",
                     textAlign: "center",
                     marginBottom: "10px"
                }} />
            
            <div>
                <input  type="text" name="edition" id=""  placeholder="Editor" onChange={handleChange}
                style={{fontSize: "15px",
                     width: "200px",
                     height: "40px",
                     textAlign: "center",
                     marginBottom: "10px"}} />
            </div>
            <div>
                
                <input type="text" name="numPages" id="" placeholder="ISBN"  onChange={handleChange} 
                style={{
                     fontSize: "15px",
                     width: "200px",
                     height: "40px",
                     textAlign: "center",
                     marginBottom: "10px"
                }} />
                
                <input  type="text" name="numberOfPages" id="" placeholder="Designer"  onChange={handleChange} 
                style={{
                   fontSize: "15px",
                   width: "200px",
                   height: "40px",
                   textAlign: "center",
                   marginBottom: "10px"
                }} />
                
                <input  type="text" name="pages" id="" placeholder="Pages"  onChange={handleChange} 
                style={{
                     fontSize: "15px",
                     width: "200px",
                     height: "40px",
                     textAlign: "center",
                     marginBottom: "10px"
                }} />
            
            </div>
            <div>
              
                <input type="text" name="coverDesign" id="" placeholder="CoverDesign" value="CoverDesign" onChange={handleChange} 
                style={{
                 fontSize: "15px",
                 width: "200px",
                 height: "40px",
                 textAlign: "center",
                 marginBottom: "10px"
                }}/>
                
                <input  type="text" name="coverDesign" id="" placeholder="CoverDesign"  onChange={handleChange} 
                 style={{
                    fontSize: "15px",
                    width: "200px",
                    height: "40px",
                    textAlign: "center",
                    marginBottom: "10px"
               }}/>
               
            
            </div>
            <div>
                
                <input type="text" name="numPages" id="" placeholder="Nuumber of pages"  onChange={handleChange} 
                style={{
                      fontSize: "15px",
                      width: "200px",
                      height: "40px",
                      textAlign: "center",
                      marginBottom: "10px"
                }}/>
                
                <input type="text" name="pages" id="" placeholder="Pages"  onChange={handleChange}
            style={{
                 fontSize: "15px",
                 width: "200px",
                 height: "40px",
                 textAlign: "center",
                 marginBottom: "10px"
            }}/>
            
            </div>
            <button type="submit" 
        style={{
               
              fontSize: "15px",
              width: "200px",
              height: "40px",
              textAlign: "center",
              marginBottom: "10px"
        }}>
        
        submit</button>
        
        
      </form>
      </div>
    </>
  )
}
export default register;