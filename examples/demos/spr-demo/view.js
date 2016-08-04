import React, { PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BigCalendar from 'react-big-calendar';
import MonthEvent from './event/monthEvent';
import WeekEvent from './event/weekEvent';

import MonthBgCell from './backgroundBlocks/monthBlock';
import WeekBgCell from './backgroundBlocks/weekBlock';

import events from './events';
import './spr-demo.less';

function timeRangeFormat( _ref2, culture, local ) {
  var start = _ref2.start;
  var end = _ref2.end;
  return local.format( start, 'h:mma', culture ) + ' — ' + local.format( end, 'h:mma', culture );
}


const FORMATS = {
    weekHeaderFormat     : 'ddd DD',
    dayFormat            : 'ddd DD',
    timeGutterFormat     : 'h a',
    agendaTimeRangeFormat: timeRangeFormat,
    agendaTimeFormat     : 'hh:mm a'
  },
  COMPONENTS = {
    month: {
      event : MonthEvent,
      bgCell: MonthBgCell
    },
    week : {
      event : WeekEvent,
      bgCell: WeekBgCell
    }
  };

let Distributed = React.createClass( {
  getInitialState(){
    return {
      date: new Date( 2016, 7, 8 ),
      view: 'week'
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
        defaultDate={new Date(2016, 7, 8)}
        defaultView="week"
        view={this.state.view}
        views={{ week: true, month: true, agenda: true /*() => <div>Agenda View</div> */}}
        formats={FORMATS}
        components={COMPONENTS}
      />
    )
  }
} );

export default DragDropContext( HTML5Backend )( Distributed );
