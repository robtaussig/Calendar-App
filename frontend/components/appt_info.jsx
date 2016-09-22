import React, {PropTypes} from 'react';

export default class AppInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps () {
    this.title = this.props.apptInfo.title;
    this.email = this.props.apptInfo.email;
  }

  render() {
    let apptTitle = this.title || "";
    let apptEmail = this.email || "";

    return (
      <div>
        <ul className="appt-info">
          <li><b>Email: </b> {apptEmail}</li>
          <li><b>Purpose: </b> {apptTitle}</li>
        </ul>
      </div>
    );
  }
}

AppInfo.propTypes = {
};
