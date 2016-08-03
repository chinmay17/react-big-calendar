import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import classNames from 'classnames';
import moment from 'moment';
import Constants from '../../dndConstants';

import './monthEvent.less';

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

class MonthEvent extends Component {

  onClick = () => {
    console.log( 'onClick' );
  };

  _renderTitle( event ) {
    return <div className="dstMonthEvent__title">{event.title}</div>;
  }

  render() {
    const {props} = this,
      { connectDragSource, isDragging, event } = props;

    return connectDragSource(
      <div
        className={classNames("dstMonthEvent__container", {
        'dstMonthEvent__container--task': event.task,
        'dstMonthEvent__container--event': event.event
        })}
        style={Object.assign({
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }, props.style)} onClick={this.onClick}>
        {this._renderTitle( event )}
      </div>
    )
  }
}

MonthEvent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging       : PropTypes.bool.isRequired
};

export default DragSource( Constants.ItemTypes.TASK, taskSource, collect )( MonthEvent );