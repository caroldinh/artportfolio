import React from 'react';
import Image from '../components/Image';

function Illustration(){
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

export default Illustration;