import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact =({ data: { name, number, id  } }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.contactList}>
            <div className={css.contactInfo}>
                <div className={css.contactInfo}>
                    <FaUser />
                    <p className={css.contactIcon}>{name}</p>
                
                    
                    <p > <FaPhoneAlt className={css.contactIcon} /> {number}</p>
                </div>
            </div>
            <button className={css.btnDel} onClick={() => dispatch(deleteContact(id))}>Delete
            <MdDelete /></button>
        </div>
    );
};


export default Contact;