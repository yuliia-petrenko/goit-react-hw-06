// import { useState } from 'react';
// import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';

export default function App() {
    const contacts = useSelector(selectContacts);

    return (
        <div>
            <div>
                <h1>PhoneBook</h1>
                <section>
                    <ContactForm />
                </section>
                <section>
                    <SearchBox />
                </section>
                <section>
                    {contacts.length ? <ContactList /> : <p>No contacts yet</p>}
                </section>
            </div>
        </div>
    );
}
