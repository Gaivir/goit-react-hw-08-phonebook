import React, { Component } from 'react';

const styles = {
  form: {
    width: 230,
    
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component{
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
      
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className="text-center">Вкажіть логін та пароль</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
            //   required
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
            //   required
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" class="btn btn-light">Увійти</button>
        </form>
      </div>
    );
  }
}



export default LoginView;