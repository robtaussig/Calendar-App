import React, {PropTypes} from 'react';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.days = {
      1: 'Sun',
      2: 'Mon',
      3: 'Tues',
      4: 'Wed',
      5: 'Thurs',
      6: 'Fri',
      7: 'Sat',

    };
    this.handleClick = this.handleClick.bind(this);
    this.date = this.parseDate();
    this.selected = false;
    this.indicator = false;
  }

  componentWillReceiveProps () {
    this.date = this.parseDate();
    if (
      this.props.appointments && this.props.appointments.some(date => {
        return (
          date.getMonth() === this.props.currentMonth.getMonth() &&
          date.getYear() === this.props.currentMonth.getYear() &&
          date.getDate() === (this.date)
        );
      })
    ) {
      this.indicator = true;
    } else {
      this.indicator = false;
    }
  }

  parseDate () {
    let firstDay = new Date(this.props.currentMonth.getFullYear(),
      this.props.currentMonth.getMonth(), 1);
    let lastDay = new Date(this.props.currentMonth.getFullYear(),
      this.props.currentMonth.getMonth() + 1, 0);
    let num = parseInt(this.props.day) + (7 * this.props.week) - 7 - firstDay.getDay();
    return num > lastDay.getDate() || num < 1 ? "" : num;
  }

  handleClick () {
    this.props.selectDate(this.date);
  }

  render() {
    let display = this.props.week === 0 ? this.days[this.props.day] : this.date;
    let selected = this.props.selectedDate === this.date &&
    this.props.week > 0 &&
    this.date !== "" ?
      'selected' : '';
    let appointment = this.indicator ? "hasAppointment" : "";
    let selectable = this.date !== "" && this.props.week !== 0 ?
      "selectable" : "";
    return (
      <div onClick={this.handleClick} className={`indiv-day ${selected}
        ${appointment} ${selectable}`}>
        {display}
      </div>
    );
  }
}

Day.propTypes = {
};
