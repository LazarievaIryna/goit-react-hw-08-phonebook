import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from '@chakra-ui/react'

import { AppBar } from "components/AppBar/AppBar"


export const Layout=()=>{
    return (
        <Box  w='100%'  p={4} color='white'  h='100vh'>
            <AppBar/>
        <Suspense fallback={null}>
            <Box as='main'  w='100%'  p={4} color='black'>
        <Outlet />
        </Box>
      </Suspense>
        </Box>
    )
}