import './App.scss';
import React from 'react';
import Header from "./components/Header/Header";
import Vids from './data/video-details.json';
import BodyMain from './components/BodyMain/BodyMain';

class App extends React.Component {
  state = {
    Vids: Vids,
    currentVideo: Vids[0]
  }

  changeVideo = (id) => {
    const newVideoId = this.state.Vids.findIndex(video => id === video.id)
    this.setState({
      currentVideo:this.state.Vids[newVideoId]
    })
  }

  render() {
    return (
    <>
        <Header/>
        <BodyMain
          Vids={this.state.Vids}
          currentVideo={this.state.currentVideo}
          changeVideo={this.changeVideo}
          />
      </>
    );
  }
}

export default App;
