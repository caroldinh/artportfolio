import './App.css';
import React from 'react';
import Carbonbadge from "react-carbonbadge"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let section = "DigitalArt";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Router>
        <div className="sidebar">

          <h1>Caroline Dinh</h1>
          <p>mediums: acrylic / watercolor / digital</p>
          <p>tools: krita, heavypaint, huion</p>
          
            <Link className="navlink" to="/painting">Painting</Link>
            <Link className="navlink" to="/digital">Digital</Link>
            <Link className="navlink" to="/graphic-design">Graphic Design</Link>
            <Link className="navlink" to="/commissions">Commission Me</Link>
         
        </div>

        <div className="gallery">
        <Switch> 
          <Route path="/painting">
            <h1>Painting</h1>
            <Painting />
          </Route>
          <Route path="/digital">
            <h1>Digital Art</h1>
            <DigitalArt />
          </Route>
          <Route path="/graphic-design">
            <h1>Graphic Design</h1>
            <GraphicDesign />
          </Route>
          <Route path="/commissions">
            <h1>Commission me</h1>
            <Commissions />
          </Route>
          <Route path="/">
            <Painting /><DigitalArt /><GraphicDesign/>
          </Route>
        </Switch>
        </div>
        

        <Footer></Footer>

        

        </Router>
      </div>
    )
  }
}

function Painting(){
  return(
    <div key="painting">
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
}

function DigitalArt(){
  return (
    <div key="digitalart">
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
}

function GraphicDesign(){
  return(
    <div key="design">
      <Image source="images/reinventathon.png"
        description="Logo for Reinvented Magazine's Reinvent-a-thon."></Image>
      <Image source="images/run.jpg" light="true"
        description="Graphic for student newspaper article."></Image>
      <Image source="images/html2.png"
        description="Logo for Reinvented Magazine's Invent with Reinvented HTML workshop."></Image>
      <Image source="images/electoral_college.jpg" light="true"
        description="Graphic for student newspaper article."></Image>
      <Image source="images/machinelearning.png"
        description="Logo for Reinvented Magazine's Intro to Machine Learning workshop."></Image>
      <Image source="images/family.jpg" light="true"
        description="Graphic for student newspaper article."></Image>
      <Image source="images/rockets.png"
       description="Graphic for Reinvented Magazine."></Image>
       <Image source="images/computer.png"
       description="Graphic for Reinvented Magazine."></Image>
    </div>
  );
}

function Commissions(){
  return(
    <div key="commissions">
      <p>I am currently not taking traditional art commissions.</p>
      <p>Digital art and graphic design commissions are currently <strong>open</strong>.</p>
      <p>Pricing for graphic designs is $15 for simple designs of up to 4 colors (+$2 per additional color).</p>
      <p>Pricing for digital art will vary depending on the request. For reference, here is the pricing for a single character:</p>
      <p><ul>
        <li><strong>Bust (shoulders up):</strong>$5 for lineart / $10 for flat color / $15 for full render</li>
        <li><strong>Half-body (waist up):</strong>$8 for lineart / $15 for flat color / $22 for full render</li>
        <li><strong>Full-body:</strong>$10 for lineart / $20 for flat color / $30 for full render</li>
      </ul></p>
      <p>I am willing to draw original characters, fan art, friends/family, pets, etc.</p>
      <p>NSFW and bigoted requests will be ignored.</p>
      <p>Payment accepted via PayPal after I send you the initial sketch.</p>
      <p>Pricing samples:</p>
      <img className="img-static" src="images/pricing.jpg"></img>

      <p>Please fill in the following <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform?usp=sf_link" target="_blank">form</a> to order a commission.</p>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}

class Image extends React.Component{

  constructor(props) {
    super(props);
    this.state = { size: "image" };
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
    if(this.state.size == "image"){
      return (
        <div className={this.state.size} onClick={this.enlarge} ref={this.myRef}>
          <img className="cover" src={this.props.source} loading="lazy"></img>
        </div>
      );
    } else if(this.props.light){
      return(
      <div className={this.state.size} onClick={this.handleClick}>
            <a id="currentImage"></a>
            <img className="expanded" src={this.props.source} loading="lazy"></img>
            <p className="img-title">{this.props.title}</p>
            <p className="img-description" dangerouslySetInnerHTML={this.setDescription()}></p>
            <div className="close close-light" onClick={this.close}>x</div>
            <div className="center" ref={this.myRef}></div>
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
