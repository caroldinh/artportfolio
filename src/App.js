import './App.css';
import React from 'react';
import Carbonbadge from "react-carbonbadge"

let section = "DigitalArt";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: "Painting",
      digital: "navlink",
      painting: "navlink selected",
      design: "navlink",
      commissions: "navlink"
    };
    this.digital = this.digital.bind(this);
    this.painting = this.painting.bind(this);
    this.design = this.design.bind(this);
    this.commission = this.commission.bind(this);
  }
  digital(){
    this.setState({
      page: "DigitalArt",
      digital: "navlink selected",
      painting: "navlink",
      design: "navlink",
      commissions: "navlink"
    });
  }
  painting(){
    this.setState({
      page: "Painting",
      digital: "navlink",
      painting: "navlink selected",
      design: "navlink",
      commissions: "navlink"
    });
  }
  design(){
    this.setState({
      page: "GraphicDesign",
      digital: "navlink",
      painting: "navlink",
      design: "navlink selected",
      commissions: "navlink"
    });
  }
  commission(){
    this.setState({
      page: "Commissions",
      digital: "navlink",
      painting: "navlink",
      design: "navlink",
      commissions: "navlink selected"
    });
  }
  render(){
    return(
      <div>
        <div className="sidebar">

          <p>caroline dinh</p>
          <p>mediums: acrylic / watercolor / digital</p>
          <p>tools: krita, heavypaint, huion</p>
          <a className={this.state.digital} onClick={this.digital}>Digital Art</a><br></br>
          <a className={this.state.painting} onClick={this.painting}>Painting</a><br></br>
          <a className={this.state.design} onClick={this.design}>Graphic Design</a><br></br>
          <a className={this.state.commissions} onClick={this.commission}>Commission Me</a><br></br>
        </div>
        <Gallery page={this.state.page}></Gallery>
        <Footer></Footer>
      </div>
    )
  }
}


class Gallery extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.page == "DigitalArt"){
      return (
        <div className="gallery" id="digitalart">
          <Image source="images/swing.jpg" title="Swing"
              description="Painted in Krita and featured in Paper Crane Journal's inaugural issue 
              <a href='https://en.calameo.com/books/006629503d10b805aa97b' target='_blank'>here.</a>">
          </Image>
          <Image source="images/roadtrip.jpg" title="Road Trip with Dreamers"
            description="Painted in Krita featuring characters from my old novel work-in-progress and submitted as part of my 
            AP Studio Art: 2D Design portfolio."></Image>
          <Image source="images/street.jpg" title="Untitled"
            description="Sketched in HeavyPaint."></Image>
        </div>
      );
    } else if(this.props.page == "Painting"){
      return (
        <div className="gallery">
          <Image source="images/conditions.JPG" title="Pre-Existing Conditions"
            description="Acrylic on canvas (18 x 24 in.). Forthcoming in the Montpelier Artists on the Rise juried exhibition (2021)."></Image>
          <Image source="images/electricityandwater.jpg" title="Electricity & Water Don't Mix"
            description="Painted with watercolor with touches of ink and oil pastel. This piece was submitted as part of my AP 
            Studio Art: 2D Design portfolio and appeared in the first issue of The Agapanthus Collective <a href='https://www.agapanthuscollective.com/biannual-issue-1/' 
            target='_blank'>here.</a>"></Image>
          <Image source="images/girlsnight.jpg" title="Girls' Night"
            description="Oil on canvas (24 x 18 in.). This piece appeared in the first issue of The Agapanthus Collective <a href='https://www.agapanthuscollective.com/biannual-issue-1/' 
            target='_blank'>here.</a>"></Image>
          <Image source="images/gravity_glitch.JPG" title="Gravity Glitch"
            description="Gouache on watercolor paper (9 x 12 in.). This piece was submitted as part of my AP Studio Art: 2D Design portfolio."></Image>
          <Image source="images/concert_mistress.JPG" title="Concert Mistress"
            description="Oil on canvas board (12 x 15 in.). This piece was featured on the cover of The Wondrous Real magazine's <a href='https://www.wondrousrealmag.com/issue-2'
            target='_blank'>second issue.</a>"></Image>
          <Image source="images/careergirls.JPG" title="Career Girls"
            description="Acrylic on canvas (24 x 18 in.). This piece was featured on the cover of Southchild Lit's first issue, <a href='https://southchildlit.wixsite.com/website-2'
            target='_blank'>GLITCH IN THE SYSTEM.</a>"></Image>
          <Image source="images/chien_shiung_wu.jpeg" title="Chien-Shiung Wu"
            description="Watercolor on watercolor paper (17 x 11 in.). This piece depicts Chinese American nuclear physicist Chien-Shiung Wu."></Image>
        </div>
      );
    } else if(this.props.page == "GraphicDesign"){
      return(
        <div className="gallery">
          <Image source="images/reinventathon.png"
            description="Logo for Reinvented Magazine's Reinvent-a-thon."></Image>
          <Image source="images/html2.png"
            description="Logo for Reinvented Magazine's Invent with Reinvented HTML workshop."></Image>
          <Image source="images/machinelearning.png"
            description="Logo for Reinvented Magazine's Intro to Machine Learning workshop."></Image>
          <Image source="images/rockets.png"
           description="Graphic for Reinvented Magazine."></Image>
           <Image source="images/computer.png"
           description="Graphic for Reinvented Magazine."></Image>
        </div>
      );
    } else if(this.props.page == "Commissions"){
      return(
        <div className="gallery">
          <p>I am currently not taking digital or traditional art commissions.</p>
          <p>Graphic design commissions are currently <strong>open</strong>. Pricing is $15 for simple designs of up to 4 colors (+$2 per additional color).</p>
          <p>Payment accepted via PayPal.</p>
          <p>Contact me via email (ctdinh443[at]gmail[dot]com) for more information.</p>
        </div>
      );
    }
  }
}

class Image extends React.Component{

  constructor(props) {
    super(props);
    this.state = { size: "image" };
    this.enlarge = this.enlarge.bind(this);
    this.close = this.close.bind(this);
    this.setDescription = this.setDescription.bind(this);
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

  setDescription() {
    return {__html: this.props.description};
  }
  

  render(){
    if(this.state.size == "image"){
      return (
        <div className={this.state.size} onClick={this.enlarge} ref={this.myRef}>
          <img className="cover" src={this.props.source} loading="lazy"></img>
        </div>
      );
    } else{
      return (
          <div className={this.state.size} onClick={this.handleClick}>
            <a id="currentImage"></a>
            <img className="expanded" src={this.props.source} loading="lazy"></img>
            <p className="img-title">{this.props.title}</p>
            <p className="img-description" dangerouslySetInnerHTML={this.setDescription()}></p>
            <div className="close" onClick={this.close}>x</div>
            <div className="center" ref={this.myRef}></div>
        </div>
      );
    }
    
  }
}

function Footer(){
  return(
      <div className="footer">
        <p className="footertext">site built with react.js & deployed with firebase hosting.</p>
        <Carbonbadge className="badge" darkMode={true} />
      </div>
  );
}

export default App;
