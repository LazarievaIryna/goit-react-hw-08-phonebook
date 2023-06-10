import { NavLink } from 'react-router-dom';
// import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react'

import {Flex } from '@chakra-ui/react'
// import css from './AuthNav.module.css';
import {Link} from '../AuthNav/AuthNav.styled'

export const AuthNav = () => {
  return (
    // <SimpleGrid columns={2} spacing={10}>
    <Flex gap={4}>
      <Link to="/register">
        Register
      </Link>
      
      
      <Link  to="/login">
        Log In
      </Link>
      </Flex>
      
    
    // </SimpleGrid>
  );
};
