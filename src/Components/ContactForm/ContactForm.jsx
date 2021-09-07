import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import shortid from 'shortid';

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

                <form onSubmit={this.handleSubmit}>
          <label htmlFor={ this.nameInputId}>name
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id={this.nameInputId}
                    />
                    </label>
                    
              
                <label htmlFor={ this.numberInputId}>number
                    <input
                        type='tel'
                    name='number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержат ь пробелы, тире, круглые скобки и может начинаться с +"
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