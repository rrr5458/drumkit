import './App.css';
import AudioPlayer from './components/AudioPlayer';
import AudioPlayerBlack from './components/AudioPlayerBlack'
import Pads from './pages.js/Pads';
import PadsBlack from './pages.js/PadsBlack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages.js/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import Header from './components/Header';
import { Provider } from 'react-redux'
import store from './redux/store';
import Recorder from './components/Recorder';

const Pad1Div = styled.div`
  background-color: #83ff4a;
`
const Pad2Div = styled.div`
  background-color: #000000;
`
const Pad3Div = styled.div`
  background-color: #fbff0e;
`
const Pad4Div = styled.div`
  background-color: #fd56bd;
`

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/green">
              <Header style={{ height: "110px" }} />
              <Pad1Div>
                <AudioPlayer />
                <Pads />
                <Recorder />
              </Pad1Div>
            </Route>
            <Route exact path="/black">
              <Header style={{ height: "110px" }} />
              <Pad2Div>
                <AudioPlayerBlack />
                <PadsBlack />
              </Pad2Div>
            </Route>
            <Route exact path="/yellow">
              <Header style={{ height: "110px" }} />
              <Pad3Div>
                <AudioPlayer />
                <Pads />
              </Pad3Div>
            </Route>
            <Route exact path="/pink">
              <Header style={{ height: "110px" }} />
              <Pad4Div>
                <AudioPlayer />
                <Pads />
              </Pad4Div>
            </Route>
          </Switch>

        </div>
      </Provider>
    </Router>
  );
}

export default App;
