import React from 'react'

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


// ICONES
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';

function Fotos({fotos,url_base,apagar_foto,abrirModal}) {
    return (
        <>
        <Grid spacing={2} container className="fotos">
            {
            fotos.map((foto,k)=>(
                <Grid item xs={12} sm={6} md={4} key={foto.legenda}>
                    <Card className={`card ${k===fotos.length-1?'ultimaFoto':''}`}>
                        <CardMedia image={`${url_base}/Img/${foto.nome}`} className="cardFoto"/>
                        <CardContent>
                            <Typography varaint="h6" color="textSecondary">
                                {foto.legenda.substring(0,30)}
                                {foto.legenda.length > 30?'...':''}
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent:'flex-end'}}>
                            <Tooltip arrow title="Apagar foto">
                                <IconButton onClick={()=>apagar_foto(foto.id)}>
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow title="Editar legenda da foto">
                                <IconButton onClick={()=>abrirModal(foto.id,foto.legenda)}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow title="Ver esta foto">
                                <IconButton component="a" target="__blank" href={`${url_base}/Img/${foto.nome}`}>
                                    <RemoveRedEye />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            
            }
        </Grid>
        {fotos.length === 0 &&
            <Box marginTop={2}>
                <Typography align="center" variant="h6" color="textSecondary">
                    Seja o primeiro a enviar uma foto!
                </Typography>
            </Box>
        }
        </>
    )
}

export default Fotos
