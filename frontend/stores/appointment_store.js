const Store = require('flux/utils').Store;
import AppDispatcher from '../dispatcher/dispatcher.js';
import AppointmentConstants from '../constants/appointment_constants.js';
const AppointmentStore = new Store(AppDispatcher);

let _currentAppointment = {
};
let _appointments = [];

function _resetAppointment (appointment) {
  _appointments.push(appointment);
  _currentAppointment = appointment;
}

function _resetAppointments (data) {
  _appointments = data;
}

function _removeAppointment (appointment) {
  if (_currentAppointment === appointment) {
    _currentAppointment = {};
  }
  _appointments.splice(_appointments.indexOf(appointment), 1);
}

AppointmentStore.currentAppointment = function () {
  return _currentAppointment;
};

AppointmentStore.allAppointments = function () {
  return _appointments;
};

AppointmentStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case AppointmentConstants.APPOINTMENT_RECEIVED:
      _resetAppointment(payload.data);
    break;
    case AppointmentConstants.APPOINTMENTS_RECEIVED:
      _resetAppointments(payload.data);
    break;
    case AppointmentConstants.APPOINTMENT_REMOVED:
      _removeAppointment(payload.data);
    break;
  }
  AppointmentStore.__emitChange();
};

module.exports = AppointmentStore;
