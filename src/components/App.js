import React from "react";
import SearchBar from "./SearchBar";
import Axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    Axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization:
          "Client-ID 5d5433b717fc3cf5085f9c672917bba74341d463cdf25610b152c34773a3dfe2",
      },
    });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
