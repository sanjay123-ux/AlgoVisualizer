import React from "react";
import { NavLink } from "react-router-dom";

import BinaryThumb from "./thumbs/binary.jpg";
import NQueensThumb from "./thumbs/nqueens.jpg";
import PathThumb from "./thumbs/path.jpg";
import SortingThumb from "./thumbs/sorting.jpg";


import MaskedStyleSVG from "./svg/maskShapesNew.svg";

const maskStyles = {
  margin: "0 auto",
  textAlign: "center",
  backgroundImage: `url(${MaskedStyleSVG})`,
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  width: "auto",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};
export default class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="text-center text-light">
          <h1 style={maskStyles} className="maskText mt-1">
            ALGO
            <br />
            VISUALIZER
            <br /> <br /> 
          </h1>
        </div>
        <center>
          <div className="row">
            <div className="col">
              <NavLink to="/pathfinder">
                <img
                  className="img-fluid w-20 h-100 shadowB"
                  src={PathThumb}
                  alt="Path Finding"
                  
                />
                <p className="text-dark font-weight-bold thumb-title heading">PathFinder</p>
              </NavLink>
            </div>
            <div className="col">
            <a href="https://xenodochial-darwin-bd74c7.netlify.app/">
            <img
                  className="img-fluid w-20 h-100 shadowB"
                  src={SortingThumb}
                  alt="Sorting"
                />
</a>   
                <p className="text-dark font-weight-bold thumb-title heading">Sorting</p>
             
            </div> </div> <br /> <br /> <br /> <br />
            <div className="row">
            <div className="col">
              <NavLink to="/searching">
                <img
                  className="img-fluid w-20 h-100 shadowB"
                  src={BinaryThumb}
                  alt="Searching"
                />
                <p className="text-dark font-weight-bold thumb-title heading">Searching</p>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/n-queens-problem">
                <img
                  className="img-fluid w-20 h-100 shadowB"
                  src={NQueensThumb}
                  alt="NQueens"
                />
                <p className="text-dark font-weight-bold thumb-title heading">N-Queens</p>
              </NavLink>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
