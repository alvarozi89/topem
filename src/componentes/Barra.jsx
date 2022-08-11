import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import image from '../img/Cruz-verde.png'
import Icon from '@mui/material/Icon';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import { useHistory } from "react-router-dom";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    background: '#FFFFFF',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));

  const theme = createTheme({
    shape: {
      borderRadius: 5,
      background: 'red'
    },
  });

  const botonRedondo = {
    width:'40px',
    height:'40px',
    background:'#1F9547',
    margin: '5px',
    padding:'3px',
    borderradius: '50px',
    fontSize:'13px',
    fontFamily: "Lato",
    lineheight:'32px',
    texttransform: 'uppercase',
    float:'left',
    webkitBorderRadius: '50px',
    mozBorderRadius: '50px',
    color:'#FFFFFF'
   
  };
export default function Barra() {
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/");
  }
return (
   <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">  <img src={image}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={handleRoute}> <Icon>arrow_back</Icon> atras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <button style={botonRedondo}>1</button>....
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <button style={botonRedondo}>2</button>....
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <button style={botonRedondo}>3</button>....
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <button style={botonRedondo}>4</button>....
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <h2><b>Netux</b></h2>
      </form>
    </div>
  </div>
</nav>
   </div>
)
       
}
