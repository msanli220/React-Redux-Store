import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import navigation from '../app-navigation';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap"
import List from '@material-ui/core/List';

function AppBarMenu() {




  const _navigation = navigation.map((item, index) => {
    const _childs = [];
    if ( item.items !== undefined ) {
        // child elementi var
        for ( let childItem of item.items ) {
            _childs.push({
                parentId: index,
                ...childItem
            })
        }
    }
    return {
        id: index,
        ...item,
        items: _childs === [] ? undefined : _childs
    }
});


    console.log("navigation:",_navigation)


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar >

          <Nav>
              {_navigation.map((item,index) => (
                 <NavLink to={item.path} >

                  <Typography textAlign="center">{item.text}</Typography>

                </NavLink>
              ))}
     
            </Nav>
      
      
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarMenu;