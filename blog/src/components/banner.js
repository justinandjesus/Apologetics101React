import React, {Component} from 'react';

class Banner extends Component{
	render(){
		return(
			<div className="col-md-12 banner">
	            <h3>Home / {this.props.name}</h3>
	        </div>
		)
	}
}

export default Banner;