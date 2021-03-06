import React from 'react';
import Datepicker from '../Datepicker';

function BookingDetails(props) {
  return (
    <div id="bookingDetailsContent" className="col-12">
      <div className="col-12">
        <Datepicker
          getDate={props.getDate}
          setTime={props.setTime}
          setAmountOfGuests={props.setAmountOfGuests}
        />
      </div>
    </div>
  );
}

export default BookingDetails;
