import axios from "axios";
import React, { Component } from "react";
import "./Planets.css";

class Planets extends Component {
  state = {
    planets: [],
    page: 1,
  };

  componentDidMount() {
    this.getData(1);
  }

  getData = (page) => {
    axios.get("https://swapi.dev/api/planets/?page=" + page).then((res) => {
      this.setState({
        planets: res.data.results,
      });
    });
  };

  render() {
    const planetsList = this.state.planets.map((planet, index) => {
      return <p key={index}>{planet.name}</p>;
    });
    return (
      <div>
        {planetsList.length ? planetsList : <p>Loading.....</p>}
        <div>
          <span className="pageItem" onClick={() => this.getData(1)}>
            1
          </span>
          <span className="pageItem" onClick={() => this.getData(2)}>
            2
          </span>
          <span className="pageItem" onClick={() => this.getData(3)}>
            3
          </span>
          <span className="pageItem" onClick={() => this.getData(4)}>
            4
          </span>
          <span className="pageItem" onClick={() => this.getData(5)}>
            5
          </span>
          <span className="pageItem" onClick={() => this.getData(6)}>
            6
          </span>
        </div>
      </div>
    );
  }
}

export default Planets;
