import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import './monthEvent.less';

class MonthEvent extends Component {

  _renderTitle( event ) {
    return <div className="dstMonthEvent__title">{event.title}</div>;
  }

  render() {
    const {props} = this,
      {event} = props;
    return (
      <div
        className={classNames("dstMonthEvent__container", {
        'dstMonthEvent__container--task': event.task,
        'dstMonthEvent__container--event': event.event
        })}
        style={props.style}>
        {this._renderTitle( event )}
      </div>
    )
  }
}

export default MonthEvent;