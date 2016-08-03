import React, { PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BigCalendar from 'react-big-calendar';
import MonthEvent from './event/monthEvent';
import WeekEvent from './event/weekEvent';

import MonthBgCell from './backgroundBlocks/monthBlock';
import WeekBgCell from './backgroundBlocks/weekBlock';

import events from './events';
import './distributed.less';


const FORMATS = {
    weekHeaderFormat: 'ddd DD',
    dayFormat       : 'ddd DD',
    timeGutterFormat: 'h a'
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
        toolbar={false}
        defaultDate={new Date(2016, 7, 8)}
        defaultView="week"
        view={this.state.view}
        formats={FORMATS}
        components={COMPONENTS}
      />
    )
  }
} );

export default DragDropContext( HTML5Backend )( Distributed );
