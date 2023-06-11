import { useDispatch } from 'react-redux';
import {Flex, Text } from '@chakra-ui/react'
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from './UserMenu.styled';
export const UserMenu=()=>{
  const dispatch = useDispatch();
  const { user } = useAuth();
    return (
        <Flex gap={4} >
          <p >Welcome, <Text as='b' color='#D53F8C'>{user.name}</Text>  </p>
          <Button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        </Flex>
      );
}