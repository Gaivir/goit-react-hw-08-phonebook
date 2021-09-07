// import styles from './Filter.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({value, changFilter}) => (
    <label>Find contacts by name
        <input type="text" value={value}
        onChange ={changFilter}/>

    </label>
)

const mapStateToProps = (state) => ({
    value: contactsSelectors.getFilter(state),
})
const mapDispatchToProps = dispatch => ({
    changFilter: (event) => dispatch(contactsActions.onChangeFilter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps )(Filter);