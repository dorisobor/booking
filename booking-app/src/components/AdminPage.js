import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';
import AdminCreateBooking from './subcomponents/AdminCreateBooking.js';
import AdminChangeViewBookings from './subcomponents/AdminChangeViewBookings.js';

class AdminPage extends Component {
  state = {
    adminCreateBookingClass: 'hide',
    adminViewUpdateBookingClass: 'show',
    allBookings: [],
  };

  componentDidMount() {
    this.fetchBookings();
  }

  handleAdminPage = page => {
    if (page === 'openCreateBooking') {
      this.setState({ adminCreateBookingClass: 'show' });
      this.setState({ adminViewUpdateBookingClass: 'hide' });
    } else {
      this.setState({ adminCreateBookingClass: 'hide' });
      this.setState({ adminViewUpdateBookingClass: 'show' });
    }
  };

  fetchBookings = () => {
    fetch(`api/booking`)
      .then(response => response.json())
      .then(allBookings => {
        this.setState({ allBookings });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="adminWrapper" className="container">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />
        <AdminCreateBooking />
        <AdminChangeViewBookings
          fetchAllBookings={this.fetchBookings}
          allBookings={this.state.allBookings}
          className={this.state.adminViewUpdateBookingClass}
        />
      </div>
    );
  }
}

export default AdminPage;
