import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Info() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ 
                    bgcolor: '#cfe8fc', 
                    height: '25%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': {
                      m: 1,
                      width: '25%',
                      height: '25%',
                      textAlign: 'center'
                    },
                }}>
                    <Paper elevation={0}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Taxa de Entrega                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calcular
                        </Typography>
                    </Paper>
                    <Paper elevation={0}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Taxa de Entrega                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calcular
                        </Typography>
                    </Paper>
                    <Paper elevation={0}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Taxa de Entrega                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calcular
                        </Typography>
                    </Paper>                    
                </Box>
            </Container>
        </React.Fragment>
    );
}