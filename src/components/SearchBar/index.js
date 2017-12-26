import React, { Component } from 'react';

class SearchBar extends Component {
  
  handleInputChange(event) {
    console.log("onChange event: ",event.target.value);
  }
  
  render() {
    return <input onChange={this.handleInputChange}/>;
  }
  
}

export default SearchBar;