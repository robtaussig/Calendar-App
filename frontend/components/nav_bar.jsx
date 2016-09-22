import React, {PropTypes} from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    this.state = {
      currentMonth: this.parseMonth(),
      currentYear: this.parseYear()
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  parseMonth () {
    if (this.props.currentMonth) {
      return this.months[this.props.currentMonth.getMonth()];
    }
  }

  parseYear() {
    if (this.props.currentMonth) {
      return this.props.currentMonth.getFullYear();
    }
  }

  componentWillReceiveProps () {
    this.setState({currentMonth: this.parseMonth()});
    this.setState({currentYear: this.parseYear()});
  }

  nextMonth () {
    this.props.changeMonth(1);
  }

  prevMonth () {
    this.props.changeMonth(-1);
  }

  render() {
    return (
      <div className="nav-bar-top">
        <ul className="nav-bar">
          <li onClick={this.prevMonth} className="nav-button">
            Previous month
          </li>
          <li className="current-month">
            {`${this.state.currentMonth} ${this.state.currentYear}`}
          </li>
          <li onClick={this.nextMonth} className="nav-button">
            Next month
          </li>
        </ul>
      </div>
    );
  }
}

NavBar.propTypes = {
};
