import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import olxLogo from '../images/olxLogo.png';
import { red } from '@material-ui/core/colors';

import {Dropdown} from './Dropdown'
import '../Styles/Header.css';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {
    const classes = useStyles();

    return (
<div className={classes.root}>
    
      <AppBar position="fixed" className="appBr">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <img src={olxLogo} className="logo" alt="Logo" />
          </IconButton>

                <Dropdown/>

            <div className="btn">
          <Button color="inherit" style={{textDecorationLine:"underline", fontWeight:"bold", fontSize:"17px"}}>Login</Button>
          <Button color="inherit" variant="contained" className="btnSell">Sell here</Button>
         
          </div>


        </Toolbar>
      </AppBar>
    </div>
    
    
    )
}
