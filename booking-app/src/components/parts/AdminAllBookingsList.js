import React from 'react';
import Button from '../parts/Button.js';

function AdminAllBookingsList(props) {
  if (props.allBookings) {
    return (
      <ul id="allBookingsList" className="container">
        {props.allBookings.map((booking, i) => {
          if (
            booking.firstname
              .toLowerCase()
              .includes(props.customersNameFilter) ||
            booking.lastname.toLowerCase().includes(props.customersNameFilter)
          ) {
            if (booking.date.includes(props.customersDateFilter)) {
              return (
                <li key={i} className="row">
                  <div className="customersName col-md-3">
                    {booking.firstname} {booking.lastname}
                  </div>
                  <div className="customersPhone col-md-2">{booking.phone}</div>
                  <div className="customersEmail col-md-3">{booking.email}</div>
                  <div className="customersBookedDate col-md-1">
                    {booking.num_of_guests}
                  </div>
                  <div className="customersBookedDate col-md-2">
                    {booking.time} | {booking.date}
                  </div>
                  <div className="customersButton col-md-1">
                    <Button
                      value={booking.bookingId}
                      onClick={props.buttonUpdate}
                      innerText={'Update'}
                    />
                    <Button
                      value={booking.bookingId}
                      onClick={props.buttonDelete}
                      innerText={'Delete'}
                    />
                  </div>
                </li>
              );
            }
          }
        })}
      </ul>
    );
  } else {
    return (
      <div id="noResultFound" className="row">
        <p className="col-md-12">There are no bookings yet..</p>
      </div>
    );
  }
}

export default AdminAllBookingsList;
