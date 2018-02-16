import React, { Component } from 'react'
import '../styles/Slide.css'
class Slide extends Component{

constructor(){
  super();
  this.state={
    links:[
       {
        imageLink:"https://www.hospitalitydesign.com/wp-content/uploads/The-Pearl1.png"
      },
       {
        imageLink:"https://www.hospitalitydesign.com/wp-content/uploads/The-Pearl2.png"
      },
       {
        imageLink:"https://www.hospitalitydesign.com/wp-content/uploads/The-Pearl3.png"
      }
    ],
    operator:"PLUS",
    pointer:0
  }
  this.updateList = this.updateList.bind(this);
}

updateList(e){
    let new_link = e.target.value;
    let old_list = this.state.links;
    old_list.push({imageLink:new_link});
    this.setState({links:old_list})
    return console.log(old_list);
}

componentDidMount(){
  var self = this;
  this.interval = setInterval(()=>{
    var pointer = self.state.pointer,operator = self.state.operator;
    if(pointer === self.state.links.length-1){
      operator = "MINUS"
    }
    else if(pointer <= 0){
      operator = "PLUS"
    }
    operator === "PLUS"? pointer++:pointer--;

    return self.setState({pointer:pointer,operator:operator})

 },4000)
}

myInstragram(){
  window.location.href = "https://www.instagram.com/rsalinasval/";

}
  render(){
    let pointed_image = this.state.links[this.state.pointer];
    let image_style = { backgroundImage: 'url(' + pointed_image.imageLink + ')'};
    return(
      <div className="slide-content">
        <input type="text" className="slide-text" placeholder="add link" onChange={this.updateList}/>

        <div style={image_style} className="slide-image">
          
          <div className="social-instagram" onClick={this.myInstragram}></div>
        </div>
      </div>
    );
  }
}

export default Slide;
