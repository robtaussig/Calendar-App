import React, {PropTypes} from 'react';
import Month from './month';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps () {
    
  }

  render() {
    return (
      <div>
        <Month selectDate={this.props.selectDate}
          selectedDate={this.props.selectedDate}
          currentMonth={this.props.currentMonth}
          appointments={this.props.appointments}/>
      </div>
    );
  }
}

Calendar.propTypes = {
};
