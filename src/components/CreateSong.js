import React, { Component } from 'react';
import axios from 'axios'
export default class CreateSong extends Component {


    constructor(){
    super();
    this.state={
        id: '',
        type: '',
        title: '',
        artist: '',
        album: '',
        cover: '',
    }
this.addSong = this.addSong.bind(this)
}
    

    handleChange (key, value){
        this.setState({
         [key]: value
        })
    }

    addSong() {
        axios.post(`/api/create/${this.state.id}`, this.state).then(r => {
            this.props.createSong()
        })
    }

    render() {
        return (
            <div>
            <div>Create Song</div>
                <input placeholder= 'cover URL' value = {this.state.cover} type="text" onChange = {e => this.handleChange( 'cover', e.target.value )}/>
                <input placeholder= 'type' value = {this.state.type} type="text" onChange = {e => this.handleChange( 'type', e.target.value)}/>
                <input placeholder = 'artist' value = {this.state.artist} type="text" onChange = {e => this.handleChange('artist', e.target.value )}/>
                <input placeholder = 'album'value = {this.state.album} type="text" onChange = {e => this.handleChange('album', e.target.value )}/>
                <input placeholder = 'title'value = {this.state.title} type="text" onChange = {e => this.handleChange('title', e.target.value )}/>
                <button onClick = {e => this.addSong()}>Add Song</button>
            </div>
        );
    }
}
