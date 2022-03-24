import React from 'react';
import {Link} from "react-router-dom";

function Home(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
    <div class="about-me">
      <h1>FEATURES ✦</h1>
      <p>✦ <a href="https://contralto.herokuapp.com/" target="_blank"><strong>Contralto: </strong></a> A Flask app analyzing the gender diversity of your Spotify playlists.</p>
      <p>✦ <a href="https://www.instagram.com/p/CXuBLScFE2K/?utm_source=ig_web_copy_link" target="_blank"><strong>For The Record:</strong></a> An AR collage investigating the culture of documentation.</p>
      <p>✦ <a href="https://cdinhart.gumroad.com/l/popculturewiki" target="_blank"><strong>The All-Devouring Pop Culture Wiki:</strong></a> 15 poems about TVTropes, identity, superheroes, girls in movies, nostalgic rock anthems, and growing up on screens.</p>
      <br></br>
      <Link className="cool" to="/about"><strong>About + Contact</strong></Link><br></br>
      <Link className="cool" to="/commissions"><strong>Commissions</strong></Link><br></br>
      <Link className="warm" to="/design-notes"><strong>Design Notes</strong></Link>
    </div>
  );
}

export default Home;