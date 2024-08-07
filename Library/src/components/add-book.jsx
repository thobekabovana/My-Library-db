export  function addbook({book}) {
// console.log(book)

// pulling data
let myBooks =  JSON.parse(localStorage.getItem("bookTable"))
// console.log(myBooks,"pull")
 myBooks.push(book)
console.log(myBooks,"pushed")

// return the code 
// localStorage.setItem('bookTable')

} 





