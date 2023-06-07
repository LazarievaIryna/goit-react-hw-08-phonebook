import { useSelector } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList=()=>{


    const visibleContacts=useSelector(selectVisibleContacts)
    
    return(
        <List>
      {visibleContacts.map(contact=>(
        <ContactItem key={contact.id} contact={contact}/>
      ))
      }
    </List>
    )
}