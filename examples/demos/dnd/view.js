import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import MyEvent from './Event';
import DayBlock from './DayBlock';

const eventList = [ {
    'title': 'Long Event',
    'start': new Date( 2016, 7, 7 ),
    'end'  : new Date( 2016, 7, 10 )
  } ],
  components = {
    event : MyEvent,
    bgCell: DayBlock
  };

let Basic = React.createClass( {
  getInitialState(){
    return {
      date: new Date()
    }
  },
  onNavigate( date ){
    this.setState( { date } )
  },
  onView( view ){
    this.setState( { view } )
  },
  render(){
    return (
      <BigCalendar
        {...this.props}
        defaultDate={new Date(2016, 7, 1)}
        components={components}
        events={eventList}
        onNavigate={this.onNavigate}
      />
    )
  }
} );

export default Basic;
