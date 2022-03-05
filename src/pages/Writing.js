import React from 'react';

function Writing(){
  document.documentElement.setAttribute("planet-size", "small");
  return(
      <table width="100%">
        <tr>
          <th width="20%"><h2 className="warm">Prose</h2></th>
          <th width="80%">
            <Pub link="https://www.indigoliteraryjournal.com/issue-four/ct-dinh" title="2139" press="Indigo Lit"></Pub>
            <Pub link="https://flashpointsf.com/2021/04/09/deploy/" title="DEPLOY" press="Flash Point SF"></Pub>
            <Pub link="https://www.ampleremains.com/01ctdinh.html" title="Doppelgänger" press="Ample Remains"></Pub>
            <Pub link="https://www.polluxjournal.com/issue-1/c-t-dinh" title="Parallel // Structure" press="Pollux Journal"></Pub>
            <Pub link="https://www.interstellarlit.com/issue-02/machine-unlearning" title="MACHINE UNLEARNING" press="Interstellar Lit"></Pub>
          </th>
        </tr>
        
        <tr>
          <th width="20%"><h2 className="warm">Poetry</h2></th>
            <th width="80%">
              <Pub link="https://journaloferato.squarespace.com/issue-two" title="ROCK YOU / Champions" press="journal of erato"></Pub>
              <Pub link="https://issuu.com/paracosmliteraryjournal/docs/issue_01_metamorphosis__4_" title="In There / Alter Egos / Superpower" press="Paracosm Lit"></Pub>
              <Pub link="images/writing/quantum_entanglement.jpg" title="Quantum Entanglement"></Pub>
              <Pub link="https://www.interstellarlit.com/issue-02/escapist-playlist" title="Escapist Playlist" press="Interstellar Lit"></Pub>
              <Pub link="http://strangehorizons.com/poetry/city-girls/" title="city girls" press="Strange Horizons"></Pub>
              <Pub link="https://www.indigoliteraryjournal.com/caroline-dinh" title="Overlay / Interview with an Olympian" press="Indigo Literary Journal"></Pub>
            </th>
        </tr>

        <tr>
          <th width="20%"><h2 className="warm">Zines</h2></th>
            <th width="80%">
              <Pub link="https://cdinhart.gumroad.com/l/popculturewiki" title="The All-Devouring Pop Culture Wiki" press="2021"></Pub>
            </th>
        </tr>
      </table>
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

export default Writing;