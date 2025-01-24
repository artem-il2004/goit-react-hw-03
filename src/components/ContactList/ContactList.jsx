import Contact from "../Contact/Contact"; 
import c from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={c.wrapper}>
      {
        contacts.length === 0
          ? (<p>There is no contacts</p>)
          : contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <Contact data={contact} onDelete={onDelete} />
                </li>
              );
            })
      }
    </ul>
  );
}

export default ContactList;
