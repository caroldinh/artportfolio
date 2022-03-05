import React from 'react';
import ImageSmall from '../components/ImageSmall';
import {Link} from "react-router-dom";

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

export default Commissions;