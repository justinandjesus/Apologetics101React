
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Arguments extends Component{
	render(){
		return(
			<section className="arguments">
				<section>
				    <div className="container-fluid">
				        
				        <div className="col-md-12 text-center">
				            <h1>Are there any good reasons to believe that God exists?</h1>
				        </div>
				        
				        <div className="col-md-12 addArgumentsHere">
				            
				            
				            
				
				            <div className="col-md-4">
				                <div className="argument">
				                    <img className="img img-responsive" src="http://lorempixel.com/318/300/abstract" alt="" />
				                    
				                    <div className="content">
				                        <h3 className="text-center" >Moral Argument</h3>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos.</p>    
				                    </div>
				                    
				                </div>
				            </div>
				            
				            <div className="col-md-4">
				                <div className="argument">
				                    <img className="img img-responsive" src="http://lorempixel.com/318/300/abstract" alt="" />
				                    
				                    <div className="content">
				                        <h3 className="text-center" >Moral Argument</h3>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos.</p>    
				                    </div>
				                                       
				                </div>
				            </div>
				
				            
				        </div>
				    </div>
				</section>

				<section className="contactSection d-flex align-items-center">
				    <div className="container-fluid">
				        <div className="col-md-12 text-center">
				            <h3>Do you have an objection to any of these arguments or a doubt regarding one of the premises? <br/>
				            Do get in touch with us!</h3> <Link className="btn btn-primary" to="/contact">Click here</Link>
				        </div>
				    </div>
				</section>
			</section>
		)
	}
}

export default Arguments;