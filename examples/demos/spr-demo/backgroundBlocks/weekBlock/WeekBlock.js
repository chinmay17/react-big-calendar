import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { DropTarget } from 'react-dnd';

import Constants from '../../dndConstants';

const blockTarget = {
  drop( props, monitor ) {
    console.log( 'onDrop', props.date );
  },
  canDrop( props ){
    return true;
  }
};

function collect( connect, monitor ) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver           : monitor.isOver()
  };
}

class WeekBlock extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired
  };

  onClick = () => {
    console.log( 'weekBlock onClick' );
  };

  render() {
    const { connectDropTarget, isOver, ...attrs } = this.props;
    return connectDropTarget(
      <div className="rbc-time-slot" onClick={this.onClick} style={{
            opacity: isOver ? 0.5 : 1,
            backgroundColor: isOver ? 'yellow' : 'transparent'
            }}>
      </div>
    );
  }
}

export default DropTarget( Constants.ItemTypes.TASK, blockTarget, collect )( WeekBlock );