import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilterName } from '../../redux/filtersSlice';


const ContactList = ({  deleteContact }) => {
        const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectFilterName);

    const contactsArray = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );

  return (
    <ul className={css.contactList}>
      {contactsArray.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;