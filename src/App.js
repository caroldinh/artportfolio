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

        <Link to="/"><img class="profile" src="images/titan-top.svg"></img></Link>
          <Link to="/"><h1 id="title">CAROL DINH ✦</h1></Link>
      
            <Link className="navlink" to="/art">Art</Link>
            <Link className="navlink" to="/tech">Tech</Link>
            <Link className="navlink" to="/design">Design</Link>
            <Link className="navlink" to="/writing">Writing</Link>
            

            <Toggle></Toggle>
                    
        </div>

        <div className="gallery">
        <Switch> 
          <Route path="/art">
            <h1>ART & ILLUSTRATION ✦</h1>
            <Painting />
          </Route>
          <Route path="/design">
            <h1>GRAPHIC DESIGN ✦</h1>
            <GraphicDesign />
          </Route>
          <Route path="/tech">
            <h1>CODE & TECH ✦</h1>
            <Tech />
          </Route>
          <Route path="/commissions">
            <h1>COMMISSION ME ✦</h1>
            <Commissions />
          </Route>
          <Route path="/writing">
            <h1>WRITING ✦</h1>
            <Writing />
          </Route>
          <Route path="/design-notes">
            <h1>DESIGN NOTES ✦</h1>
            <DesignNotes />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/about">
            <About />
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
  document.documentElement.setAttribute("planet-size", "large");
  return(
    <div class="about-me">
      <h1>FEATURES ✦</h1>
      <p>✦ <Link to="/tech">For The Record:</Link> An AR Collage investigating the culture of documentation.</p>
      <p>✦ <a href="https://cdinhart.gumroad.com/l/popculturewiki" target="_blank">The All-Devouring Pop Culture Wiki:</a> A micro-chapbook of poems about pop culture and growing up.</p>
      <p>✦ <a href="backslashlit.com/" target="_blank">Backslash Lit:</a> a webzine and learning community for electronic literature.</p>
      <br></br>
      <Link className="cool" to="/about"><strong>About + Contact</strong></Link><br></br>
      <Link className="warm" to="/design-notes"><strong>Design Notes</strong></Link>
    </div>
  );
}

function About(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
  <div class="about-me">
      <h1>ABOUT ME ✦</h1>
        <p>Hey there! Call me Carol. I am an Immersive Media Design student attending the University of Maryland. I reside on Piscataway and Nacotchtank land.</p>
        <br></br>
        <Link className="cool" to="/"><strong>Home</strong></Link><br></br>
        <a class="cool" href="https://www.instagram.com/cdinhart/" target="_blank"><strong>Instagram</strong></a><br></br>
        <a class="cool" href="https://github.com/cyborg48" target="_blank"><strong>GitHub</strong></a><br></br>
        <Link className="cool" to="/commissions"><strong>Commissions</strong></Link><br></br>
        <Link className="warm" to="/design-notes"><strong>Design Notes</strong></Link>
  </div>
  );
}

function Painting(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div key="painting">
      <Image title="ESCAPE" source="images/escapism.jpg" alt="A vibrant illustration. At the center, a woman immersed in a VR headset. To her left, images of polluted waters, forest fires, factory smoke, a graph with data trending to the extreme. To her right, neon and vibrant colors; two rocket-ships entering the sky leaving behind pink clouds of fantastical smoke.">
        <p><b>ESCAPE</b></p>
        <p>Inspired by the vibrant style of modern editorial illustration. I created this piece to process my thoughts on the emerging concept of the 'metaverse' and what I want to do with my studies of immersive media.</p>
      </Image>
     <Image title="Significant Figures (portfolio)" source="images/significant_figures/electricityandwater.jpg" alt="A girl stands with her back turned to the viewer, the desk before her split into two parts: on the left are art materials (canvases, sketchbooks, paints) and on the right are electronics tools and parts (circuits, soldering iron, toolbox, laptop).">
       
        <img className="expanded" src="images/significant_figures/careergirls.JPG" alt="Three women—rather, the same woman three times—stand before different backdrops representing their day jobs: on the left, a kitchen; in the center, an early computer / large machine; on the right, a laundromat."></img> 
        <img className="expanded" src="images/significant_figures/chien_shiung_wu.jpeg" alt="Chien-Shiung Wu stands on a ladder amidst heavy lab equipment. In the background is a chalkboard covered with equations."></img>
        <img className="expanded" src="images/significant_figures/girlsnight.jpg" alt="Two girls sit inside a school at night, hackathonning; sleeping bags and backpacks and laptops out."></img>
        <p>
        <b>Significant Figures (2020)</b>
        </p>
        <p>A portfolio of fine art expressing the experiences and histories of women in STEM. <i>Significant Figures</i> centers around the intersection between femininity and science, especially male-dominated disciplines like physics, engineering, and technology. These paintings are the products of both fascination and frustration, the wonder and wistfulness that comes with existing in a culture that rounds away your presence.
        </p>
        <p>In order of appearance:</p>
        <p><b>Electricity and Water Don't Mix</b> (Watercolor and oil pastel on watercolor paper)</p>
        <p><b>Career Girl</b> (Acrylic on canvas)</p>
        <p><b>First Lady of Physics</b> (Watercolor on watercolor paper)</p>
        <p><b>Girs' Night</b> (Oil on canvas)</p>
      </Image>
      <Image source="images/disillusionment1.jpg" title="Disillusionment"
      description="Comic about the American Dream. Featured in <a href='https://www.ogmamagazine.com/' target='_blank'>ogma magazine</a> issue 07: culture." columns="2">
        <img className="expanded split-column" src="images/disillusionment2.jpg"></img>
        <p><b>Disillusionment</b></p>
      </Image>
    <Image source="images/gravity_glitch.JPG" title="Gravity Glitch"
      alt="A girl stands on a rock amidst river rapids; in the distance looming behind her is a large pink-purple mountain. The sky is vivid blue-green; she has red hair, a yellow raincoat, and an umbrella turned inside out from the wind." columns="2">
        <p><b>Gravity Glitch</b> (Gouache on watercolor paper)</p>
      </Image>
    
    <Image source="images/rialto.JPG" title="Two Paintings of Venice" alt="A gondolier rows a family in front of the Rialto bridge in Venice, Italy, as lights glitter in the water against the deep blue evening.">
      <p><b>Rialto</b> (20 x 16, acrylic on canvas)</p>
      <img className="expanded" src="images/venice.jpg" alt="A gondolier crosses a row of buildings in a Venetian canal."></img>
      <p><b>Gondola</b> (watercolor on watercolor paper)</p>
      
    </Image>


    <Image source="images/spotify/vi.jpeg" title="Spotify Screenshot Portraits" description="A fun idea I had to characterize portraits. If you are interested, commission a custom one for $30 <a href='/commissions' target='_blank'>here</a>." alt="A girl in a yellow sweater and scarf stands holding blank canvases before a Spotify screenshot of Meredith Brook's 'Bitch.' A lyric below her reads 'I'm a sinner, I'm a saint / and I do not feel ashamed.'" columns="2">
        <img className="expanded split-column" src="images/spotify/lulu.jpeg"
          alt="My friend stands in front of a Spotify screenshot of The Daily podcast."
        ></img>
        <img className="expanded split-column" src="images/spotify/thor.jpeg"
          alt="MCU's Thor in modern clothing stands before a Spotify screenshot of Queen's 'Hammer to Fall.' A lyric below him reads 'Now your struggle's all in vain, yeah / For we who grew up tall and proud.'"
        ></img>
        <img className="expanded split-column" src="images/spotify/loki.jpeg"
          alt="MCU's Loki in modern clothing stands before a Spotify screenshot of Queen's 'Princes of the Universe.' A lyric below him reads 'I am immortal / I have inside me blood of kings.'">
        </img>
      </Image>

      <Image source="images/espiritus/hermanos.jpg" title="Personajes: La Casa de los Espíritus"
        description="Sketches of the leading characters from Isabel Allende's 1982 novel <i>La Casa de los Espíritus</i> (<i>The House of the Spirits</i>)."
        alt="Jaime and Nicolás Trueba. Jaime wears a doctor's uniform and stands on the left reading; Nicolás smokes, various amulets around his neck. Below them, the caption: 'LOS HERMANOS.'" columns="2">
          <img className="expanded split-column" src="images/espiritus/clara.jpg"
            alt="Clara del Valle holds two birds. The caption below her reads 'CLARA, CLARIVIDENTE.'"></img>
          <img className="expanded split-column" src="images/espiritus/amantes.jpg"
            alt="Blanca Trueba and Pedro Tercero García stand with their arms around each other, both with serious expressions; Pedro holds a guitar. The caption below them reads 'LOS AMANTES."></img>
          <img className="expanded split-column" src="images/espiritus/alba.jpg"
            alt="Young Alba Trueba, green hair in two plaits, stands holding a textbook from her Tío Jaime and a jar of paintbrushes. Below her, the caption: 'LA NIÑA ALBA.'"></img>
      </Image>

  </div>
  
  );
}

function GraphicDesign(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div key="design">
      <Image source="images/fortherecord/poster2-cmyk.jpg" title="For The Record" alt="A poster with a concert photo in the top right corner, audience filled with recording phones. Below the concert photo, the text 'FOR THE RECORD.' On the left side of the poster, two QR codes (one for Android, one for iOS). Beneath the barcodes, text reading: 'AN AR INVESTIGATION. WHY MUST WE TAPE / TAG / TEXT / STREAM / SHARE / SELFIE / STATUS UPDATE / SNAPSHOT / SAVE / DOCUMENT EVERY MOMENT?'">
        <p>Poster for my augmented reality installation / collage "For The Record" (2021) Learn more about this project under the "Tech" section of my portfolio.</p>
      </Image>
      <Image source="images/backslash/backslash_brand_kit.jpg" title="Backslash Lit Graphics">
        <p>Graphics and branding kit for <a href='https://backslashlit.com/' target='_blank'>Backslash Lit</a> (2021)</p>
      </Image>
    </div>
  );
}

function Tech(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div key="media"> 
      <ForTheRecord></ForTheRecord>
      <Image title="Jitter (Processing)" source="images/generative/jitter2.jpg" columns="2">
        <img className="expanded split-column" src="images/generative/jitter4.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter5.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter6.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter7.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter8.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter9.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter10.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter11.jpg"></img>
        <img className="expanded split-column" src="images/generative/jitter12.jpg"></img>
        <p><b>Jitter (2022)</b></p>
        <p>A series of generative art pieces created in Processing.</p>
      </Image>
      <Image title="Archie (Discord.py)" source="images/archie/archie.jpg" >
        <img className="expanded" src="images/archie/archie2.jpg"></img>
        <img className="expanded" src="images/archie/archie3.jpg"></img>
        <img className="expanded" src="images/archie/archie4.jpg"></img>
        <p><b>Archie</b> (2021)</p>
        <p>A Discord bot to archive inactive channels, built with Discord.py and deployed on Heroku. <a href='https://top.gg/bot/857027766976118806' target='_blank'>Add Archie to your Discord server.</a></p>
        <p></p>
      </Image>

      <Image title="Backslash Lit website (Jekyll)" source="images/backslash/issues.jpg">
        <img className="expanded" src="images/backslash/i4.jpg"></img>
        <img className="expanded" src="images/backslash/i5.jpg"></img>
        <img className="expanded" src="images/backslash/home.jpg"></img>
        <p>I developed and maintained the website for my digital zine, <a href="https://backslashlit.com" target="_blank">Backslash Lit</a>, with Jekyll and GitHub pages and implemented experimental issue layouts using p5.js.</p>
      </Image>

      <Image title="Picnic (Django)" source="images/picnic/screenshot1.jpg">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/2vUomGoD-gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
        <p><b>Picnic</b> (2020)</p>
        <p>A critique app for developing artists.</p>
      </Image>

    </div>
  );
}

function ForTheRecord(){
  return(
    <Image title="For The Record (Unity)" source="images/fortherecord/screenshot1.jpg">
        <img className="expanded" src="images/fortherecord/screenshot2.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot3.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot4.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot5.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot6.jpg"></img>
        <img className="expanded" src="images/fortherecord/poster2-cmyk.jpg"></img>
        <p><b>For The Record: </b>an augmented reality collage (2021)</p>
        <p>"For The Record" explores the relationship between your camera app and present experience. How does documentation impact your ability to "enjoy the moment?" How is your brain shaped by the tools you hold? Hold the AR app up to the poster to access the experience.</p>
        <p>Built in Unity. Poster designed in Photoshop. Click <a href="https://www.instagram.com/p/CXuBLScFE2K/" target="_blank">here</a> for a video demo.</p>
      </Image>
  )
}

function Writing(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
      <table width="100%">
        <tr>
          <th width="20%"><h2 className="warm">Prose</h2></th>
          <th width="80%">
            <Pub link="https://flashpointsf.com/2021/04/09/deploy/" title="DEPLOY" press="Flash Point SF"></Pub>
            <Pub link="https://www.ampleremains.com/01ctdinh.html" title="Doppelgänger" press="Ample Remains"></Pub>
            <Pub link="https://www.polluxjournal.com/issue-1/c-t-dinh" title="Parallel // Structure" press="Pollux Journal"></Pub>
            <Pub link="https://www.interstellarlit.com/issue-02/machine-unlearning" title="MACHINE UNLEARNING" press="Interstellar Lit"></Pub>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><h2 className="warm">Poetry</h2></th>
            <th width="80%">
              <Pub link="https://petrichormag.com/18-c-t-dinh/" title="C(0de) to Bisexuality" press="petrichor journal"></Pub>
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
          <th width="20%"><h2 className="warm">Books</h2></th>
            <th width="80%">
              <Pub link="https://cdinhart.gumroad.com/l/popculturewiki" title="The All-Devouring Pop Culture Wiki" press="2021"></Pub>
            </th>
        </tr>
      </table>
    )
}

function DesignNotes(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
    <div class="about-me">
      <p>Site built in React & deployed with Firebase Hosting. Headings set in Oswald; subheadings and body set in Mulish.</p>
      
      <p>Theme icons made by <a href="https://www.flaticon.com/authors/good-ware" target="_blank" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></p><br></br>

      <p class="small">This site has a carbon footprint, as all digital activity does. The below estimate counts only this page ("DESIGN NOTES"): the true carbon footprint will be larger because images require more processing power to load. My including this estimate here is not to deter you from web browsing but rather to raise awareness—click on the badge to learn more about your digital carbon footprint.</p>
      
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
            <p><a href={this.props.link} target="_blank"><strong>{this.props.title}</strong></a> ({this.props.press})</p>
        )
    } else{
      return(
        <p><a href={this.props.link} target="_blank"><strong>{this.props.title}</strong></a></p>
    )
    }
  }
}

function Commissions(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div>
    <table width="100%">
        <tr>
          <th width="20%"><h2 className="warm left">What I Do</h2></th>
          <th width="80%">
            <p>Characters, friends, family, pets, fanart, etc.—I'd be down to tackle most things as long as you give me enough info and provide references as necessary. I am willing to draw complex armor and mecha with references & potential increase from base price.</p>
          </th>
        </tr>

        <tr>
          <th width="20%"><h2 className="warm left">What I Don't Do</h2></th>
          <th width="80%">
            <p>No NSFW, bigotry, or sketchy ships! I have the right to ignore and/or turn down commissions at my discretion.</p>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><h2 className="warm left">How It Works</h2></th>
            <th width="80%">
              <p>1. <strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform" target="_blank">Fill out my commission order form (preferred)</a></strong> or DM me on social media with the commission details. The form should take between 5-10 minutes to complete depending on the complexity of the project; 2-3 minutes if you have reference photos.</p>
              <p>2. I will reach out to you within a week so we can discuss the commission further.</p>
              <p>3. I will send you the base sketch and a quote for the final commission, and will tweak the sketch as needed until you are satisfied. Once you are ready, you must send me the full payment via PayPal before I can proceed.</p>
              <p>4. I will send you an update for the base colors (if applicable) before sending you the final version.</p>
            </th>
        </tr>

        <tr>
          <th width="20%"><h2 className="warm left">Payment</h2></th>
            <th width="80%">
              <p>I take payments in PayPal. For a detailed overview of pricing, click <Link to="/pricing">here.</Link> All prices are in USD.</p>
            </th>
            
        </tr>
      </table>
      <br></br><br></br><br></br>
      <h1>Pricing & Examples</h1>
      <Pricing />
      <br></br><br></br><br></br>
      <h1>Terms of Service</h1>
      <TOS />
      <br></br><br></br><br></br>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSty2FrfdMvsH8_n-2TmTlhi562ousWMfxUl4Jtr3uPK6oxQ/viewform" target="_blank"><button class="big-button">ORDER A COMMISSION</button></a>
      </div>
  );
}

function Pricing(){
  return(
    <div>
  <table width="100%">
  <tr>
    <th width="20%"><h2 className="warm left">Single Humanoid Character ($5-40+)</h2></th>
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
            <th width="15%"><p>$6</p></th>
            <th width="15%"><p>$9</p></th>
            <th width="15%"><p>$12</p></th>
          </tr>
          <tr>
            <th width="50%"><p>Flat Color</p></th>
            <th width="15%"><p>$12</p></th>
            <th width="15%"><p>$16</p></th>
            <th width="15%"><p>$24</p></th>
          </tr>
          <tr>
            <th width="50%"><p>Full Render</p></th>
            <th width="15%"><p>$16</p></th>
            <th width="15%"><p>$26</p></th>
            <th width="15%"><p>$36</p></th>
          </tr>
          <tr>
            <th width="50%" className="lastrow"><p>Other Styles</p></th>
            <th colspan="3" className="lastrow"><p>Please contact me!</p></th>
          </tr>
        </table>
        <p>Above are base prices per character. If your composition includes multiple characters, the pricing will be +75% base price per additional character.</p>
        <p>Prices may change based on complexity.</p>
        <ImageSmall source="images/commissions/erica.jpg"></ImageSmall>
        <ImageSmall source="images/commissions/aapi.jpg"></ImageSmall>
        <ImageSmall source="images/raya.jpg"></ImageSmall>
      </th>
  </tr>
  <tr>
    <th width="20%"><h2 className="warm left">Spotify Screenshot Portraits ($30)</h2></th>
    <th width="80%">
      <p>Give me a character and a song they would vibe to and I will draw them. (If you'd like me to pick a song for your character, that's an additional $2—it takes time to go through my playlists and choose!)</p>
      <ImageSmall source="images/spotify/loki.jpeg"></ImageSmall>
      <ImageSmall source="images/spotify/lulu.jpeg"></ImageSmall>
      <ImageSmall source="images/spotify/vi.jpeg"></ImageSmall>
    </th>
  </tr>
  <tr>
    <th width="20%"><h2 className="warm left">Backgrounds</h2></th>
    <th width="80%">
      <p>Single-colored backgrounds come for free. For more complex backgrounds, my rate is $16/hr.</p>
    </th>
  </tr>
  <tr>
    <th width="20%"><h2 className="warm left">Designs, Collages, Misc.</h2></th>
    <th width="80%">
      <p>Pitch me your idea and we'll see what I can do! My rate is $16/hr.</p>
    </th>
  </tr>
  
</table>
</div>
  );
}

function TOS(){
  return(
    <div>
      <table>
        <tr>
          <th width="20%"><h2 className="warm left">Terms of Service</h2></th>
          <th width="80%">
            <p>By commissioning me, you accept the following terms of service:</p>
            <p>1. I reserve the right to turn down any commission.</p>
            <p>2. I retain all rights to my artwork.</p>
            <p>3. I am free to post, share, and/or add your commissioned work to my portfolio unless otherwise requested.</p>
            <p>4. You must credit me (cdinhart) where my art is displayed. Do not steal, trace, or claim my work as your own.</p>
          </th>
        </tr>
      </table>
    </div>
  );
}

function Links(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
    <div>
      <a href="https://cdinhart.gumroad.com/l/popculturewiki" target="_blank"><button class="big-button">POETRY BOOK</button></a>
      <a href="https://instagram.com/cdinhart" target="_blank"><button class="big-button">INSTAGRAM</button></a>
      <a href="https://artfol.me/cdinhart" target="_blank"><button class="big-button">ARTFOL</button></a>
    </div>
  );
}

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
    if(this.state.size != "image-wide"){
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
