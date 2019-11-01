import React, { Component } from "react";

 
class Sidenav extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Nielsen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link " href="#">Dashboard <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Reports</a>
      <a className="nav-item nav-link" href="#">Admin</a>
      <a className="nav-item nav-link" href="#">Help</a>
     
    </div>
  </div>
</nav>
</div>

    );
  }
}
 
export default Sidenav;