

import {Flex } from '@chakra-ui/react'

import {Link} from '../AuthNav/AuthNav.styled'

export const AuthNav = () => {
  return (
    
    <Flex gap={4}>
      <Link to="/register">
        Register
      </Link>
      
      
      <Link  to="/login">
        Log In
      </Link>
      </Flex>
      
    
    
  );
};
