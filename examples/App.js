import React from 'react';
import Api from './Api';
import Intro from './Intro.md';
import cn from 'classnames';
import { render } from 'react-dom';

import localizer from 'react-big-calendar/localizers/moment';
import moment from 'moment';

localizer( moment );

import 'react-big-calendar/less/styles.less';
import './styles.less';
import './prism.less';

const Example = React.createClass( {
  getInitialState(){
    return {
      selected: 'spr'
    };
  },

  render() {
    let selected = this.state.selected;
    let Current = {
      basic     : require( './demos/basic' ),
      selectable: require( './demos/selectable' ),
      cultures  : require( './demos/cultures' ),
      popup     : require( './demos/popup' ),
      rendering : require( './demos/rendering' ),
      customView: require( './demos/customView' ),
      spr       : require( './demos/spr-demo/view' )
    }[ selected ];

    return (
      <div className='app'>
        <div className='dst-examples examples contain'>
          <div className="dummy"></div>
          <div className='dst-example example'>
            <Current className='dst-demo demo'/>
          </div>
        </div>
      </div>
    );
  },

  select( selected, e ){
    e.preventDefault();
    this.setState( { selected } )
  }
} );

render( <Example/>, document.getElementById( 'root' ) );
