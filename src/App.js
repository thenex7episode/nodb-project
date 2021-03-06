import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UpdateSong from './components/UpdateSong' 
import CreateSong from './components/CreateSong'
import Header from './components/Header'
import Artist from './components/Artist'

class App extends Component {
  constructor() {
    super();


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
    this.updateSong = this.updateSong.bind(this)
    this.getSong = this.getSong.bind(this)
    this.state = {
      arr: [],
      input: 'All',
      add: false
    }
  }
// Double parenthesis in setState so you dont have to do return method. Works the same way
  
componentDidMount(){
  this.getSong()
}



getSong() {console.log(this.state.input)
  axios.get(`/api/genre/${this.state.input}` )
  .then(r => {
    this.setState ({arr: r.data, add: false})
    
  }).catch(err => console.log(err))
  
}  

createSong() {
//  this.state.arr.push()
}



    updateSong(id) {
      let newArr = this.state.arr.slice();

      newArr[id].update = true;
      this.setState({arr: newArr})
    }

  deleteSong(id){
    // alert('Really?')
    axios.delete(`/api/delete/${id}`).then(r => {
      this.getSong()
    })
  }

  handleChange(event) {
    this.setState({input:event}, () => this.getSong())
  }

  handleSubmit(){
    let html = ''
    console.log(this.state.arr.length)
    if (this.state.arr.length === 0 ) {
       html  = <p>nothing found</p>
    }else {
     html = this.state.arr.map ((e,i) => { 
       return(<div className='border'> 
                  <img src={e.cover} />

                   {e.update ? <UpdateSong updateSong = {this.getSong}song = {e}/> : 
                    <div>
                      <Artist name={'Artist'} info={e.artist}/>
                      <Artist name= {'Title'}info={e.title}/>
                      <Artist name= {'Album'}info={e.album}/>
                  {/* <p>Artist: {e.artist}</p>
                  <p>Title: {e.title}</p> 
                  <p>Album: {e.album}</p> */}
                  <button onClick = {() => this.deleteSong(e.id)}>delete</button>
                  <button onClick = {() => this.updateSong(i)}>Edit</button>
                  </div>
                   }
                  </div>)
    
    
    
    })
  }
    return html
  }
  

  
  render() {
    // const {arr} = this.state;
    return (
      <div className="App">
      <Header/>
        <select className='select' value={this.state.value} onChange ={e => this.handleChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Rock">Rock</option>
        <option value="Country">Country</option>
        <option value="Espagnol">Espagnol</option>
        <option value="Rap">Rap</option>
        <option value="Pop">Pop</option>
        </select>
        {this.state.add ? <CreateSong createSong = {this.getSong}/> :<button onClick = {e => this.setState({add: true})}>Add Song Here</button>}
      {this.handleSubmit()}
        
      </div>
    );
}
}

export default App;
