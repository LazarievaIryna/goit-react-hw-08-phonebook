import { useDispatch } from 'react-redux';
import {Flex, Text } from '@chakra-ui/react'
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
export const UserMenu=()=>{
  const dispatch = useDispatch();
  const { user } = useAuth();
    return (
        <Flex gap={4} >
          <p >Welcome, <Text as='b'>{user.name}</Text>  </p>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </Flex>
      );
}