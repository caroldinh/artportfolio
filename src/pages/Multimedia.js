import React from 'react';
import Image from '../components/Image';

function Multimedia(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div key="media"> 
      <Image title="Contralto (Flask)" source="images/contralto.jpg">
        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/U8oWKvA5aHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
        <p>Development in progress: A web app to estimate the gender-diversity of a Spotify playlist and generate artist recommendations. Built with Flask, MySQL, and Spotify API.</p>
      </Image>
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
        <p>A series of generative art pieces created in Java with Processing.</p>
      </Image>

      <Image title="For The Record: An AR Collage" source="images/fortherecord/screenshot1.jpg">
        <img className="expanded" src="images/fortherecord/screenshot2.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot3.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot4.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot5.jpg"></img>
        <img className="expanded" src="images/fortherecord/screenshot6.jpg"></img>
        <img className="expanded" src="images/fortherecord/poster2-cmyk.jpg"></img>
        <p><b>For The Record: </b>HDCC105 final project (2021)</p>
        <p>"For The Record" is an AR collage exploring the relationship between your camera app and present experience. How does documentation impact your ability to "enjoy the moment?" How is your brain shaped by the tools you hold? Hold the AR app up to the poster to access the experience.</p>
        <p>Built in Unity. Poster designed in Photoshop. Click <a href="https://www.instagram.com/p/CXuBLScFE2K/" target="_blank">here</a> for a video demo.</p>
      </Image>

      <Image title="Archie (Discord.py)" source="images/archie/archie.jpg" >
        <img className="expanded" src="images/archie/archie2.jpg"></img>
        <img className="expanded" src="images/archie/archie3.jpg"></img>
        <img className="expanded" src="images/archie/archie4.jpg"></img>
        <p><b>Archie</b> (2021)</p>
        <p>A Discord bot to archive inactive channels, built with Discord.py and deployed on Heroku. <a href='https://top.gg/bot/857027766976118806' target='_blank'>Add Archie to your Discord server.</a></p>
        <p></p>
      </Image>

      <Image title="Backslash Lit (Jekyll, p5.js)" source="images/backslash/issues.jpg">
        <img className="expanded" src="images/backslash/i4.jpg"></img>
        <img className="expanded" src="images/backslash/i5.jpg"></img>
        <img className="expanded" src="images/backslash/home.jpg"></img>
        <p>I designed the website for my digital zine, <a href="https://backslashlit.com" target="_blank">Backslash Lit</a>, and implemented experimental issue layouts using p5.js.</p>
      </Image>

      <Image title="Picnic (Django)" source="images/picnic/screenshot1.jpg">
      <iframe width="100%" height="500px" src="https://www.youtube.com/embed/2vUomGoD-gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
        <p><b>Picnic</b> (2020)</p>
        <p>A critique app for developing artists.</p>
      </Image>


    </div>
  );
}

export default Multimedia;