import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({avatar, name, onLogout }) => (
    <div style={styles.container}>
        <img src={avatar} alt="" width="32" style={styles.avatar}/>
        <span style={styles.name}>Вітання, {name}</span>
    {/* <button type="button" onClick={onLogout}>Выйти</button> */}
    <button type="button" onClick={onLogout} variant="outline-primary">Вийти</button>
    </div>
)


const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
})

const mapDispatchToProps = {
  onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);