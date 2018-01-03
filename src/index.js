import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

require('dotenv').config();
const YOUTUBE_API_KEY="AIzaSyC8Cw5bbxMkv8AXqD4d893_pWT6VA-GkyY";

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.searchVideos("React js")
    
  }
  
  searchVideos(term) {
    YTSearch(
      {
        key: YOUTUBE_API_KEY,
        term: term
      },
      (data) => this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    );
  }
  render() {
    const handleSearch = _.debounce(term => {this.searchVideos(term)}, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={handleSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#App')
);