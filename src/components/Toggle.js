import React from 'react';

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

export default Toggle;