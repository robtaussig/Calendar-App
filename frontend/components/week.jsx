import React, {PropTypes} from 'react';
import Day from './day';

export default class Week extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul id={this.props.week} className="days">
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={1} day='1' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={2} day='2' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={3} day='3' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={4} day='4' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={5} day='5' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={6} day='6' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
          <li className="day">
            <Day selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={7} day='7' week={this.props.week}
              appointments={this.props.appointments}/>
          </li>
        </ul>
      </div>
    );
  }
}

Week.propTypes = {
};
