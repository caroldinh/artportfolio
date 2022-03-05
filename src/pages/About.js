import React from 'react';
import {Link} from "react-router-dom";

function About(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
  <div class="about-me">
      <h1>ABOUT ME ✦</h1>
        <p>Hey there! Call me Carol. I am an artist, writer, and creative coder studying immersive media design. I reside in and study from Piscataway and Nacotchtank land.</p>

        <p>Welcome to my creative portfolio!</p>
        <br></br>
        <Link className="cool" to="/"><strong>Home</strong></Link><br></br>
        <a class="cool" href="https://www.instagram.com/cdinhart/" target="_blank"><strong>Instagram</strong></a><br></br>
        <Link className="warm" to="/design-notes"><strong>Design Notes</strong></Link>
  </div>
  );
}

export default About;