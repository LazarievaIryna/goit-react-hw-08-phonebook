
import { Box, Heading } from '@chakra-ui/react'
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' >
        <Heading  as='h3' size='lg' paddingBottom='10px'  >Registration</Heading> 
      <RegisterForm />
    </Box>
  );
}
