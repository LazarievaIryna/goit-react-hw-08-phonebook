// import { Helmet } from 'react-helmet';
import { Box, Heading } from '@chakra-ui/react'
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' >
      {/* <Helmet> */}
        <Heading  as='h3' size='lg' paddingBottom='10px'  >Registration</Heading>
      {/* </Helmet> */}
      <RegisterForm />
    </Box>
  );
}
