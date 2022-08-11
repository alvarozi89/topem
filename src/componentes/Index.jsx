import { fontFamily } from '@mui/system'
import image from '../img/Grupo-2073.png'
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const style = {
    color:'#1F9547',
    fontFamily: "Lato",
    fontSize: '23px'
   
  };

  const style2 = {
    color:'#2D2D2D',
    fontFamily: "Lato",
    fontSize: '18px'
   
  };

  const botonRedondo = {
    width:'30px',
    height:'30px',
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

  const redondo ={
    display: 'block',
    background: '#3F3F41',
    color: '#FFFFFF',
    fontSize: '23px'
  }

  const theme = createTheme({
    shape: {
      borderRadius: 5,
      background: 'red'
    },
  });

const Index = () => {
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/seleccionar-oficina");
  }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-6">
                    <h1 style={style}><b>Solicita tu turno virtual <br /> Y realiza todos tus trámites sin filas.</b></h1>
                    <h4 style={style2} className="mt-5"><b>Como solicitar tu turno</b></h4>
                    <button style={botonRedondo}>1</button><h3 style={style2} className="mt-4">  Selecciona la oficina más cercana.</h3>
                    <button style={botonRedondo}>2</button><h3 style={style2} className="mt-4">Ingresa tus datos.</h3>
                    <button style={botonRedondo}>3</button><h3 style={style2} className="mt-4">Selecciona el servicio.</h3>
                    <button style={botonRedondo}>4</button><h3 style={style2} className="mt-4">Verifica tu información.</h3>
                    <button style={redondo} type="button" class="btn" onClick={handleRoute}>Solicitar turno</button>
                </div>
                

                <div className="col-6">
                <img class="img-fluid" src={image}/>
                </div>

            </div>

            
        </div>
    )
}

export default Index
