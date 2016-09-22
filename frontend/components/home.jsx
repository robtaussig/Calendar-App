import React, {PropTypes} from 'react';
import Calendar from './calendar';
import AppointmentActions from '../actions/appointment_actions';
import AppointmentStore from '../stores/appointment_store';
import NavBar from './nav_bar';
import Form from './form';
import ErrorStore from '../stores/error_store';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.receiveChange = this.receiveChange.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
    this.setDate = this.setDate.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.selectedAppointment = {};
    this.receiveError = this.receiveError.bind(this);
    this.state = ({
      appointments: [],
      currentMonth: new Date(),
      formInfo: {},
      selectedDate: new Date(),
      dates: [],
      action: 'Submit',
      error: '',
      prefillInfo: {
        title: '',
        email: ''
      }
    });
  }

  componentDidMount () {
    this.listener = AppointmentStore.addListener(this.receiveChange);
    this.error = ErrorStore.addListener(this.receiveError);
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

  receiveError () {
    let error = ErrorStore.currentError().responseJSON[0];
    let that = this;
    that.setState({error: error});
    that.timeout = window.setTimeout(() => {
      that.setState({error: ''});
    }, 3000);
  }

  makeAppointment (data) {
    this.state.currentMonth.setDate(this.state.selectedDate);
    let date = this.state.currentMonth;
    let appointmentInfo = {
      appointment_date: date,
      title: data.description,
      email: data.email
    };
    if (this.state.action === 'Update') {
      AppointmentActions.updateAppointment(appointmentInfo,this.selectedAppointment);
    } else {
      AppointmentActions.createAppointment(appointmentInfo);
    }
  }

  setDate (date) {
    this.selectedAppointment = {};
    this.setState({action: 'Submit', error: '', prefillInfo: {
      title: '', email: ''
    }});
    let selectedAppointment = [];
    if ( this.state.appointments ) {
      selectedAppointment = this.state.appointments.filter(appt => {
        let testDate = new Date(appt.appointment_date);
        testDate.setDate(testDate.getDate() + 1);
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
    let email = this.selectedAppointment.email;
    let title = this.selectedAppointment.title;
    let prefill = {
      email: email,
      title: title
    };
    this.setState({action: 'Update', prefillInfo: prefill});
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
    let dates = appointments.map(date => {
      let newDate = new Date(date.appointment_date);
      newDate.setDate(newDate.getDate() + 1);
      return new Date(newDate);
    });
    this.setState({appointments: appointments, dates: dates});
    this.forceUpdate();
  }

  render() {
    let apptEmail = this.selectedAppointment.email || "";
    let apptTitle = this.selectedAppointment.title || "";
    let _buttons = this.selectedAppointment.email ?
    [<li><div onClick={this.updateAppointment} className="update">Update!</div></li>,
    <li><div onClick={this.deleteAppointment} className="delete">Delete</div></li>] : "";
    let _hideError = this.state.error === "" ? "hidden" : "";
    let _buttonColor = this.state.action === "Update" ? "orange" : "blue";
    return (
      <div>
        <NavBar makeAppointment={this.makeAppointment}
          changeMonth={this.changeMonth}
          currentMonth={this.state.currentMonth}/>
        <Form submitForm={this.makeAppointment}
          buttonColor={_buttonColor}
          buttonText={this.state.action}
          prefillInfo={this.state.prefillInfo}/>
        <div className={`errors ${_hideError}`}>{this.state.error}</div>
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
