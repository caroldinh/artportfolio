import './App.css';
import React, { Suspense } from 'react';
import Carbonbadge from "react-carbonbadge"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Router>
        <div className="sidebar">

        <Link to="/"><img src="images/pfp.jpg" class="profile"></img></Link>

          <Link to="/"><h1>CDINHART</h1></Link>
          
          
            <Link className="navlink" to="/painting">Painting</Link>
            <Link className="navlink" to="/digital">Digital</Link>
            <Link className="navlink" to="/graphic-design">Graphic Design</Link>
            <Link className="navlink" to="/media">Digital Media</Link>
            <Link className="navlink" to="/writing">Writing</Link>
            <a href="https://cdinhcomms.carrd.co/" target="_blank" className="navlink">Commissions</a>

            <div className="social" id="instagram"></div>
                    
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
          <Route path="/media">
            <h1>Digital Media</h1>
            <h3>Web Development / Creative Coding / etc.</h3>
            <Media/>
          </Route>
          <Route path="/commissions">
            <h1>Commission me</h1>
            <Commissions />
          </Route>
          <Route path="/writing">
            <h1>Writing</h1>
            <Writing />
          </Route>
          <Route path="/">
            <Home/>
            
          </Route>
        </Switch>
        </div>
        

        <Footer></Footer>

        

        </Router>
      </div>
    )
  }
}

function Home(){
  return(
  <div>
        <p>Hi there! Call me C (she/they). I make art.</p>
        <p>I'm chiefly a <Link className="pink" to="/digital">digital artist,</Link> though I have some experience with <Link className="pink" to="/painting">painting</Link> and <Link className="pink" to="/graphic-design">graphic design.</Link></p>
        <p>Digital art and graphic design <a href="https://cdinhcomms.carrd.co" target="_blank" className="pink">commissions</a> are currently open.</p>
        <p>I also <Link className="blue" to="/writing">write.</Link> You can find some of my poetry and prose online.</p>
        <p>Find me on <a href="https://instagram.com/cdinhart" target="_blank">Instagram</a> and <a href="https://twitter.com/cdinhart" target="_blank">Twitter</a> @cdinhart.</p>
  </div>
  );
}

function Painting(){
  return(
    <div key="painting">
    <Image source="images/conditions.JPG" 
      title="Pre-Existing Conditions"
      description="Acrylic on canvas (18 x 24 in.). Featured in the Montpelier Artists on the Rise juried exhibition (2021)."
      alt="A girl with brown skin and dark brown hair stands inside a city bus, with signs reading 'MAKS REQUIRED' and '6 FEET APART' taped to the windows. She wears a 
      lime green down coat, a sky blue scarf, and brown pants with a brown messenger's bag over one shoulder. She grips a the bus railing in her left hand. Her mask 
      hangs around her face from one ear because in her left hand, she holds a blue Alburterol inhaler for asthma."></Image>
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
      <Image source="images/swing.jpg" 
      title="Swing"
      description="Painted in Krita and featured in Paper Crane Journal's inaugural issue 
          <a href='https://en.calameo.com/books/006629503d10b805aa97b' target='_blank'>here.</a>"
      alt="Digitally-rendered painting. A young woman with tanned skin, dark brown hair, a green t-shirt, and maroon shorts stands on the seat of a swing, laughing to the side.
        In the background, her younger self stands trepidatiously in front of the same swing."/>
      <Image source="images/roadtrip.jpg" title="Road Trip with Dreamers"
        description="Painted in Krita featuring characters from my old novel work-in-progress and submitted as part of my 
        AP Studio Art: 2D Design portfolio."></Image>
      <Image source="images/street.jpg" title="Untitled"
        description="Sketched in HeavyPaint."></Image>
      <Image source="images/disillusionment1.jpg" title="Disillusionment"
      description="Comic about the American Dream. Featured in <a href='https://www.ogmamagazine.com/' target='_blank'>ogma magazine</a> issue 07: culture.">
        <img className="expanded" src="images/disillusionment2.jpg"></img>
      </Image>
      <Image source="images/no1.jpg" title="ROBOBITCH">
        <img className="expanded" src="images/no2.jpg"></img>
      </Image>
      <Image source="images/frankenstein.jpg" title="FRANKENSTIEN: A New Musical Poster"
        description="Mock poster design for Frankenstein: A New Musical, featuring William Frankenstein and The Creature."></Image>
    </div>
  );
}

function GraphicDesign(){
  return(
    <div key="design">
      <Image source="images/reinventathon.jpg"
        description="Logo for Reinvented Magazine's Reinvent-a-thon."></Image>
      <Image source="images/html1.jpg"
        description="Logo for Reinvented Magazine's Invent with Reinvented HTML workshop."
        alt="Logo for Reinvented Magazine's HTML workshop. On the right, a browser window displays a wepbage with a pink and blue wave pattern and the text 
        '<div class='html'>'. A box with the HTML tag symbol '</>' overlaps it. To the side are two warped net patterns."></Image>
      <Image source="images/backslash.svg"
      description="Logo for <a href='https://backslashlit.com/' target='_blank'>Backslash Lit</a>">
        <img className="expanded" src="images/backslash_icon.svg"></img>
      </Image>
      <Image source="images/rockets.jpg"
       description="Graphic for Reinvented Magazine."></Image>
       <Image source="images/open_source.jpg"
       description="Graphic for Reinvented Magazine."></Image>
       <Image source="images/computer.jpg"
       description="Graphic for Reinvented Magazine."></Image>
       <Image source="images/umd_transparent.svg"
       description="Entry for UMD '25 discord server logo contest."></Image>
    </div>
  );
}

function Media(){
  return(
    <div key="media"> 
      
      <Image source="images/charonexpress.jpg"
      description="Interactive inspiration board for my novel built with HTML/CSS/JS. Visit <a href='https://charonexpress.web.app/' target='_blank'>here</a>."></Image>
      <Image source="images/blog.jpg"
      description="Personal blog slash shouting void slash coding exercise. Built with Jekyll and HTML/CSS/JS. Visit <a href='https://cyblog48.web.app/' target='_blank'>here</a>."></Image>
      <Image source="images/hatch.jpg" description="p5.js sketch."></Image>
      <Image source="images/titan.jpg"
      description="Web dev demo. Built with HTML/CSS."></Image>
      <Image source="images/thao.jpg"
      description="Thao & the Get Down Stay Down Lyric bot. Built using Python with Tweepy and Genius API. Visit <a href='https://twitter.com/thaolyricbot' target='_blank'>here</a>. Listen to Thao's music 
      <a href='https://open.spotify.com/artist/2dn0CGCWvtrwZ66bOeLNb2?si=UtU8lPTDRVay0TDFx5r11Q' target='_blank'>here</a>."></Image>
    </div>
  );
}

function Writing(){
  return(
      <table width="100%">
        <tr>
          <th width="20%"><p class="pink">Prose</p></th>
          <th width="80%">
            <Pub link="https://www.ampleremains.com/01carolinedinh.html" title="Doppelgänger" press="Ample Remains"></Pub>
            <Pub link="https://www.polluxjournal.com/issue-1/c-t-dinh" title="Parallel // Structure" press="Pollux Journal"></Pub>
            <Pub link="https://flashpointsf.com/2021/04/09/deploy/" title="DEPLOY" press="Flash Point SF"></Pub>
            <Pub link="https://www.interstellarlit.com/issue-02/machine-unlearning" title="MACHINE UNLEARNING" press="Interstellar Lit"></Pub>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><p class="pink">Poetry</p></th>
            <th width="80%">
              <Pub link="https://www.indigoliteraryjournal.com/caroline-dinh" title="Overlay / Interview with an Olympian" press="Indigo Literary Journal"></Pub>
              <Pub link="http://strangehorizons.com/poetry/city-girls/" title="city girls" press="Strange Horizons"></Pub>
              <Pub link="https://www.interstellarlit.com/issue-02/escapist-playlist" title="Escapist Playlist" press="Interstellar Lit"></Pub>
              <Pub link="https://issuu.com/paracosmliteraryjournal/docs/issue_01_metamorphosis__4_" title="3 superhero poems" press="Paracosm Lit"></Pub>
            </th>
        </tr>
      </table>
    )
}

class Pub extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return(
        <p><a href={this.props.link} target="_blank">{this.props.title}</a> - <i>{this.props.press}</i></p>
    )
  }
}

function Commissions(){
  return(
    <div key="commissions">
      <p>Digital art and graphic design commissions are currently <strong>open</strong>.</p>
      <p>Pricing for graphic designs starts at $15. (May be more for complex designs.)</p>
      <p>Pricing for digital art will vary depending on the request. For reference, here is the pricing for a single character:</p>
      <p><ul>
        <li><strong>Bust (shoulders up):</strong> $5 for lineart / $10 for flat color / $15 for full render</li>
        <li><strong>Half-body (waist up):</strong> $8 for lineart / $15 for flat color / $22 for full render</li>
        <li><strong>Full-body:</strong> $10 for lineart / $20 for flat color / $30 for full render</li>
      </ul></p>
      <p>I am willing to draw original characters, fan art, friends/family, pets, etc.</p>
      <p>NSFW and bigoted requests will be ignored.</p>
      <p>Payment accepted via PayPal after I send you the initial sketch.</p>
      <p>Pricing samples:</p>
      <img className="img-static" src="images/pricing.jpg"></img>

      <p>To order a commission, please reach out via:
        <ul>
          <li>Instagram: <a href="http://instagram.com/cdinhart" target="_blank">@cdinhart</a></li>
          <li>Twitter: <a href="https://twitter.com/cdinhart" target="_blank">@cdinhart</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform?usp=sf_link" target="_blank">Commission order form</a></li>
        </ul>
      </p>

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
          <Suspense fallback={ <img className="cover fadeIn" src=''></img>}>
             <img className="cover" src={this.props.source} 
             alt={this.props.alt} loading="lazy"></img>
          </Suspense>
        </div>
      );
    } else{
      return (
          <div className={this.state.size} onClick={this.handleClick}>
            <a id="currentImage"></a>
            <img className="expanded" src={this.props.source} loading="lazy" alt={this.props.alt}></img>
            {this.props.children}
            <p className="img-title">{this.props.title}</p>
            <p className="img-description" dangerouslySetInnerHTML={this.setDescription()}></p>
            <div className="close" onClick={this.close}>x</div>
            <div className="center" ref={this.myRef}></div>
        </div>
      );
    }
    
  }
}

class Footer extends React.Component{

  constructor(props){
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.state = {
      dark: true,
      icon: "images/sun.svg",
      iconclass: "sun",
    };
  }

  changeTheme(){
    if(document.documentElement.getAttribute("data-theme") === "dark"){
      document.documentElement.setAttribute("data-theme", "light");
      this.setState({
        dark: false,
        icon: "images/moon.svg",
        iconclass: "moon",
      });
    }
    else{
      document.documentElement.setAttribute("data-theme", "dark");
      this.setState({
        dark: true,
        icon: "images/sun.svg",
        iconclass: "sun",
      });
    }
  }

  render(){
    return(
        <div className="footer">

          <p className="footertext">site built with react.js & deployed with firebase hosting.</p>
          <Carbonbadge className="badge" darkMode={document.documentElement.getAttribute("data-theme") === "dark"} />
          <label className="switch" onChange={this.changeTheme}>
                <input type="checkbox"/>
                <span className="slider round"><img class={this.state.iconclass} src={this.state.icon}></img></span>
              </label>
        </div>
    );
  }
}

export default App;
