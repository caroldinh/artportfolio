import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <Sidebar></Sidebar>
      <Gallery></Gallery>

    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">

      <p>caroline</p>
      <p>instagram: <a href="https://www.instagram.com/ladyheinous/" target="_blank">@ladyheinous</a></p>
      <p>mediums: acrylic / watercolor / digital</p>
      <p>tools: krita, heavypaint, huion</p>

    </div>
  );
}

function Gallery() {
  return (
    <div className="gallery">
      <Image source="images/swing.jpg"></Image>
      <Image source="images/preexistingconditions.jpg"></Image>
      <Image source="images/electricityandwater.jpg"></Image>
      <Image source="images/careergirls.jpg"></Image>
      <Image source="images/littlesibs.jpg"></Image>
      <Image source="images/roadtrip.jpg"></Image>
      <Image source="images/street.jpg"></Image>
      <Image source="images/gravity_glitch.jpg"></Image>
    </div>
  );
}

function Footer(){
  return(
    <div className="footer"></div>
  );
}

class Image extends React.Component{

  constructor(props) {
    super(props);
    this.state = { size: "image" };
    this.enlarge = this.enlarge.bind(this);
    this.close = this.close.bind(this);
    this.myRef = React.createRef()  
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

  render(){
    if(this.state.size == "image"){
      return (
        <div className={this.state.size} onClick={this.enlarge} ref={this.myRef}>
          <img src={this.props.source} loading="lazy"></img>
        </div>
      );
    } else{
      return (
          <div className={this.state.size} onClick={this.handleClick}>
            <a id="currentImage"></a>
            <img src={this.props.source} loading="lazy"></img>
            <div className="close" onClick={this.close}>X</div>
            <div className="center" ref={this.myRef}></div>
        </div>
      );
    }
    
  }
}

export default App;
