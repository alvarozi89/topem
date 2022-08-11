import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import image from '../img/Mapa--blanco-1.png'
import { useHistory } from "react-router-dom";

export default function ErrorRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'Sede 1') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  const redondo ={
    display: 'block',
    background: '#3F3F41',
    color: '#FFFFFF',
    fontSize: '23px'
  }

  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/registrarPersona");
  }

  return (
  
      <div className='row mt-5'>

        <div className='col-4'>
        <form onSubmit={handleSubmit}>

      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Selecciona la oficina más cercana</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="Sede 1" control={<Radio />} label="Sede 1 Calle 1 # 87 -78. Lorem Ipsum Horario: Lorem Ipsum" />
          <hr />
          <FormControlLabel value="Sede 2" control={<Radio />} label="Sede 2 Calle 1 # 87 -78. Lorem Ipsum Horario: Lorem Ipsum" />
          <hr />
          <FormControlLabel value="Sede 3" control={<Radio />} label="Sede 3 Calle 1 # 87 -78. Lorem Ipsum Horario: Lorem Ipsum" />
          <hr />
          <FormControlLabel value="Sede 4" control={<Radio />} label="Sede 4 Calle 1 # 87 -78. Lorem Ipsum Horario: Lorem Ipsum" />
       
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        
        <button style={redondo} type="button" class="btn" onClick={handleRoute}> Seleccionar</button>
         
        
      </FormControl>
    </form>
          
        </div>

        <div className='col-8'>
        <img class="img-fluid" src={image}/>

        </div>

      </div>
 
  
  );
}