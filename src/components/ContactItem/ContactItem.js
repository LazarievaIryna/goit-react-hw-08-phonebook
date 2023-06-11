import PropTypes from 'prop-types';
import { useDispatch } from "react-redux"

import {  Box, Button } from '@chakra-ui/react'

import {deleteContact} from"../../redux/contacts/operations"


export const ContactItem=({contact: {name, number, id}})=>{
    const dispatch=useDispatch()
    const handleDelete = () => dispatch(deleteContact(id));
    return(
        
      <Box as='li' display='flex' alignItems='center' justifyContent='space-evenly' mb='10px'>
        <Box mr='5px'>{name}</Box> : <Box ml='5px'>{number}</Box>
        <Button onClick={handleDelete} colorScheme='pink' type="button" color='black' size='md'
  height='28px'
  width='auto'
  ml='10px'
 
  >Delete</Button>
      </Box>
    
    )
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};