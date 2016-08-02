import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import MonthEvent from './event/monthEvent';
import WeekEvent from './event/weekEvent';

import events from './events';
import './distributed.less';


const FORMATS = {
    weekHeaderFormat: 'ddd DD',
    dayFormat       : 'ddd DD',
    timeGutterFormat: 'h a'
  },
  COMPONENTS = {
    month: {
      event: MonthEvent
    },
    week : {
      event: WeekEvent
    }
  };

let Basic = React.createClass( {
  getInitialState(){
    return {
      date: new Date( 2016, 7, 0 ),
      view: 'month'
    }
  },
  onNavigate( date ){
    this.setState( { date } )
  },
  onView( view ){
    console.log( view );
    if ( view !== 'day' ) {
      this.setState( { view } )
    }
  },
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        onNavigate={this.onNavigate}
        onView={this.onView}
        toolbar={false}
        defaultView="month"
        view={this.state.view}
        formats={FORMATS}
        components={COMPONENTS}
      />
    )
  }
} );

export default Basic;
