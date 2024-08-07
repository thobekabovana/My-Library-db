

function BookCard({book}) {
 console.log(book)

 

    return(
        <>
     <div className="bookcard" style={{
         display: "flex",
         flexDirection: "column",
         alignIitems: "center",
        //  border: '1px solid #ccc"
         padding: "15px",
         margin: "4%",
         width: "40%",
         borderRadius: "5px",
         boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
         backgroundColor: "white",
     }}> 
        
       <div style={{
                    
       }}>

        <img style={{width: "150px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    boxShadow: "0 5px 10px rgba(3, 2, 3, 2.1)",}} 
                    src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=background-book-stack-books-1148399.jpg&fm=jpg"/>
    
       </div>
       
       <div>
         <p style={{
            fontSize: "1.2rem",
            marginBottom: "5px",
            fontWeight: "bold",}}>Books To Intertain Yourself.</p>

            <p style={{marginBottom: "10px",}}>By Thobeka Bovana</p>
       </div>

       <div>
        <p style={{
        fontSize: "1.1rem",
        fontWeight: "bold"}}>R2 000</p>
       </div>

       {/* <button style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        width: "20%",
        }}>Add To Card</button> */}

     </div>
        </>
    )
}
export default BookCard