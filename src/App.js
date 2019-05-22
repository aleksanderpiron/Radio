import React, {Component} from 'react';
import './styles/css/main.css';
import Nav from './components/Nav/Nav';
import AddRadio from './components/AddRadio/AddRadio';
import BottomHub from './components/BottomHub/BottomHub';
import RadioList from './components/RadioList/RadioList';
import radioImage1 from './imgs/radioImg1.png';
import radioImage2 from './imgs/radioImg2.jpg';
import radioImage3 from './imgs/radioImg3.jpg';

class App extends Component{
  state={
    currentStation:'---',
    addStation:{
      modal:false,
      stationName:'',
      stationFreq:90.5
    },
    stations:{
      station1:{
        name:'Putin FM',
        frequency: 66.6,
        radioImg:radioImage1
      },
      station2:{
        name:'Dribble FM',
        frequency: 101.2,
        radioImg:radioImage2
      },
      station3:{
        name:'Doge FM',
        frequency: 99.4,
        radioImg:radioImage3
      },
      station4:{
        name:'Ballads FM',
        frequency: 76.2,
        radioImg:radioImage1
      },
      station5:{
        name:'Maximum FM',
        frequency: 122.4,
        radioImg:radioImage2
      },
    }
  }
  idCounter = Object.keys(this.state.stations).length;
  ChangeStationHandler=(target)=>{
    this.setState({
      currentStation:target
    })
  }
  InputHandler=(event)=>{
    const addStationData = {...this.state.addStation};
    let val = event.target.value;
    if(event.target.id === 'freqInput'){
      addStationData.stationFreq = parseFloat(val);
      console.log(val);
      console.log(addStationData.stationFreq);
      console.log(typeof(addStationData.stationFreq));
    }
    if(event.target.type==='text' && event.target.id !== 'freqInput'){
      addStationData.stationName = val;
    }
    if(event.target.type==='range'){
      addStationData.stationFreq = parseFloat(val);
    }
    this.setState({
      addStation:addStationData
    });
  }
  WheelHandler=(event)=>{
    const addStationData = {...this.state.addStation};
    if(event.deltaY<0){
      addStationData.stationFreq = addStationData.stationFreq + 0.1;
    }
    if(event.deltaY>0){
      addStationData.stationFreq = addStationData.stationFreq - 0.1;
    }
    if(addStationData.stationFreq>160){
      addStationData.stationFreq = 160;
    }
    if(addStationData.stationFreq<60){
      addStationData.stationFreq = 60;
    }
    addStationData.stationFreq = Math.round(addStationData.stationFreq * 10) / 10;
    this.setState({
      addStation:addStationData
    });
  }
  ToggleAddRadioModal=()=>{
    const addStationData = {...this.state.addStation};
    addStationData.modal = !addStationData.modal;
    this.setState({
      addStation:addStationData
    });
  }
  StopPlaying=()=>{
    this.setState({
      currentStation:'---'
    })
  }
  AddStationHandler=()=>{
    const newState = this.state;
    const newId = this.idCounter + 1;
    this.idCounter++;
    newState.stations = {
      ...newState.stations,
      ['station'+newId]:{
        name: this.state.addStation.stationName,
        frequency: this.state.addStation.stationFreq,
        radioImg:radioImage1
      }
    };
    newState.addStation = {
      modal:true,
      stationName:'',
      stationFreq:90.5
    }
    this.setState(newState)
  }
  DeleteStationHandler=()=>{
    const target = this.state.currentStation;
    const oldStations = this.state.stations;
    const newStations = Object.keys(this.state.stations).reduce((obj, item) => {
      if (item !== target) {
        obj[item] = oldStations[item];
      }
      return obj;
    }, {})
    this.setState({
      stations:newStations,
      currentStation:'---'
    })
  }
  render(){
    return (
      <div className="App">
        <div ref={this.refe} className="widget">
          <Nav stop={this.StopPlaying} rotate={this.state.addStation.modal} toggleModal={this.ToggleAddRadioModal}/>
          <RadioList refTest={this.refe} currentStation={this.state.currentStation} changeStation={this.ChangeStationHandler} stationList={this.state.stations}/>
          <BottomHub removeStation={this.DeleteStationHandler} stationList={this.state.stations} currentStation={this.state.currentStation}/>
          <AddRadio addHandler={this.AddStationHandler} wheelHandler={this.WheelHandler} inputHandler={this.InputHandler} value={this.state.addStation} active={this.state.addStation.modal}/>
        </div>
      </div>
    );
  }
}

export default App;
