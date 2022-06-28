import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

function Loading({aberto}) {
    return (
        <Backdrop open={aberto} style={{zIndex:9}} className="backdrop">
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Box>
                    <CircularProgress />
                </Box>
                <Box marginTop={2}>
                    <Typography color="textSecondary" variant="subtitle2">Aguarde um pouco...</Typography>
                </Box>
            </Box>
        </Backdrop>
    )
}

export default Loading
