import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
// import {Nav}

class Header extends Component{

	render(){
		return(
		<header>
	            <div className="navbar navbar-inverse">
	                <div className="container">
	                    <div className="navbar-header">
	                    
	                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
	                        
	                        <div className="ham">
	                        <span className="burg"></span>
	                        <span className="burg"></span>
	                        <span className="burg"></span>
	                        <span className="burg"></span>
	                        <span className="burg"></span>
	                        <span className="burg"></span>
	                        </div>
	                        </button>
	                        
	                        <Link to="/" className="navbar-brand">Apologetics 101</Link>
	                    
	                    </div>

	                    <div className="collapse navbar-collapse navHeaderCollapse ">
	                        <ul className="nav navbar-nav navbar-right">

	                            <li className="current hoverok"><Link to="/">Home</Link></li>

	                            <li className="dropdown hoverok">
	                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">Blog <b className="caret"></b></Link>
	                                <ul className="dropdown-menu">
	                                    <li className="dropdown-header"><Link to="/arguments"><span className="fa fa-caret-down"></span> Arguments for the Existence of God</Link></li>
	                                        <li><Link to="/cosmos" className="submenu">Cosmological Argument</Link></li>
	                                        <li><Link to="/moral" className="submenu">Moral Argument</Link></li>
	                                    <li className="divider"></li>
	                                    <li className="dropdown-header"><Link to="/"><span className="fa fa-caret-down"></span> Exclusivity of Christianity</Link></li>
	                                        <li><Link to="resurrection" className="submenu">The Resurrection Argument</Link></li>
	                                    <li className="divider"></li>
	                                    <li className="dropdown-header"><Link to="/">Objections and Doubts</Link></li>
	                                </ul>
	                            </li>

	                            <li className="hoverok"><Link to="/about">About</Link></li>

	                            <li className="hoverok"><Link to="/contact">Contact</Link></li>

	                        </ul>

	                    </div>
	                </div>
	            </div>

	    </header>

		)
	}
}

export default Header;