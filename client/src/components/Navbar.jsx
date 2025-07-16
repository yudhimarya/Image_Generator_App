import React from 'react'
import styled,{ ThemeProvider} from 'styled-components'
import { AddRounded , ExploreRounded} from "@mui/icons-material"
import Button from "./button";
import {darkTheme} from "./Theme";
import {useNavigate, useLocation} from "react-router-dom";

const Container =styled.div`
      flex:1;
      background-color:#1c1e27;
      color:#F2F3F4;
      font-weight:bold;
      font-size:22px;
      padding: 14px 50px;
      display:flex;
      justify-content: space-between;
      align-items:center;
      box-shadow: 0 0 10px rgba(0,0,0,0.15)

`;
const Navbar = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")
  return (
     <ThemeProvider theme={darkTheme}>
  <Container>
    GenAI
    {path[1]==="post"? <Button onClick={()=> navigate("/")} text="Explore Posts"
    leftIcon={<ExploreRounded style={{fontsize:"18 px"}}/>}  />:
   <Button onClick={()=> navigate("/post")} text="Create new post"
    leftIcon={<AddRounded style={{fontsize:"18 px"}}/>}  />}
  </Container>
  </ThemeProvider>
  )
}

export default Navbar;