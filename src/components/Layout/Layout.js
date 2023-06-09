import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from '@chakra-ui/react'

import { AppBar } from "components/AppBar/AppBar"


export const Layout=()=>{
    return (
        <Box bg='tomato' w='100%' h='100vh' p={4} color='white'>
            <AppBar/>
        <Suspense fallback={null}>
            <Box as='main' bg='blue' w='100%'  p={4} color='white'>
        <Outlet />
        </Box>
      </Suspense>
        </Box>
    )
}