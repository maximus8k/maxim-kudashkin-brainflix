import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Vids from './data/video-details.json';
import Main from './components/Main/Main';

class App extends React.Component {
  state = {
    Vids: Vids,
    playingVideo: Vids[0]
  }

changeVideo = (id) => {
  const newVideoId = this.state.Vids.findIndex(video => id === video.id)
  this.setState({
    playingVideo:this.state.Vids[newVideoId]
  })
}


  render() {
  return (
   <>
      <Header/>
      <Main
        Vids={this.state.Vids}
        playingVideo={this.state.playingVideo}
        changeVideo={this.changeVideo} 
        />
        
        
      </>
  );
  }
}

export default App;
