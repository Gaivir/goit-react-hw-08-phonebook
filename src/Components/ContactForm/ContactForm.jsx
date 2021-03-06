import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import shortid from 'shortid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

   nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleNameChange = event => {
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;

    this.setState({ [name] : value });
    };
    

     handleSubmit = event => {
         const { name, number } = this.state;
        event.preventDefault();
         this.props.onSubmit(name, number);
         this.formReset();
        //  console.log(this.props.contacts);


        //    const { name, number } = this.state;
        // const { contacts } = this.props;
        // event.preventDefault();
        
        // if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
        //     alert(`${name} is already in contacts.`);
        //     return {name: '', number: ''};
        // } 

        // this.props.onSubmit(name, number);
        //     this.formReset();
        
    }
    


    formReset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }



    render() {
        return (

                <form className={styles.formContact} onSubmit={this.handleSubmit}>
          <label htmlFor={ this.nameInputId} className={styles.formLabel}>Name
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id={this.nameInputId}
                    />
                    </label>
                    
              
                <label htmlFor={ this.numberInputId} className={styles.formLabel}>Number
                    <input
                        type='tel'
                    name='number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ???????????????? ?? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
                    required
                        value={this.state.number}
                        onChange={this.handleNameChange}
                        id={this.numberInputId}
                    />
                </label>
                
                <button type='submit'>Add contacts</button>
          
        </form>

        )
    }
}

// const mapStateToProps = (state) => ({
//      contacts: state.contact.contacts,
// })

const mapDispatchToProps = dispatch => ({
    onSubmit: (name,number) => dispatch (contactsOperations.formSubmitHandler(name,number)),
})
export default connect(null, mapDispatchToProps)(ContactForm);