const Store = require('flux/utils').Store;
import AppDispatcher from '../dispatcher/dispatcher.js';
import AppointmentConstants from '../constants/appointment_constants.js';
const ErrorStore = new Store(AppDispatcher);

let _currentError = "";

function _resetError (error) {
  _currentError = error;
}

ErrorStore.currentError = function () {
  return _currentError;
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case AppointmentConstants.ERROR_RECEIVED:
      _resetError(payload.data);
      ErrorStore.__emitChange();
    break;
  }
};

module.exports = ErrorStore;
