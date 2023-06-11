import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Box, InputGroup, InputLeftElement,FormLabel, Button } from '@chakra-ui/react'
import { PhoneIcon, CheckCircleIcon} from '@chakra-ui/icons'
import   {toast } from 'react-toastify';


import {selectContacts} from '../../redux/contacts/selectors'
import { addContact } from '../../redux/contacts/operations';



export const ContactForm=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit=event=>{
    event.preventDefault();

    const newContact = { name, number};
    
    const checkedNumber=contacts.find(contact => contact.number === number);
    
    if(contacts.some(contact=>contact.name===name)){
       
      toast.error(`Contact with name "${name}" is already in contacts`);
      return;

    } else if(checkedNumber){
   
      toast.error(`Contact with number ${checkedNumber.number} is already in  ${checkedNumber.name}`);
      return;
    }
    else{
      dispatch(addContact(newContact))
    }
  setName('')
  setNumber('')
  }
  
  
  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };



    return (

        <Box as='form' w='auto' display={'inline-grid'} onSubmit={handleSubmit}>

<InputGroup mb='10px'>
    <InputLeftElement bottom='0px' top='28px'  children={<CheckCircleIcon color='black.300' />}/>

    
    <FormLabel width='300px' m='0' >
    Name
    <Input
    
    
    type="text" 
    name="name" 
    value={name}  
    variant='filled'
    pl='35px' 
    mt='5px' 
    mb='10px' 
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
    onChange={handleNameChange}/>
    </FormLabel>
  </InputGroup>

  <InputGroup mb='10px'>
    <InputLeftElement bottom='0px' top='28px'  children={<PhoneIcon color='black.300' />}/>

    
    <FormLabel width='300px' m='0' >
    Number
    <Input 
    type="tel" 
    name="number" 
    value={number} 
    variant='filled' 
    pl='35px' 
    mt='5px' 
    mb='10px' 
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    onChange={handleNumberChange}/>
    </FormLabel>
  </InputGroup>
         
    <Button colorScheme='pink' type="submit" color='black' size='md'
  height='30px'
  width='-webkit-fill-available'
 marginTop='10px'
 marginBottom='20px'
  >Add contact</Button>

        </Box>
        
      );
}