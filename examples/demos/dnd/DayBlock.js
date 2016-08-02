import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { DropTarget } from 'react-dnd';

import Constants from './Constants';

const labelTarget = {
  drop( props, monitor ) {
    console.log( 'onDrop', props );
    console.log( 'monitor.getItem()', monitor.getItem() );
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

class EventLabel extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired
  };

  render() {
    const { connectDropTarget, isOver, ...attrs } = this.props;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        {isOver &&
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}/>
        }
      </div>
    );
  }
}

export default DropTarget( Constants.ItemTypes.EVENT, labelTarget, collect )( EventLabel );