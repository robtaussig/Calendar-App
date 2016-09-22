import AppDispatcher from '../dispatcher/dispatcher.js';
import AppointmentConstants from '../constants/appointment_constants.js';
import AppointmentApi from '../utils/appointment_api.js';

module.exports = {

  fetchAppointments () {
    AppointmentApi.fetchAppointments(this.receiveAllAppointments, this.receiveError);
  },

  fetchAppointment (id) {
    AppointmentApi.fetchAppointment(id,this.receiveAppointment, this.receiveError);
  },

  createAppointment (data) {
    AppointmentApi.createAppointment(data,this.receiveAppointment, this.receiveError);
  },

  updateAppointment (data) {
    AppointmentApi.updateAppointment(data,this.receiveAppointment, this.receiveError);
  },

  deleteAppointment (data) {
    AppointmentApi.removeAppointment(data,this.removeAppointment, this.receiveError);
  },

  receiveAppointment (appointment) {
    AppDispatcher.dispatch({
      actionType: AppointmentConstants.APPOINTMENT_RECEIVED,
      data: appointment
    });
  },

  receiveAllAppointments (data) {
    AppDispatcher.dispatch({
      actionType: AppointmentConstants.APPOINTMENTS_RECEIVED,
      data: data
    });
  },

  removeAppointment (appointment) {
    AppDispatcher.dispatch({
      actionType: AppointmentConstants.APPOINTMENT_REMOVED,
      data: appointment
    });
  },

  receiveError (error) {
    AppDispatcher.dispatch({
      actionType: AppointmentConstants.ERROR_RECEIVED,
      data: error
    });
  }
};
