const AppDispatcher = require('../dispatcher/dispatcher.js');
const AppointmentConstants = require('../constants/move_constants.js');
const AppointmentApi = require('../utils/appointment_api.js');

module.exports = {

  fetchAppointments () {
    AppointmentApi.fetchAppointments(this.receiveAppointments);
  },

  fetchAppointment (id) {
    AppointmentApi.fetchAppointment(this.receiveAppointment);
  },

  createAppointment (data) {
    AppointmentApi.createAppointment(this.receiveAppointment);
  },

  deleteAppointment (id) {
    AppointmentApi.removeAppointment(this.removeAppointment);
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
