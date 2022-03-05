import React from 'react';
import Image from '../components/Image';

function GraphicDesign(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
    <div key="design">
      <Image source="images/dcc_logo_darkbg.svg" title="DCC Design Tourney 2022 - entry">Entry for DCC Design Tourney 2022</Image>
      <Image source="images/fortherecord/poster2-cmyk.jpg" title="For The Record" alt="A poster with a concert photo in the top right corner, audience filled with recording phones. Below the concert photo, the text 'FOR THE RECORD.' On the left side of the poster, two QR codes (one for Android, one for iOS). Beneath the barcodes, text reading: 'AN AR INVESTIGATION. WHY MUST WE TAPE / TAG / TEXT / STREAM / SHARE / SELFIE / STATUS UPDATE / SNAPSHOT / SAVE / DOCUMENT EVERY MOMENT?'">
        <p>Poster for my augmented reality installation / collage "For The Record" (2021) Learn more about this project under the "tech" section of my portfolio.</p>
      </Image>
      <Image source="images/backslash/backslash_brand_kit.jpg" title="Backslash Lit">
        <p>Graphics and branding kit for <a href='https://backslashlit.com/' target='_blank'>Backslash Lit</a> (2021)</p>
      </Image>
      <Image source="images/reinvented/changemakers.jpg" title="Reinvented Magazine">
        <img className="expanded split-column" src="images/reinvented/card1.jpg"></img>
        <img className="expanded split-column" src="images/reinvented/card2.jpg"></img>
        <img className="expanded" src="images/reinvented/postcard.jpg"></img>
        <img className="expanded split-column" src="images/reinvented/reinventathon_fullcolor.png"></img>
        <img className="expanded split-column" src="images/reinvented/reinventathon_singlecolor.png"></img>
        <p>Graphics and spreads designed as part of <a href="https://www.reinventedmagazine.com/" target="_blank">Reinvented Magazine's</a> creative team.</p>
      </Image>
    </div>
  );
}


export default GraphicDesign;