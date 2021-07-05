import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: "",
    };
  }

  componentDidMount() {
    console.log("Component got rendered on the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  componentDidUpdate() {
    console.log("Component got updated and rerendered on the screen");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

export default App;
