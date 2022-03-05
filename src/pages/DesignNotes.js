import React from 'react';
import Carbonbadge from "react-carbonbadge"

function DesignNotes(){
  document.documentElement.setAttribute("planet-size", "large");
  return(
    <div class="about-me">
      <p>Site built in React & deployed with Firebase Hosting. Headings set in Oswald; subheadings and body set in Mulish.</p>
      
      <p>Theme icons made by <a href="https://www.flaticon.com/authors/good-ware" target="_blank" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>.</p>

      <p>Site icon is based on an image of Saturn's moon Titan (from NASA) and designed by me!</p><br></br>

      <p class="small">This site has a carbon footprint, as all digital activity does. The below estimate counts only this page ("DESIGN NOTES"): the true carbon footprint will be larger because images require more processing power to load. My including this estimate here is not to deter you from web browsing but rather to raise awareness—click on the badge to learn more about your digital carbon footprint.</p>
      
      <Carbonbadge className="badge" darkMode={document.documentElement.getAttribute("data-theme") === "dark"} />
    </div>
  )
}



export default DesignNotes;