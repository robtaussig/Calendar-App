import React, {PropTypes} from 'react';
import Calendar from './calendar';
import AppointmentActions from '../actions/appointment_actions';
import AppointmentStore from '../stores/appointment_store';
import NavBar from './nav_bar';
import Form from './form';
import ApptInfo from './appt_info';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.receiveChange = this.receiveChange.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      appointments: [],
      currentMonth: new Date(),
      formInfo: {},
      selectedDate: new Date(),
      dates: [],
      selectedAppointment: {}
    };
  }

  componentDidMount () {
    this.listener = AppointmentStore.addListener(this.receiveChange);
    AppointmentActions.fetchAppointments();
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  changeMonth (direction) {
    this.state.currentMonth.setMonth(this.state.currentMonth.getMonth() + direction);
    this.setState({
      appointments: AppointmentStore.allAppointments(),
      selectedDate: ""
    });
  }

  updateForm (info) {
    this.setState({formInfo: info});
  }

  makeAppointment () {
    debugger
    if (AppointmentStore.allAppointments().include(this.selectedDate)) {
      AppointmentActions.updateAppointment(this.state.formInfo);
    } else {
      AppointmentActions.createAppointment(this.state.formInfo);
    }
  }

  setDate (date) {
    let selectedAppointment = [];
    if ( this.state.appointments ) {
      selectedAppointment = this.appointments.filter(appt => {
        return (
          appt.getMonth() === this.state.currentMonth.getMonth() &&
          appt.getYear() === this.state.currentMonth.getYear() &&
          appt.getDate() === (date)
        );
      });
    }
    if (selectedAppointment.length > 0) {
      this.setState({selectedAppointment: selectedAppointment[0]});
    }
  }

  receiveChange() {
    let appointments = AppointmentStore.allAppointments();
    let dates = appointments.map(date => new Date(date.appointment_date));
    this.setState({appointments: appointments, dates: dates});
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <NavBar makeAppointment={this.makeAppointment}
          changeMonth={this.changeMonth}
          currentMonth={this.state.currentMonth}/>
        <Form updateChanges={this.updateForm}
          submitForm={this.makeAppointment}/>
        <Calendar selectedDate={this.state.selectedDate}
          selectDate={this.setDate}
          appointments={this.state.dates}
          currentMonth={this.state.currentMonth}/>
        <ApptInfo apptInfo={this.state.selectedAppointment}/>
      </div>
    );
  }
}

Home.propTypes = {
};
