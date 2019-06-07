import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './footer.css';
import App from './App';
import Clock from './Clock';
 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('content'));

ReactDOM.render(<Clock />,document.getElementById('clock'));
 
serviceWorker.unregister();
