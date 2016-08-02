import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import {isAllDayEvent} from '../utils';

import './weekEvent.less';

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
      {event} = props,
      isAllDay = isAllDayEvent( event );
    return (
      <div
        className={classNames("dstWeekEvent__container", {
        'dstWeekEvent__container--allDay': isAllDay,
        'dstWeekEvent__container--event': !isAllDay && event.event,
        'dstWeekEvent__container--task': event.task
        })}
        style={props.style}>
        {this._renderDuration( event, isAllDay )}
        {this._renderTitle( event )}
        {this._renderDescription( event, isAllDay )}
      </div>
    )
  }
}

export default WeekEvent;