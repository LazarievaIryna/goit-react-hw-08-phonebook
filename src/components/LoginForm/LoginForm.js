import { useDispatch } from 'react-redux';
import { Input,InputGroup,InputLeftElement, FormLabel, Button, Box} from '@chakra-ui/react'
import {  EmailIcon, LockIcon} from '@chakra-ui/icons'
import { logIn } from 'redux/auth/operations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as='form' w='auto'  onSubmit={handleSubmit} autoComplete="off">
      
      <InputGroup mb='10px'>
    <InputLeftElement bottom='0px' top='28px'  children={<EmailIcon color='black.300' />}/>

    
    <FormLabel width='300px' m='0' >
    Email
    <Input type="email" name="email" variant='filled' pl='35px' mt='5px' mb='10px' />
    </FormLabel>
  </InputGroup>

  <InputGroup mb='10px'>
    <InputLeftElement bottom='0px' top='29px'  children={<LockIcon color='black.300' />}/>
    <FormLabel  width='300px' m='0'>
    Password
    <Input type="password" name="password" variant='filled' pl='35px' mt='5px' mb='10px'/>
    </FormLabel>
  </InputGroup>



<Button colorScheme='pink' type="submit" color='black' size='md'
  height='48px'
  width='-webkit-fill-available'
 marginTop='10px'
  >Log In</Button>
    </Box>
  );
};
