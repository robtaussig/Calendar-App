import React, {PropTypes} from 'react';
import Calendar from './calendar';
import AppointmentActions from '../actions/appointment_actions';
import AppointmentStore from '../stores/appointment_store';
import NavBar from './nav_bar';
import Form from './form';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.receiveChange = this.receiveChange.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.setDate = this.setDate.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.selectedAppointment = {};
    this.state = ({
      appointments: [],
      currentMonth: new Date(),
      formInfo: {},
      selectedDate: new Date(),
      dates: [],
      action: 'Submit'
    });
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
    this.selectedAppointment = {};
    this.setState({
      appointments: AppointmentStore.allAppointments(),
      selectedDate: ""
    });
  }

  updateForm (info) {
    this.setState({formInfo: info});
  }

  makeAppointment () {
    if (this.state.action === 'Update') {
      AppointmentActions.updateAppointment(this.selectedAppointment,this.state.formInfo);
    } else {
      AppointmentActions.createAppointment(this.state.formInfo);
    }
  }

  setDate (date) {
    this.selectedAppointment = {};
    this.setState({action: 'Submit'});
    let selectedAppointment = [];
    if ( this.state.appointments ) {
      selectedAppointment = this.state.appointments.filter(appt => {
        let testDate = new Date(appt.appointment_date);
        return (
          testDate.getMonth() === this.state.currentMonth.getMonth() &&
          testDate.getYear() === this.state.currentMonth.getYear() &&
          testDate.getDate() === (date)
        );
      });
    }
    if (selectedAppointment.length > 0) {
      this.setSelectedAppointment(selectedAppointment);
    }
    this.setState({selectedDate: date});
  }

  updateAppointment (e) {
    this.setState({action: 'Update'});
  }

  deleteAppointment (e) {
    AppointmentActions.deleteAppointment(this.selectedAppointment);
    this.selectedAppointment = {};
  }

  setSelectedAppointment(appointment) {
    this.selectedAppointment = appointment[0];
  }

  receiveChange() {
    let appointments = AppointmentStore.allAppointments();
    let dates = appointments.map(date => new Date(date.appointment_date));
    this.setState({appointments: appointments, dates: dates});
    this.forceUpdate();
  }

  render() {
    let apptEmail = this.selectedAppointment.email || "";
    let apptTitle = this.selectedAppointment.title || "";
    let _buttons = this.selectedAppointment.email ?
    [<li><div onClick={this.updateAppointment} className="update">Update!</div></li>,
    <li><div onClick={this.deleteAppointment} className="delete">Delete</div></li>] : "";
    return (
      <div>
        <NavBar makeAppointment={this.makeAppointment}
          changeMonth={this.changeMonth}
          currentMonth={this.state.currentMonth}/>
        <Form updateChanges={this.updateForm}
          submitForm={this.makeAppointment}
          buttonText={this.state.action}/>
        <Calendar selectedDate={this.state.selectedDate}
          selectDate={this.setDate}
          appointments={this.state.dates}
          currentMonth={this.state.currentMonth}/>
          <ul className="appt-info">
            <li><b>Email: </b> {apptEmail}</li>
            <li><b>Purpose: </b> {apptTitle}</li>
          </ul>
          <ul className='buttons'>{_buttons}</ul>
      </div>
    );
  }
}

Home.propTypes = {
};
