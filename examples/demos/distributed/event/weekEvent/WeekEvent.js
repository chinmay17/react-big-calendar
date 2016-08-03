import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';
import moment from 'moment';
import Constants from '../../dndConstants';

import {isAllDayEvent} from '../utils';

import './weekEvent.less';


const taskSource = {
  beginDrag( props ){
    return {};
  },
  canDrag( props ){
    console.log( props );
    return true;
  }
};

function collect( connect, monitor ) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging       : monitor.isDragging()
  }
}

class WeekEvent extends Component {

  _toRenderDuration( event, isAllDay ) {
    return !(isAllDay || event.task);
  }

  _renderDuration( event, isAllDay ) {
    const startDate = moment( event.start ),
      endDate = moment( event.end );
    return this._toRenderDuration( event, isAllDay ) ? <div className="dstWeekEvent__duration">
      { `${startDate.format( 'hh:mm' )} - ${endDate.format( 'hh:mm a' )}` }
    </div> : null;
  }

  _renderTitle( event ) {
    return <div className="dstWeekEvent__title">{event.title}</div>;
  }

  _renderDescription( event, isAllDay ) {
    return !isAllDay && <div className="dstWeekEvent__desc">{event.desc}</div>
  }

  render() {
    const {props} = this,
      { connectDragSource, isDragging, event } = props,
      isAllDay = isAllDayEvent( event );


    return connectDragSource(
      <div
        className={classNames("dstWeekEvent__container", {
        'dstWeekEvent__container--allDay': isAllDay,
        'dstWeekEvent__container--event': !isAllDay && event.event,
        'dstWeekEvent__container--task': event.task
        })}
        style={Object.assign({
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }, props.style)}>
        {this._renderDuration( event, isAllDay )}
        {this._renderTitle( event )}
        {this._renderDescription( event, isAllDay )}
      </div>
    )
  }
}

export default DragSource( Constants.ItemTypes.TASK, taskSource, collect )( WeekEvent );