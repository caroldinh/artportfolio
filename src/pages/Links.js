import React from 'react';

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

export default Links;