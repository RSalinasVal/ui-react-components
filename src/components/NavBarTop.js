import React, { Component } from 'react'
import '../styles/NavBarTop.css'

import logo from '../images/icowrsv.png'
class NavBarTop extends Component{

burgerToggle(){
  let linksEl = document.querySelector('.narrowLinks');
  // if (linksEl.style.display === 'block') {
    // linksEl.style.display = 'none';
  if (linksEl.className === 'narrowLinks SlideDown') {
    linksEl.className = "narrowLinks SlideNone";

  } else {
    // linksEl.style.display = 'block';
    linksEl.className = "narrowLinks SlideDown";

  }
}
  render(){
    return(
      <nav>
            <div className="logo">
              <a><img src={logo}/></a>
            </div>
    				<div className="navWide">
     					<div className="wideDiv">
                <a href="#" onClick={this.burgerToggle}>SOBRE MI</a>
                <a href="#" onClick={this.burgerToggle}>HABILIDADES</a>
    						<a href="#" onClick={this.burgerToggle}>SERVICIOS</a>
    						<a href="#" onClick={this.burgerToggle}>FLUJO DE TRABAJO</a>
    						<a href="#" onClick={this.burgerToggle}>CONTACTO</a>    					
                </div>
     				</div>
    				<div className="navNarrow">
    					<div className="NavInputBar">
                <i className="fas fa-bars fa-2x" onClick={this.burgerToggle}></i>
              </div>
    					<div className="narrowLinks SlideNone">
                <a href="#" onClick={this.burgerToggle}>SOBRE MI</a>
                <a href="#" onClick={this.burgerToggle}>HABILIDADES</a>
    						<a href="#" onClick={this.burgerToggle}>SERVICIOS</a>
    						<a href="#" onClick={this.burgerToggle}>FLUJO DE TRABAJO</a>
    						<a href="#" onClick={this.burgerToggle}>CONTACTO</a>
    					</div>
    				</div>
    			</nav>
    );
  }
}

export default NavBarTop;
