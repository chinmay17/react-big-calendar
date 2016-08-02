import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import events from './distributed/events';

let Basic = React.createClass( {
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        toolbar={false}
      />
    )
  }
} )

export default Basic;
