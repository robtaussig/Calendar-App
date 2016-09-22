module.exports = {

  createAppointment (data, successCB) {
    $.ajax({
      url: '/appointments',
      type: 'POST',
      data: {appointment: data},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  fetchAppointment (id, successCB) {
    $.ajax({
      url: '/appointments/' + id,
      data: {params: id},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  updateAppointment (data, successCB) {
    $.ajax({
      url: '/appointments',
      type: 'PATCH',
      data: {appointment: data},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  fetchAppointments (successCB) {
    $.ajax({
      url: '/appointments/',
      type: 'GET',
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  },

  removeAppointment (id, successCB) {
    $.ajax({
      url: '/appointments/' + id,
      type: 'DELETE',
      data: {params: id},
      success: (resp) => {
        successCB(resp);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  }
};
