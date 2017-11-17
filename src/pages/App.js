import React from 'react' 

import FetchDemo from './FetchDemo'

export default class App extends React.Component {
    render(){
        return (
        	  <div>
				<h1 className="title">Reddit!</h1>
				{this.props.children}
        	</div>
        	);
    }
} 