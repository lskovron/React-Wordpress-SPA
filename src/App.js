import React from 'react';
import './bootstrap.min.css';
import './App.css';
import defaultBackground from './images/default-background.jpg';
import {Header} from './components/Header';
import {HikeList} from './components/HikeList';
import {HikeDetails} from './components/HikeDetails';


class App extends React.Component {
  constructor(props){
    super(props);

    // set initial state
    this.state = {

      background: 'url('+defaultBackground+')',
      title: 'Hikes',

      hikes: [],

      editHike: '',
      editing: false,

    }

  }
  componentDidMount(){
    let hikesURL = "http://localhost:8888/wp-json/wp/v2/hikes";
    fetch(hikesURL)
    .then( response => response.json() )
    .then( response => (
      this.setState({hikes: response})
      )
    )
  }


  render(){
    return (
      <div>

        <Header background={this.state.background} title={this.state.title} />

        <section id="page-content">

          <HikeList 
          hikes={this.state.hikes} 
          viewDetails={this.viewDetails} />

          {/* viewDetails methos will set 'editHike' state attribute and therefore render this component */}
          { this.state.editHike ? (
            <HikeDetails 
            closeDetails={this.closeDetails} 
            editHike={this.editHike}
            deleteHike={this.deleteHike} 
            editing={this.state.editing} 
            id={this.state.editHike}
            hikes={this.state.hikes}
            saveChanges={this.saveChanges}
            editDetails={this.editDetails} />
            ) : '' }

        </section>
      </div>
    );
  }

  viewDetails = (id) => {
    this.setState({editHike:id});
  }

  closeDetails = (e) => {
    //remove the EditHike component
    this.setState({editHike:'',editing:false});
  }

  editHike = (e) => {
    //render the EditHike component
    this.setState({editing:true});
  }

  editDetails = (e, id) => {
    //get index of hike being edited in state.hikes aray
    let index = this.state.hikes.findIndex( hike => hike.id === e.target.dataset.id );
    //make a copy of array
    let hikes = [...this.state.hikes];
    //edit the copy
    console.log(hikes[index]);
    hikes[index][e.target.name] = e.target.value;
    console.log(hikes[index]);
    //set state with edited hikes array
    this.setState({
      hikes: hikes
    })


  }

  saveChanges = () => {
    //remove the EditHike component
    this.setState({editHike:'',editing:false});
  }


  deleteHike = (id) => {
    this.setState({
      hikes: [...this.state.hikes.filter((hike) => hike.id !== id)],
      editHike:''
    })
  }




}

export default App;
