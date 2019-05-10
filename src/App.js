import React, {Component} from 'react';
import './styles/css/main.css';
import Nav from './components/Nav/Nav';
import BottomHub from './components/BottomHub/BottomHub';
import RadioList from './components/RadioList/RadioList';

class App extends Component{
  state={
    currentStation:'null',
    stations:{
      putin:{
        name:'Putin FM',
        frequency: '66,6'
      },
      dribble:{
        name:'Dribble FM',
        frequency: '101,2'
      },
      doge:{
        name:'Doge FM',
        frequency: '99,4'
      },
      ballads:{
        name:'Ballads FM',
        frequency: '87,1'
      },
      maximum:{
        name:'Maximum FM',
        frequency: '142,2'
      },
    }
  }

  ChangeStationHandler=(target)=>{
    this.setState({
      currentStation:target
    })
  }

  render(){
    return (
      <div className="App">
        <div className="widget">
          <Nav />
          <RadioList changeStation={this.ChangeStationHandler} stationList={this.state.stations}/>
          <BottomHub currentStation={this.state.currentStation}/>
        </div>
      </div>
    );
  }
}

export default App;
