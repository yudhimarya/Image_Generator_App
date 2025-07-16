import React from 'react'
import styled from 'styled-components'
import { SearchOutlined } from '@mui/icons-material'

const SearchBarContainer=styled.div`
    max-width:550px;
    display:flex;
    width:100%;
    border:1px solid ${({theme})=> theme.text_secondary + 90};
    color:${({theme})=> theme.text_primary  };
    border-radius:8px;
    padding: 12px 16px;
    cursor: pointer;
    gap: 6px;
    align-items:center;
`

const SearchBar = ({search,setSearch}) => {
  return (
  <SearchBarContainer>
    <SearchOutlined/>
    <input 
    placeholder='Seacrh with prompt or name ...' style={{
        border:"none",
        outline:"none",
        width:"100%",
        color:'inherit',
        fontSize:"16px",
        background:"transparent",
        
    }}
    value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
  </SearchBarContainer>
  )
}

export default SearchBar;