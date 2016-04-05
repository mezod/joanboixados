import React from 'react';
import * as Components from 'components';

export default class App extends React.Component {
  componentWillMount() {

  }
  render() {
    const {children} = this.props;

    return (
      <div className="app">
        <Components.Menu/>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};
