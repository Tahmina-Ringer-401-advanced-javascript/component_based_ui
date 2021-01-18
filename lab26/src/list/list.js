import React from 'react';
import When from '../if/if';

export default props => {
  <React.Fragment>
    <ul aria-label="list" className="list">{props.children}</ul>
    <When condition={props.children.length > 5}>
      <div></div>
    </When>
  </React.Fragment>
};
