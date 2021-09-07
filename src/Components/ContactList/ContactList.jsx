
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactList = ({ contacts, onDeleteContact }) => (
    contacts.map(({ id, name, number }) => (
        <ul>
            <li key={id} className={styles.list}>{name}: {number}
          <button class='btn btn-primary' onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        </ul> 
    ))
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


  

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: (id) => dispatch(contactsOperations.onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);