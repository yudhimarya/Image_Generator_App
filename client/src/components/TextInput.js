import React from 'react'
import styled from 'styled-components'


const Raju=styled.div`
  
    display:flex;
    flex-direction:column;
    width:100%;
    border:1px solid ${({theme})=> theme.text_secondary + 90};
    
    border-radius:8px;
    padding:8px;
    color:inherit;
    background:${({theme})=>theme.bg}
    cursor: pointer;
    gap: 6px;
    align-items:center;
`

const SearchBar = ({label,placeholder,name,rows ,value,handleChange}) => {
  return (<>
   
  
   <label htmlFor={name} style={{ display: "block", marginBottom: "5px",fontSize:"20px", fontWeight:"500" }}>
        {label}
      </label>
      
    <Raju >
    <textarea 
    id={name}
    name={name}
    placeholder={placeholder}
    rows={rows}
    value={value}
    onChange={handleChange}
     style={{
      border:"none",
      outline:"none",
      width:"100%",
      color:'inherit',
      fontSize:"16px",
      background:"transparent",
     }}
        
    /></Raju>
    
  
  </>
  )
}

export default SearchBar;