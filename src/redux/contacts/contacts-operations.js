
import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions';



const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) =>
            dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error.message)));

}

const formSubmitHandler = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());
        
    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)),)
        .catch(error => dispatch(addContactError(error.message)));
        
};

const onDeleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
}


export default {
    fetchContacts,
    formSubmitHandler,
    onDeleteContact,
}