import React from 'react';
import {Link} from 'react-router';
import {fetchGalleries} from 'requests/requests';
/* import * as Components from 'components'; */

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {galleries: []};
  }

  componentWillMount() {
    fetchGalleries().then(res => {
      this.setState({galleries: res});
      return res;
    });
  }
  render() {
    return (
			<div className="menu">
        <ul>
        { this.state.galleries.map((obj) => {
          return <li key={obj}><Link to={obj}>{obj}</Link></li>;
        }) }
        </ul>
				<ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
			</div>
		);
  }
}

