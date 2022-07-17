import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import api from '../../../lib/http';
import { type } from 'os';

export default function ValidationTextFields() {

  const [ alert, setAlert ] = useState( false );
  const [ typeAlert, setTypeAlert ] = useState( '' );
  const [ msg, setMsg ] = useState( '' );

  const defaultValues = {
    name: "",
    store_idstore: "5"
  };

  const showAlert = ( show:boolean, type:string, msg: string ) => {

    if ( show ) {
      if ( type == 'error' ) {
        return (
          <Box
            sx={{
              marginBottom: '30px'
            }}
          >
            <Grid item>
              <Stack sx={{ width: '100%' }} spacing={2}>         
                <Alert severity='error'>{msg}</Alert>
              </Stack>
            </Grid>
          </Box>
        );
      }

      return (
        <Box
          sx={{
            marginBottom: '30px'
          }}
        >
          <Grid item>
            <Stack sx={{ width: '100%' }} spacing={2}>         
              <Alert severity='success'>{msg}</Alert>
            </Stack>
          </Grid>
        </Box>
      );
    }

  }

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = function( event:any )
  {
    event.preventDefault();
    formValues.store_idstore = "5";


    setAlert( true );
    setTypeAlert( 'error' );
    setMsg( 'OK' );

    console.log( alert );
    console.log( msg );

    /*api.post( '/api/product-types/add', formValues)
      .then( function( response ) {
        console.log( response );
        if ( response.status !== 201 ) {

          setAlert( true );
          setTypeAlert('error');
          setMsg( 'ERROR' );

          //console.log('ERROR');
        }else {
          setAlert( true );
          setMsg( 'OK' );
        }



      } );*/
  }

  return (    
    <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          { showAlert( true, typeAlert, msg ) }
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="my-input">Nome do Tipo de Pratos</InputLabel>
              <Input 
                id="name"
                name="name"
                aria-describedby="my-helper-text" 
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item 
            sx={{
              marginTop: '10px'
            }}>
            <Button variant="contained" color="primary" type="submit">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
