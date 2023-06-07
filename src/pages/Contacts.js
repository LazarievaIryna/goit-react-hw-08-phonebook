import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Error } from 'components/Error/Error';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';



export default function Contacts  ()  {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    
  
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        {error && <Error>{error}</Error>}
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
        {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
        <Loader isLoading={isLoading} />
      </>
    );
  };