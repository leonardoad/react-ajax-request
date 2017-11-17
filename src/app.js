import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

 

import App from './pages/App' 
import FetchDemo from './pages/FetchDemo' 

ReactDOM.render(( 
		<Router history={browserHistory}>
			<Route path="/" component={App} >
				<Route path=":subreddit" component={FetchDemo} />
				</Route>
		</Router>
		),
        document.querySelector('[data-js="app"]')
        )

