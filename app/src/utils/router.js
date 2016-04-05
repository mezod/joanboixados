import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import * as Pages from 'pages';
import App from 'containers/App';
import history from 'utils/history';

export default function render() {
  ReactDOM.render(
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Pages.Gallery} />
          <Route path="projects" component={Pages.Projects} />
          <Route path="about" component={Pages.About} />
          <Route path=":gallery" component={Pages.Gallery} />
        </Route>
      </Router>,
  document.getElementById('app')
  );
}
