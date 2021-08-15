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

        <Link to="/"><img src="images/pfp.jpg" className="profile"></img></Link>

          <Link to="/"><h1>@cdinhart</h1></Link>
      
            <Link className="navlink" to="/digital">Digital Art</Link>
            <Link className="navlink" to="/painting">Painting</Link>
            <Link className="navlink" to="/graphic-design">Graphic Design</Link>
            <Link className="navlink" to="/writing">Writing</Link>
            <Link className="navlink" to="/commissions">Commissions</Link>
            

            <Toggle></Toggle>
                    
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
          <Route path="/design-notes">
            <h1>Design Notes</h1>
            <DesignNotes />
          </Route>
          <Route path="/pricing">
            <h1>Pricing</h1>
            <Pricing />
          </Route>
          <Route path="/">
            <Home/>
            
          </Route>
        </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

function Home(){
  return(
  <div>
        <p>Hey there! Call me C (she/they). I make art.</p>
        <p>I'm chiefly a <Link className="pink" to="/digital">digital artist,</Link> though I have some experience with <Link className="pink" to="/painting">painting</Link> and <Link className="pink" to="/graphic-design">graphic design.</Link></p>
        <p>Digital art and graphic design <Link className="pink" to="/commissions">commissions</Link> are currently open.</p>
        <p>I also <Link className="blue" to="/writing">write.</Link> You can find some of my poetry and prose online.</p>
        <p>Find me on <a href="https://instagram.com/cdinhart" target="_blank">Instagram</a> and <a href="https://artfol.me/cdinhart" target="_blank">Artfol</a> @cdinhart.</p>
        <p><Link className="pink" to="/design-notes">Design Notes</Link></p>
  </div>
  );
}

function Painting(){
  return(
    <div key="painting">
    <Image source="images/conditions.JPG" 
      title="Pre-Existing Conditions"
      description="Acrylic on canvas (18 x 24 in.). Featured in the Montpelier Artists on the Rise juried exhibition (2021)."
      alt="A girl stands inside a city bus, with signs reading 'MAKS REQUIRED' and '6 FEET APART' taped to the windows. She wears a 
      lime green down coat, a sky blue scarf, and brown pants with a brown messenger's bag over one shoulder. In one hand, she grips the bus pole; in the other, she grasps an Albuterol inhaler for asthma, her mask pulled slightly off her face as she prepares to take an inhalation."></Image>
     <Image source="images/electricityandwater.jpg" title="Electricity & Water Don't Mix"
      description="Painted with watercolor with touches of ink and oil pastel. This piece was submitted as part of my AP 
      Studio Art: 2D Design portfolio and appeared in the first issue of The Agapanthus Collective <a href='https://www.agapanthuscollective.com/biannual-issue-1/' 
      target='_blank'>here.</a>" alt="A girl stands with her back turned to the viewer, the desk before her split into two parts: on the left are art materials (canvases, sketchbooks, paints) and on the right are electronics tools and parts (circuits, soldering iron, toolbox, laptop)."></Image>
    <Image source="images/girlsnight.jpg" title="Girls' Night"
      description="Oil on canvas (24 x 18 in.). This piece appeared in the first issue of The Agapanthus Collective <a href='https://www.agapanthuscollective.com/biannual-issue-1/' target='_blank'>here.</a>" alt="Two girls sit inside a school at night, hackathonning; sleeping bags and backpacks and laptops out."></Image>
    <Image source="images/gravity_glitch.JPG" title="Gravity Glitch"
      description="Gouache on watercolor paper (9 x 12 in.). This piece was submitted as part of my AP Studio Art: 2D Design portfolio."
      alt="A girl stands on a rock amidst river rapids; in the distance looming behind her is a large pink-purple mountain. The sky is vivid blue-green; she has red hair, a yellow raincoat, and an umbrella turned inside out from the wind."></Image>
    <Image source="images/concert_mistress.JPG" title="Concert Mistress"
      description="Oil on canvas board (12 x 15 in.). This piece was featured on the cover of The Wondrous Real magazine's <a href='https://www.wondrousrealmag.com/issue-2'target='_blank'>second issue.</a>" alt="A woman with red hair and a sea blue dress that matches her eyes grips a violin."></Image>
    <Image source="images/careergirls.JPG" title="Career Girls"
      description="Acrylic on canvas (24 x 18 in.). This piece was featured on the cover of Southchild Lit's first issue, <a href='https://southchildlit.wixsite.com/website-2'target='_blank'>GLITCH IN THE SYSTEM.</a>" alt="Three women—rather, the same woman three times—stand before different backdrops representing their day jobs: on the left, a kitchen; in the center, an early computer / large machine; on the right, a laundromat."></Image>
    <Image source="images/chien_shiung_wu.jpeg" title="Chien-Shiung Wu"
      description="Watercolor on watercolor paper (17 x 11 in.). This piece depicts Chinese American nuclear physicist Chien-Shiung Wu." alt="Chien-Shiung Wu stands on a ladder amidst heavy lab equipment. In the background is a chalkboard covered with equations."></Image>
    <Image source="images/rialto.JPG" title="Two Paintngs of Venice" description="Two paintings of Venice. (1. RIALTO - acrylic on canvas (20 x 16 in.); 2. Gondolier - watercolor on watercolor paper)" alt="A gondolier rows a family in front of the Rialto bridge in Venice, Italy, as lights glitter in the water against the deep blue evening.">
      <img className="expanded" src="images/venice.jpg" alt="A gondolier crosses a row of buildings in a Venetian canal."></img>
    </Image>
    <Image source="images/ops.jpg" title="Ops" description="Oil on canvas board (11 x 15 in.). Featured on the cover of Blue Marble Review's Summer 2021 issue. Check it out <a href='https://bluemarblereview.com/ops/' target='_blank'>here</a>." alt="Portrait of a woman in a space suit, white star designs circling her helmet like a planet's rings against a pink, purple, and gold background."></Image>
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
      alt="Digitally-rendered painting. A young woman with tanned skin, dark brown hair, a green t-shirt, and maroon shorts stands on the seat of a swing, laughing to the side. In the background, her younger self stands trepidatiously in front of the same swing."/>
      <Image source="images/roadtrip.jpg" title="Road Trip with Dreamers"
        description="Painted in Krita featuring characters from my old novel work-in-progress and submitted as part of my 
        AP Studio Art: 2D Design portfolio." alt="Two characters sit on the roof of a green car, parked at a scenic viewpoint before a waterfall."></Image>
      <Image source="images/street.jpg" title="Untitled"
        description="Sketched in HeavyPaint." alt="A bustling street filled with people, glowing buildings, and small shops."></Image>
      <Image source="images/disillusionment1.jpg" title="Disillusionment"
      description="Comic about the American Dream. Featured in <a href='https://www.ogmamagazine.com/' target='_blank'>ogma magazine</a> issue 07: culture.">
        <img className="expanded" src="images/disillusionment2.jpg"></img>
      </Image>
      <Image source="images/no1.jpg" title="ROBOBITCH">
        <img className="expanded" src="images/no2.jpg"></img>
      </Image>
      <Image source="images/frankenstein.jpg" title="FRANKENSTIEN: A New Musical Poster"
        description="Mock poster design for Frankenstein: A New Musical, featuring William Frankenstein and The Creature."></Image>
      <Image source="images/espiritus/hermanos.jpg" title="Personajes de La Casa de los Espíritus"
        description="Sketches of the leading characters from Isabel Allende's 1982 novel <i>La Casa de los Espíritus</i> (<i>The House of the Spirits</i>)."
        alt="Jaime and Nicolás Trueba. Jaime wears a doctor's uniform and stands on the left reading; Nicolás smokes, various amulets around his neck. Below them, the caption: 'LOS HERMANOS.'">
          <img className="expanded" src="images/espiritus/clara.jpg"
            alt="Clara del Valle holds two birds. The caption below her reads 'CLARA, CLARIVIDENTE.'"></img>
          <img className="expanded" src="images/espiritus/amantes.jpg"
            alt="Blanca Trueba and Pedro Tercero García stand with their arms around each other, both with serious expressions; Pedro holds a guitar. The caption below them reads 'LOS AMANTES."></img>
          <img className="expanded" src="images/espiritus/alba.jpg"
            alt="Young Alba Trueba, green hair in two plaits, stands holding a textbook from her Tío Jaime and a jar of paintbrushes. Below her, the caption: 'LA NIÑA ALBA.'"></img>
      </Image>

      <Image source="images/spotify/vi.jpeg" title="Spotify Screenshot Portraits" description="A fun idea I had to characterize portraits. If you are interested, commission a custom one for $26 <a href='/commissions' target='_blank'>here</a>." alt="A girl in a yellow sweater and scarf stands holding blank canvases before a Spotify screenshot of Meredith Brook's 'Bitch.' A lyric below her reads 'I'm a sinner, I'm a saint / and I do not feel ashamed.'">
        <img className="expanded" src="images/spotify/lulu.jpeg"
          alt="My friend stands in front of a Spotify screenshot of The Daily podcast."
        ></img>
        <img className="expanded" src="images/spotify/thor.jpeg"
          alt="MCU's Thor in modern clothing stands before a Spotify screenshot of Queen's 'Hammer to Fall.' A lyric below him reads 'Now your struggle's all in vain, yeah / For we who grew up tall and proud.'"
        ></img>
        <img className="expanded" src="images/spotify/loki.jpeg"
          alt="MCU's Loki in modern clothing stands before a Spotify screenshot of Queen's 'Princes of the Universe.' A lyric below him reads 'I am immortal / I have inside me blood of kings.'">
        </img>
      </Image>

      <Image source="images/maze.jpg" title="ARIADNE" description="Painted in HeavyPaint. Featured on the cover of <i>the winnow magazine's</i> 'DREAMSCAPES' issue. Check it out <a href='https://www.thewinnowmagazine.com/summer-2021.html' target='_blank'>here</a>."
        alt="A girl stands before a magenta-tinted labyrinth, back facing the viewer, purple string trailing behind her."></Image>
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
          <th width="20%"><p className="pink">Prose</p></th>
          <th width="80%">
            <Pub link="https://flashpointsf.com/2021/04/09/deploy/" title="DEPLOY" press="Flash Point SF"></Pub>
            <Pub link="https://www.ampleremains.com/01ctdinh.html" title="Doppelgänger" press="Ample Remains"></Pub>
            <Pub link="https://www.polluxjournal.com/issue-1/c-t-dinh" title="Parallel // Structure" press="Pollux Journal"></Pub>
            <Pub link="https://www.interstellarlit.com/issue-02/machine-unlearning" title="MACHINE UNLEARNING" press="Interstellar Lit"></Pub>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><p className="pink">Poetry</p></th>
            <th width="80%">
              <Pub link="https://journaloferato.squarespace.com/issue-two" title="ROCK YOU / Champions" press="journal of erato"></Pub>
              <Pub link="https://issuu.com/paracosmliteraryjournal/docs/issue_01_metamorphosis__4_" title="In There / Alter Egos / Superpower" press="Paracosm Lit"></Pub>
              <Pub link="images/writing/quantum_entanglement.jpg" title="Quantum Entanglement"></Pub>
              <Pub link="images/writing/computer.jpg" title="computer" press="Polyphony Lit, Scholastic Art & Writing 2021"></Pub>
              <Pub link="https://www.interstellarlit.com/issue-02/escapist-playlist" title="Escapist Playlist" press="Interstellar Lit"></Pub>
              <Pub link="http://strangehorizons.com/poetry/city-girls/" title="city girls" press="Strange Horizons"></Pub>
              <Pub link="https://www.indigoliteraryjournal.com/caroline-dinh" title="Overlay / Interview with an Olympian" press="Indigo Literary Journal"></Pub>
            </th>
        </tr>

        <tr>
          <th width="20%"><p className="pink">Books</p></th>
            <th width="80%">
              <Pub link="https://cdinhart.gumroad.com/l/popculturewiki" title="The All-Devouring Pop Culture Wiki" press="2021"></Pub>
            </th>
        </tr>
      </table>
    )
}

function DesignNotes(){
  return(
    <div>
      <p>Site built in React & deployed with Firebase Hosting. Set in DM Sans.</p>
      
      <p>Theme icons made by <a href="https://www.flaticon.com/authors/good-ware" target="_blank" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></p>

      <Carbonbadge className="badge" darkMode={document.documentElement.getAttribute("data-theme") === "dark"} />
    </div>
  )
}

class Pub extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.press){
      return(
            <p><a href={this.props.link} target="_blank">{this.props.title}</a> ({this.props.press})</p>
        )
    } else{
      return(
        <p><a href={this.props.link} target="_blank">{this.props.title}</a></p>
    )
    }
  }
}

function Commissions(){
  return(
    <div>
    <table width="100%">
        <tr>
          <th width="20%"><p className="pink">What I Do</p></th>
          <th width="80%">
            <p>Characters, friends, family, pets, fanart, book covers, logos, graphic designs—I'd be down to tackle most things as long as you give me enough info and provide references as necessary.</p>
          </th>
        </tr>

        <tr>
          <th width="20%"><p className="pink">What I Don't Do</p></th>
          <th width="80%">
            <p> NSFW, bigoted requests, problematic pairings, anything that makes me uncomfortable. I have the right to ignore and/or turn down commissions at my discretion.</p>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><p className="pink">How It Works</p></th>
            <th width="80%">
              <p>1. <strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform" target="_blank">Fill out my commission order form (preferred)</a></strong> or DM me on social media with the commission details. The form should take between 5-10 minutes to complete depending on the complexity of the project; 2-3 minutes if you have reference photos.</p>
              <p>2. I will reach out to you within a week so we can discuss the commission further.</p>
              <p>3. I will send you the base sketch and a quote for the final commission, and will tweak the sketch as needed until you are satisfied. Once you are ready, you must send me the full payment via PayPal before I can proceed.</p>
              <p>4. I will send you an update for the base colors (if applicable) before sending you the final version.</p>
            </th>
        </tr>

        <tr>
          <th width="20%"><p className="pink">Payment</p></th>
            <th width="80%">
              <p>I take payments in PayPal. For a detailed overview of pricing, click <Link to="/pricing">here.</Link> All prices are in USD.</p>
            </th>
            
        </tr>
      </table>
      <br></br><br></br><br></br>
      <h1>Pricing & Examples</h1>
      <Pricing />
      <br></br><br></br><br></br>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform" target="_blank"><button class="big-button">COMMISSION ME</button></a>
      </div>
  );
}

function Pricing(){
  return(
    <div>
  <table width="100%">
  <tr>
    <th width="20%"><p className="pink">Single Humanoid Character ($5-40+)</p></th>
      <th width="80%">
        <table width="100%" className="price-chart">
          <tr>
            <th width="50%"><p>Crop</p></th>
            <th width="15%"><p>Bust</p></th>
            <th width="15%"><p>Half</p></th>
            <th width="15%"><p>Full</p></th>
          </tr>
          <tr>
            <th width="50%"><p>Line Art</p></th>
            <th width="15%"><p>$5</p></th>
            <th width="15%"><p>$8</p></th>
            <th width="15%"><p>$10</p></th>
          </tr>
          <tr>
            <th width="50%"><p>Flat Color</p></th>
            <th width="15%"><p>$10</p></th>
            <th width="15%"><p>$15</p></th>
            <th width="15%"><p>$20</p></th>
          </tr>
          <tr>
            <th width="50%"><p>Full Render</p></th>
            <th width="15%"><p>$15</p></th>
            <th width="15%"><p>$22</p></th>
            <th width="15%"><p>$30</p></th>
          </tr>
          <tr>
            <th width="50%" className="lastrow"><p>Other Styles</p></th>
            <th colspan="3" className="lastrow"><p>Please contact me!</p></th>
          </tr>
        </table>
        <ImageSmall source="images/commissions/erica.jpg"></ImageSmall>
        <ImageSmall source="images/commissions/aapi.jpg"></ImageSmall>
        <ImageSmall source="images/raya.jpg"></ImageSmall>
      </th>
  </tr>
  <tr>
    <th width="20%"><p className="pink">Spotify Screenshot Portraits ($26)</p></th>
    <th width="80%">
      <p>Give me a character and a song they would vibe to and I will draw them. (Or give me a character and their vibes and I will pick a song for them to vibe to, if you're fine with a 90% chance of my assigning them a rock song.)</p>
      <ImageSmall source="images/spotify/loki.jpeg"></ImageSmall>
      <ImageSmall source="images/spotify/lulu.jpeg"></ImageSmall>
      <ImageSmall source="images/spotify/vi.jpeg"></ImageSmall>
    </th>
  </tr>
  <tr>
    <th width="20%"><p className="pink">Backgrounds</p></th>
    <th width="80%">
      <p>Single-colored backgrounds come for free. Backgrounds can range from $3-$20+ depending on complexity.</p>
    </th>
  </tr>
  <tr>
    <th width="20%"><p className="pink">Logos / Designs ($15+)</p></th>
    <th width="80%">
      <p>Logos start at $15 and may vary depending on complexity. You will receive the logo in PNG format and a color palette with hex codes for reference.</p>
      <ImageSmall source="images/backslash.svg"></ImageSmall>
       <ImageSmall source="images/umd_transparent.svg"></ImageSmall>
       <ImageSmall source="images/html1.jpg"></ImageSmall>
    </th>
  </tr>
</table>
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
    if(this.state.size != "image-wide"){
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

class ImageSmall extends Image{

  constructor(props) {
    super(props);
    this.state = { size: "imagesmall" };
  }

  enlarge(e) {
    e.preventDefault();
    this.setState({size: "image-wide"})
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

class Toggle extends React.Component{

  constructor(props){
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.state = {
      dark: true,
      icon: "images/moon.svg",
      iconclass: "theme-icon moon",
    };
  }

  changeTheme(){
    if(document.documentElement.getAttribute("data-theme") === "dark"){
      document.documentElement.setAttribute("data-theme", "light");
      let wcb = document.getElementById("wcb");
      if(wcb != null){
        wcb.className = "wcb carbonbadge";
      }
      this.setState({
        dark: false,
        icon: "images/sun.svg",
        iconclass: "theme-icon sun",
      });
    }
    else{
      document.documentElement.setAttribute("data-theme", "dark");
      let wcb = document.getElementById("wcb");
      if(wcb != null){
        wcb.className = "wcb carbonbadge wcb-d";
      }
      this.setState({
        dark: true,
        icon: "images/moon.svg",
        iconclass: "theme-icon moon",
      });
    }
  }

  render(){
    return(
      <label className="switch" onChange={this.changeTheme}>
        <input type="checkbox"/>
        <span className="slider round"><img className={this.state.iconclass} src={this.state.icon}></img></span>
    </label>
    );
  }
}


function Archive(){
  return(
    <div>
      <Pub link="images/writing/social_cues.jpg" title="social cues" press="Gaithersburg Book Festival"></Pub>
    </div>
  );
}

export default App;
