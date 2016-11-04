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
  reload() {
    // fakes reload of current route
    const event = new Event('reset');
    dispatchEvent(event);
  }
  render() {
    return (
			<div className="menu">
        <div className="title"></div>
        <ul className="galleries">
        { this.state.galleries.map((obj) => {
          return (<li key={obj}><Link activeClassName="active"
                                      onClick={this.reload.bind(this)}
                                     to={'/' + obj}>{obj}</Link></li>);
        }) }
        </ul>
				<ul className="static">
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="http://blog.joanboixados.com"
                 target="_blank">Blog</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="mailto:mezood@gmail.com">Say hi!</a></li>
        </ul>
        <ul className="social">
          <li><a href="http://www.listlogs.com/mezod"
                 target="_blank">Listlogs</a></li>
          <li><a href="http://www.twitter.com/mezood"
                 target="_blank">Twitter</a></li>
          <li><a href="https://ca.wikipedia.org/wiki/Usuari:Mezod"
                 target="_blank">Wikipedia</a></li>
          <li><a href="https://www.linkedin.com/in/joanboixados"
                 target="_blank">Linkedin</a></li>
          <li><a href="https://github.com/mezod"
                 target="_blank">Github</a></li>
          <li><a href="https://www.flickr.com/photos/56589764@N02/"
                target="_blank">Flickr</a></li>
        </ul>
			</div>
		);
  }
}

