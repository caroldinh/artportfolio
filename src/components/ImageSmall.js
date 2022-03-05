import React from 'react';
import Image from './Image';

class ImageSmall extends Image{

  constructor(props) {
    super(props);
    this.setState({size: "imagesmall"})
  }

  enlarge(e) {
    e.preventDefault();
    this.setState({size: "imagesmall-wide"})
    this.myRef.current.scrollIntoView();
  }

  close(e){
    e.preventDefault();
    this.setState({size: "imagesmall"})
  }
  
  render(){
    return(super.render());
  }
}

export default ImageSmall;