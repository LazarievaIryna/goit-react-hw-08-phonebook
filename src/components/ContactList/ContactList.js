import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react'
import { ContactItem } from '../ContactItem/ContactItem';

import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList=()=>{


    const visibleContacts=useSelector(selectVisibleContacts)
    
    return(
        <Box as='ul' minWidth='300px' >
      {visibleContacts.map(contact=>(
        <ContactItem key={contact.id} contact={contact}/>
      ))
      }
    </Box>
    )
}