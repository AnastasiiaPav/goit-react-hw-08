import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThunk } from 'Redux/contactsActions';
import { Loader } from 'components/Loader';
import { Form } from 'components/FormApp';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const Contact = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterVal = useSelector(state => state.filter.value);
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  const onFilterSearch = () => {
    const inputSearch = filterVal.toLowerCase();
    if (contacts?.length !== []) {
      const filtContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(inputSearch)
      );
      return filtContact;
    }
  };

  return (
    <div>
        <Form/>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter value={filterVal} />
      {loading ? (
        <Loader />
      ) : (
        <ContactList
          contacts={onFilterSearch()}
        />
      )}
    </div>
  );
};

export default Contact;