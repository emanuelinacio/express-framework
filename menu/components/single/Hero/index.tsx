import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Hero() {


    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" sx={{height: '230px'}}>
            <Box sx={{ 
                    bgcolor: '#cfe8fc', 
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                <Card sx={{ 
                        maxWidth: '50%', 
                        height: '60vh',
                        textAlign: 'center',
                        maxHeight: '220px',
                    }}>
                    <CardMedia
                        component="img"
                        height="40%"
                        image="https://www.eurodicas.com.br/wp-content/uploads/2021/09/restaurante-em-portugal.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="button" component="div">
                            MARMITA DA CIDADE
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Comida caseira todos os dias
                        </Typography>
                        <Button variant="outlined" size="small">ABERTO</Button>
                        
                    </CardContent>
                </Card>
            </Box>
        </Container>
        </React.Fragment>
    );
}