import React from "react";
import SearchBar from "./SearchBar";
import Axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization:
          "Client-ID 5d5433b717fc3cf5085f9c672917bba74341d463cdf25610b152c34773a3dfe2",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
