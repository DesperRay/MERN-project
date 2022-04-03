import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

const App = () => {
    return (
        <Container maxwidth = 'lg'>
            <AppBar position = "static" color = "inherit">
                <Typography variant='h2' align = 'center'>Jobs</Typography>
            </AppBar>
        </Container>
    );
}

export default App;