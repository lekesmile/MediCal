import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title" >
            <Link className="title" to="/">Medical Calculation App</Link>
          </Typography>

         <Link className="title1" to="/login">Login</Link>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar