import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";



function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const AddContact = (newContact) => { 
    setContacts((prevContacts) => [...prevContacts, newContact]);
  }
  const onDelete = (contactId) => { 
       setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }

    const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </>
  )
}

export default App
