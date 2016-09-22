import AppDispatcher from '../dispatcher/dispatcher.js';
import AppointmentConstants from '../constants/appointment_constants.js';
import AppointmentApi from '../utils/appointment_api.js';

module.exports = {

  fetchAppointments () {
    AppointmentApi.fetchAppointments(this.receiveAllAppointments);
  },

  fetchAppointment (id) {
    AppointmentApi.fetchAppointment(id,this.receiveAppointment);
  },

  createAppointment (data) {
    AppointmentApi.createAppointment(data,this.receiveAppointment);
  },

  updateAppointment (data) {
    AppointmentApi.updateAppointment(data,this.receiveAppointment);
  },

  deleteAppointment (id) {
    AppointmentApi.removeAppointment(id,this.removeAppointment);
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
  }
};
