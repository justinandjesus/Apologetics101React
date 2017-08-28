import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{
	render(){
		return(
			<section className="index">
				
				<section id="showcase">
			        <div className="container">
			            <h1 id="haha">Apologetics 101</h1>
			            <p className="align-middle">Defend the faith once delivered unto the saints (Jude 3)</p>
			        </div>
			    </section>
			    <div id="sec1">
			        <div className="container-fluid">
			            <h1>Does <span className="high">God</span> Exist?</h1>
			            <div className="col-md-12 innersec1">
			                <div className="col-md-12"><div><hr className="rule"/></div></div>
			                <p className="col-md-4 text-center wow fadeInRight" data-wow-duration="1.5s"><i className="glyphicon glyphicon-fire"></i> <br /> Has Science disproven God? </p>
			                <p className="col-md-4 text-center wow fadeIn" data-wow-duration="2s"><i className="glyphicon glyphicon-sunglasses"></i> <br /> Is there any evidence for the existence of God? </p>
			                <p className="col-md-4 text-center wow fadeInLeft" data-wow-duration="1.5s"><i className="glyphicon glyphicon-user"></i> <br /> Did God create man or <br />did man create God?</p>
			                <Link to="/arguments" className="btn btn-primary btn-lg">Learn More</Link>
			            </div>

			        </div>
			    </div>


			    <div className="clearfix"></div>


			    <div id="outer">
			    	<div className="inner">
			    		<h1>The Four <span className="high">Fundamental</span> Questions of Life</h1>
			            <div className="col-md-12 innersec">
			        		<div className="col-md-6 text-center Q"><p><i className="glyphicon glyphicon-globe"></i>  Origin: Where did I come from?</p></div>
			                <div className="col-md-6 text-center Q"><p><i className="glyphicon glyphicon-road"></i>  Meaning: Is there any objective meaning to life?</p></div>
			                <div className="col-md-2 col-md-offset-2 text-center line"><hr/></div>
			                <div className="col-md-2 col-md-offset-4 text-center line"><hr/></div>
			                <div className="col-md-6 text-center Q"><p><i className="glyphicon glyphicon-ok"></i>  Morality: Is there any objective right and wrong?</p></div>
			                <div className="col-md-6 text-center Q"><p><i className="fa fa-id-card-o"></i>  Destiny: What happens when I die?</p></div>
			            </div>
			        </div>
			    </div>
			<div className="clearfix"></div>
			    <section id="sec2">
			        <div className="container">
			            <h1>Did <span className="high">Jesus</span> really rise from the <span className="high">dead</span>?</h1>
			            <div className="col-md-12 innersec2">
			                <div className="col-md-12"><div><hr className="rule" /></div></div>
			                <p className="col-md-4 text-center wow zoomInLeft" data-wow-duration="1s"><i className="glyphicon glyphicon-question-sign"></i> <br/> In this modern scientific age,<br/> are Miracles possible? </p>
			                <p className="col-md-4 text-center wow zoomIn" data-wow-duration="1.5s"><i className="glyphicon glyphicon-trash"></i> <br/> Is the Resurrection of Jesus <br/> just a recycled pagan myth? </p>
			                <p className="col-md-4 text-center wow zoomInRight" data-wow-duration="1s"><i className="glyphicon glyphicon-refresh"></i> <br/> What difference does it make <br/> if he did rise from the dead?</p>
			                <a href="resurrection.html" className="btn btn-primary btn-lg">Learn More</a>
			            </div>

			        </div>
			    </section>






			</section>
		)
	}
}

export default Home;