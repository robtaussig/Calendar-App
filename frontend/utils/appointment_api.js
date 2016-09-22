module.exports = {

  createAppointment (data, successCB, errorCB) {
    $.ajax({
      url: '/appointments',
      type: 'POST',
      data: {appointment: data},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        errorCB(resp);
      }
    });
  },

  fetchAppointment (id, successCB, errorCB) {
    $.ajax({
      url: 'appointments/' + id,
      data: {params: id},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        errorCB(resp);
      }
    });
  },

  updateAppointment (data, appointment, successCB, errorCB) {
    let id = appointment.id;
    $.ajax({
      url: '/appointments/' + id,
      type: 'PATCH',
      data: {appointment: data},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        errorCB(resp);
      }
    });
  },

  fetchAppointments (successCB, errorCB) {
    $.ajax({
      url: '/appointments/',
      type: 'GET',
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        errorCB(resp);
      }
    });
  },

  removeAppointment (data, successCB, errorCB) {
    $.ajax({
      url: '/appointments/' + data.id,
      type: 'DELETE',
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        errorCB(resp);
      }
    });
  }
};
