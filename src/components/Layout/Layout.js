import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from "components/AppBar/AppBar"


export const Layout=()=>{
    return (
        <Box  w='100%'  p={4} color='white'  h='100vh'>
            <AppBar/>
<ToastContainer
position="top-center"
autoClose={2000}

theme="light"/>
        <Suspense fallback={null}>
            <Box as='main'  w='100%'  p={4} color='black'>
        <Outlet />
        </Box>
      </Suspense>
        </Box>
    )
}