import { Component } from "react";
import { connect } from 'react-redux';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import contactsOperations from '../src/redux/contacts/contacts-operations';
import contactsSelectors from '../src/redux/contacts/contacts-selectors';

const styles = {
  app: {
    width: 500,
    margin: 'auto',
    textAlign: 'left',
   
  }
}

class ContactsView  extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
 
  render() {

  return (   
  <div style = {styles.app}>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter/>
      <ContactList />
      
      {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
      
</div>)


} 
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps) (ContactsView );


