import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';



const ContactList = ({  onDelete }) => {
         const contacts = useSelector(selectFilteredContacts);

    return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;