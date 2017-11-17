import React from 'react'
import axios from 'axios'
import {Link, IndexLink} from 'react-router'

export default class FetchDemo extends React.Component {
   constructor(props) {
	    super(props);

	    this.state = {
	      posts: []
	    };
	}
	componentDidMount() {
	    axios.get(`http://www.reddit.com/r/${this.props.params.subreddit}.json`)
	      .then(res => {
	        const posts = res.data.data.children.map(obj => obj.data);
	        console.log(res)
	        this.setState({ posts });
	      });
	}
    render(){
        return (
			<div>
				<h1 className="title">Data extrated from {`/r/${this.props.params.subreddit}`}!!</h1>
		        <ul>
		          {this.state.posts.map(function (post){
					var link = `http://www.reddit.com${post.permalink}`
					return(<li key={post.id}>
				             <Link to={link} className="link" target="_blank" >{post.title} </Link> </li>
				             )
					}
		          )}
		        </ul>
		    </div>
        	);
    }
} 