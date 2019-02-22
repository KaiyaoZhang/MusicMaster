import React, { Component } from 'react';
import Artist from './Artist';
import { error } from 'util';
import Tracks from './Tracks';
import Search from './Search';

const API = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = {artist:null, tracks:[]};

  searchArtist = artistQuery => {
    fetch(`${API}/artist/${artistQuery}`)
    .then(response => response.json())
    .then(json => {
      if(json.artists.total > 0){
        const artist = json.artists.items[0];
        this.setState({artist});

        fetch(`${API}/artist/${artist.id}/top-tracks`)
        .then(response => response.json())
        .then(json => {
          this.setState({tracks:json.tracks});
          console.log(this.state.tracks);
        })
        .catch(error => alert(error.message));
      }
    })
    .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <Search searchArtist={this.searchArtist}/>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default App;
