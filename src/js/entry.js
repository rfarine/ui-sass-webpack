import { default as React } from 'react';
import { default as Root } from '../../components/root';
import { Router, Route, match, RoutingContext } from 'react-router';
import { default as ReactDOM } from 'react-dom/server';
import { render as renderDOM } from 'react-dom';
import { Provider } from 'react-redux';

const routes = ([
  <Route path="/" component={Root} />,
]);

if (typeof document !== 'undefined') {
  renderDOM(
    <Provider store={''}>
      <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('content')
  );
}

const template = require('../../layout.jade');

module.exports = function render(locals, callback) {
  match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
    const html = ReactDOM.renderToString(
      <Provider store={''}>
        <RoutingContext {...renderProps} />
      </Provider>
    );

    callback(null, template(html));
  });
};
