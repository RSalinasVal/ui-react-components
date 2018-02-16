import React, { Component } from 'react'
import '../styles/NavBarLeft.css'
import logo from '../images/icorsv.png'

import { Link } from "react-router-dom";

 class NavBarLeft extends Component{

  burgerToggle(){
     let linkDrawer = document.querySelector('.drawer');
 
    if (linkDrawer.className === 'drawer off-toggle') {
        linkDrawer.className = "drawer on-toggle";
    }else{
        linkDrawer.className = "drawer off-toggle";
         
    }
   
  }
 
  render(){
    return( 

    <div className="my-navbarleft">

        <div className="stat-nav">
 			<div className="stat-nav-wrapper">
					<div className="burger" onClick={this.burgerToggle}>
                        <div className="br-button">
                            <span><i className="fas fa-bars"></i></span>
                        </div>
                    </div>
                     
			</div>
	    </div>

        <div className="drawer">
		    <div className="canvas">
			    <div className="account">
				    <img className="photo-img" src={logo} alt="logo"/>
				    <span className="user-name">Raúl Salinas</span>
                    <i className="fas fa-angle-left arrow-left" onClick={this.burgerToggle}></i>
	    		</div>


                <div className="block-nav">
                     <div className="nav-link active">
                        <div className="nav-title"><Link to="/slide">Slide</Link></div>
                    </div>
    
			    </div>

            </div>
        </div>


    </div>
    );
  }
}

export default NavBarLeft;
