import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import Constants from './Constants';

const eventSource = {
  beginDrag( props ){
    return {};
  }
};

function collect( connect, monitor ) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging       : monitor.isDragging()
  }
}

class Event extends Component {
  render() {
    const { connectDragSource, isDragging, event } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        cursor: 'move'
      }}>
        <span>
          <strong>{event.title}</strong>
          { event.desc && (':  ' + event.desc)}
        </span>
      </div>
    );
  }
}

Event.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging       : PropTypes.bool.isRequired
};

export default DragSource( Constants.ItemTypes.EVENT, eventSource, collect )( Event )