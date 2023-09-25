import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"; 
import React from "react"; 
import { useNavigate } from "react-router-dom"; 
 
const Navbar = () => { 
  const navigate = useNavigate(); 
  return ( 
    <div> 
      <AppBar position="static"> 
        <Toolbar variant="dense"> 
          <Button 
            variant="h6" 
            color="inherit" 
            component="div" 
            sx={{ m: 2 }} 
            onClick={() => navigate("/")} 
          > 
            Todos 
          </Button> 
          <Button 
            variant="h6" 
            color="inherit" 
            component="div" 
            sx={{ m: 2 }} 
            onClick={() => navigate("/add")} 
          > 
            AddTodo 
          </Button> 
        </Toolbar> 
      </AppBar> 
    </div> 
  ); 
}; 
 
export default Navbar;