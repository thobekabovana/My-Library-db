import { useState, useEffect} from 'react';
import React from 'react';

const RemoveButton = ({isbn}) => {

  const [filtedList, setFiltedList] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("bookTable"));
    setFiltedList(storedData || []);
  }, []);

  const handleClick = () => {
    const filteredData = filtedList.filter(item => item.isbn !== isbn);
    setFiltedList(filteredData);
    console.log(filteredData)
    localStorage.setItem('bookTable', JSON.stringify(filteredData));
    alert("Deleted Succ")
  };

  return (
    
    <button
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        width: "20%",
      }}
      onClick={handleClick}
      >
        Delete
      </button>
    );
  };
  
  export default RemoveButton;

