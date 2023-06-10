// import { Helmet } from 'react-helmet';
import { Box, Heading } from '@chakra-ui/react'
import { LoginForm} from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {/* <Helmet> */}
      <Heading  as='h3' size='lg' paddingBottom='10px'>Login</Heading>
      {/* </Helmet> */}
      <LoginForm />
    </Box>
  );
}
