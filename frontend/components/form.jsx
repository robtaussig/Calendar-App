import React, {PropTypes} from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.setEmail = this.setEmail.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      description: "",
      email: "",
      buttonText: "Submit"
    };
  }

  setEmail (e) {
    e.preventDefault();
    this.setState({email: e.currentTarget.value});
  }

  setDescription (e) {
    e.preventDefault();
    this.setState({description: e.currentTarget.value});
  }

  submit () {
    this.props.submitForm(this.state);
  }

  render() {
    let email = this.props.prefillInfo.email;
    let _email = email !== '' ? email : 'Enter email';
    let description = this.props.prefillInfo.title;
    let _description = description !== '' ? description : 'Enter purpose';
    return (
      <div>
        <ul className="form">
          <li>
            <input type="text" onChange={this.setEmail}
              value={this.state.email}
              placeholder={_email}/>
          </li>
          <li>
            <input type="text" onChange={this.setDescription}
              value={this.state.description}
              placeholder={_description}/>
          </li>
          <li>
            <div onClick={this.submit}
              className={`submit-button ${this.props.buttonColor}`}>
              {this.props.buttonText}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Form.propTypes = {
};
