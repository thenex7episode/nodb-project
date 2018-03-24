import React, { Component } from 'react';
import axios from 'axios'

export default class UpdateSong extends Component {
    constructor(props) {
    super();
    this.state = {
        id: '',
        type: '',
        title: '',
        artist: '',
        album: '',
        cover: '',
    }
    this.songChanges = this.songChanges.bind(this)
    }
        
    componentDidMount(){
        const {id,
            type,
            title,
            artist,
             album,
            cover} = this.props.song
        this.setState({id,
                        type,
                        title,
                        artist,
                        album,
                        cover})
    }

    handleChange (key, value){
        this.setState({
         [key]: value
        })
    }

    songChanges(){
        axios.put(`/api/update/${this.state.id}`, this.state).then(r => {
            this.props.updateSong()
        })
    }
    render() {
        return (
            <div>
            <div>Update Song</div>
                <input value = {this.state.cover} type="text" onChange = {e => this.handleChange('cover', e.target.value )}/>
                <input value = {this.state.artist} type="text" onChange = {e => this.handleChange('artist', e.target.value )}/>
                <input value = {this.state.album} type="text" onChange = {e => this.handleChange('album', e.target.value )}/>
                <input value = {this.state.title} type="text" onChange = {e => this.handleChange('title', e.target.value )}/>
                <button onClick = {e => this.songChanges()}>Submit Changes</button>
                
            </div>
        );
    }
}