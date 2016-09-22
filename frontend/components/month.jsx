import React, {PropTypes} from 'react';
import Week from './week';

export default class Month extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <ul className="weeks">
          <li className="null">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={0} week={0} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={1} week={1}
              appointments={this.props.appointments} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={2} week={2}
              appointments={this.props.appointments} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={3} week={3}
              appointments={this.props.appointments} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={4} week={4}
              appointments={this.props.appointments} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={5} week={5}
              appointments={this.props.appointments} />
          </li>
          <li className="week">
            <Week selectDate={this.props.selectDate}
              currentMonth={this.props.currentMonth}
              selectedDate={this.props.selectedDate}
              key={6} week={6}
              appointments={this.props.appointments} />
          </li>
        </ul>
      </div>
    );
  }
}

Month.propTypes = {
};
