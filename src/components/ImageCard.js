import React from 'react'
import '../styles/ImageCard.css'

class ImageCard extends React.Component{
    
render(){
    return(
        <div className="ImageCard">

        <h1>Image Card</h1>
        
        <div className="i-card">
            <img className="i-card-image" src="https://instagram.faep3-1.fna.fbcdn.net/vp/2ee17179a51b6d53bf4c5e6462cdd386/5B20E97C/t51.2885-15/e35/13285255_1728257740797097_986731447_n.jpg" alt="img" />
            <div className="i-card-container">
                <h2 className="i-card-title">Dock of Ilo</h2>
                <p className="i-card-content">Located in the south of Peru in the department of Moquegua. its beautiful and grandiose ...</p>
            </div>
            <div className="i-card-action">
                <button>Share</button>
                <button>Explore</button>
            </div>
        </div>
  

        </div>
     );
}
}

export default ImageCard;

