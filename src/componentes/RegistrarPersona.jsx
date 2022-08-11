//import React, { useEffect,useState} from 'react'
import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from '../img/Grupo 1376.svg'
import imageCruz from '../img/Cruz-verde.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Modal,Button } from 'react-bootstrap';

export default function RegistrarPersona() {
  const [nombres,setNombres]=useState('')
  const[apellidos,setApellidos]=useState('')
  const[estadoVacuna,setEstadoVacuna]=useState([])
  const[estadoVacunaSelect,setEstadoVacunaSelect]=useState([])
  const[dosisAplicadas,setDosisAplicadas]=useState([])
  const[dosisAplicadasSelect,setDosisAplicadasSelect]=useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = {
    color:'#1F9547',
    fontFamily: "Lato",
    fontSize: '23px'
   
  };

  const redondo ={
    display: 'block',
    background: '#3F3F41',
    color: '#FFFFFF',
    fontSize: '23px'
  }

  useEffect(()=>{
    setEstadoVacuna(['No vacunado','Vacunado','Primera dosis'])
    setEstadoVacunaSelect('No vacunado')

    setDosisAplicadas(['Ninguna','Primera dosis','Segunda dosis','Esquema completo'])
    setDosisAplicadasSelect('Ninguna')

  },[])


    const mostrarModal = () =>{ 
      setShow(true)
    }

  const guardar = async(e)=>{
    e.preventDefault()
    const usuario= {
      nombres,
      apellidos,
      estadoVacuna:estadoVacunaSelect,
      dosisAplicadas:dosisAplicadasSelect,
      ciudad: sessionStorage.getItem('idUsuario'),
      ciudadNombre :sessionStorage.getItem('nombre')

    }

    if(nombres===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un nombre",
        showConfirmButton:false,
        timer:1500
      })

    }


    else if(apellidos===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un apellido",
        showConfirmButton:false,
        timer:1500
      })

    }


    else {

      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/persona/crear',usuario,{

       headers:{'autorizacion':token}


      })
      const mensaje= respuesta.data.mensaje
      console.log(mensaje)


      Swal.fire({
        icon:'success',
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

      e.target.reset();
      setNombres("");
      setApellidos("");





    }
  }

  const [tipoDocumento, setTipoDocumento] = React.useState('');

  const handleChange = (event) => {
    setTipoDocumento(event.target.value);
  };
  return (

  

<div className="container mt-4">
        <div className="row">
          <div className="col-md-6  mx-auto">
            <div className="card">
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">
                  <div className="col-md-12">
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 580 }}>
                        <InputLabel id="demo-simple-select-standard-label">Tipo de documento</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={tipoDocumento}
                          onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Cedula</MenuItem>
                          <MenuItem value={20}>Cedula extranjeria</MenuItem>
                          <MenuItem value={30}>Pasaporte</MenuItem>
                        </Select>
                      </FormControl>
                   
                  </div>

                  <div className="col-md-12">
                      
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '67ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      onChange={(e)=>setNombres(e.target.value)}
                      >
                      <TextField id="standard-basic" label="Número de  documento" variant="standard" />
                     </Box>
                    </div>

                    <div className="col-md-6">
                      
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      onChange={(e)=>setNombres(e.target.value)}
                      >
                      <TextField id="standard-basic" label="Primer nombre" variant="standard" />
                     </Box>
                    </div>

                    <div className="col-md-6">
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      onChange={(e)=>setApellidos(e.target.value)}
                      >
                      <TextField id="standard-basic" label="Segundo nombre" variant="standard" />
                     </Box>
                    </div>

                    <div className="col-md-6">
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      onChange={(e)=>setApellidos(e.target.value)}
                      >
                      <TextField id="standard-basic" label="Primer apellido" variant="standard" />
                     </Box>
                    </div>

                    <div className="col-md-6">
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      onChange={(e)=>setApellidos(e.target.value)}
                      >
                      <TextField id="standard-basic" label="Segundo apellido" variant="standard" />
                     </Box>
                    </div>
                  </div>
                    <br />
                    <button style={redondo} type="button" class="btn" onClick={mostrarModal}> Siguiente</button>
               
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6  mx-auto">
          <img class="img-fluid" src={image}/>
            </div>             

        </div>

        <Modal size="md" show={show} onHide={handleClose}>
               
                <Modal.Body>

               
        <div className="row">
          <div className="col-md-10  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
              <img class="img-fluid" src={imageCruz}/>
              </div>
              <div className="card-header text-center">
                <h4 style={style}> <b>¡Has solicitado tu <br /> turno con éxito!</b> </h4>
              </div>
              <div className="card-body">
                <form onSubmit={'guardar'}>
                  <div className="row">

                    <div className="col-md-12 text-center">
                      <label>Servicio:</label>
                    
                    </div>

                    <div className="col-md-12 text-center">
                      <label><b>Consulta externa</b></label>
                   
                    </div>

                    <div className="col-md-12 text-center">
                      <label>Día:</label>
                    
                    </div>

                    <div className="col-md-12 text-center">
                      <label><b>10-05-2021</b></label>
                   
                    </div>


                    <div className="col-md-12 text-center">
                      <label>Hora:</label>
                    
                    </div>

                    <div className="col-md-12 text-center">
                      <label><b>02:00pm</b></label>
                   
                    </div>

                    <div className="col-md-12 text-center">
      
                      <button type="button" className="my-3 btn btn-outline-success">Solicitar nuevo turno</button>
                   
                    </div>



                  </div>
                    <br />
                 
                </form>
              </div>
            </div>
          </div>
        </div>
     


                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
               
                </Modal.Footer>
              </Modal>  
      </div>

    
    
      
   
  );
}
