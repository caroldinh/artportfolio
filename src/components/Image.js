import React from 'react';

class Image extends React.Component{

  constructor(props) {
    super(props);
    let cols = "expanded";
    if(this.props.columns){
      cols="expanded split-column"
    }
    this.state = { size: "image", class:cols };
    this.enlarge = this.enlarge.bind(this);
    this.close = this.close.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.myRef = React.createRef();
    console.log(this.props.description, this.props.light);
  }

  enlarge(e) {
    e.preventDefault();
    this.setState({size: "image-wide"})
    this.myRef.current.scrollIntoView();
  }

  close(e){
    e.preventDefault();
    this.setState({size: "image"})
  }

  setDescription() {
    return {__html: this.props.description};
  }
  

  render(){
    if(this.state.size === "image" || this.state.size === "imagesmall"){
      return (
          <div className={this.state.size} onClick={this.enlarge} ref={this.myRef}>
              <img className="cover" src={this.props.source} 
              alt={this.props.alt} loading="lazy"></img>
              <div className="gallery-title">{this.props.title}</div>
          </div>
      );
    } else{
      return (
          <div className={this.state.size} onClick={this.handleClick}>
            <a id="currentImage"></a>
            <img className={this.state.class} src={this.props.source} loading="lazy" alt={this.props.alt}></img>
            {this.props.children}
            <p className="img-description" dangerouslySetInnerHTML={this.setDescription()}></p>
            <img src="images/X.svg" className="close" onClick={this.close}></img>
            <div className="center" ref={this.myRef}></div>
        </div>
      );
    }
    
  }
}

export default Image;