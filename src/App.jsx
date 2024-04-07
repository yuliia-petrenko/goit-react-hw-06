import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/contactsSlice';

export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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
                   <ContactList />
            {isLoading && <b>Request in progress...</b>}
             {error && <ErrorMessage />}
                </section>
            </div>
       </div>
    );
}

