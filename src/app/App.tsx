import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
//hot reload enabler
declare let module: any;

ReactDOM.render(<Hello compiler="TypeScript" framework="React" bundler="Webpack"/>, document.getElementById('root'));

if(module.hot) {
  module.hot.accept();
}