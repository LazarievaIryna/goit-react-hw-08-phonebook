
import { Box, Heading } from '@chakra-ui/react'
import { LoginForm} from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Heading  as='h3' size='lg' paddingBottom='10px'>Login</Heading>
      <LoginForm />
    </Box>
  );
}
