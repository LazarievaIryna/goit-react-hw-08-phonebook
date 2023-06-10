import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react'
  
export default function Home(){
    return(


        <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='4' width='340px' textAlign='center' as='em'>
  an easy and convenient application for creating, editing and storing your contacts.
  <br></br>
try it!
  </AbsoluteCenter>
</Box>
        // <div>
        //     <h1>Welcome page</h1>
        // </div>
    )
}