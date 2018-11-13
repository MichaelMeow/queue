import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketListArray.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          formattedWaitTime={ticket.formattedWaitTime}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketListArray: PropTypes.array
};

export default TicketList;
