import React, { Component } from "react"
import { storage } from '../firebase'

import "./css/Discover.css"
import "./css/Tracks.css"
import "./css/Uploads.css"

class Upload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            artist: '',
            genre: '',
            date: '',
            musicFile: null,
            albumArt: null,
        }
    }

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleArtistChange = event => {
        this.setState({
            artist: event.target.value
        })
    }

    handleGenreChange = event => {
        this.setState({
            genre: event.target.value
        })
    }

    handleDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleMusicFileChange = event => {
        this.setState({
            musicFile: event.target.files[0]
        })
    }

    handleAlbumArtChange = event => {
        this.setState({
            albumArt: event.target.files[0]
        })
    }

    handleSubmit = event => {
        const uploadMusicFile = storage.ref(`${this.state.musicFile.name}/${this.state.musicFile.name}`).put(this.state.musicFile);
        uploadMusicFile.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(this.state.musicFile.name)
                    .child(this.state.musicFile.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    });
            });
        const uploadAlbumArt = storage.ref(`${this.state.musicFile.name}/${this.state.albumArt.name}`).put(this.state.albumArt);
        uploadAlbumArt.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(this.state.musicFile.name)
                    .child(this.state.albumArt.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    });
            });
        event.preventDefault()
    }

    render() {
        const { title, artist, genre, date, albumArt, musicFile} = this.state
        console.log("albumArt: ", albumArt)
        console.log("musicFile: ", musicFile)
        return(
			<div className="discover">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <input 
                        type='text' 
                        value={title} 
                        onChange={this.handleTitleChange}
                        />
                    </div>
                    <div>
                        <label>Artist: </label>
                        <input 
                        type='text' 
                        value={artist} 
                        onChange={this.handleArtistChange}
                        />
                    </div>
                    <div>
                        <label>Genre: </label>
                        <select value={genre} onChange={this.handleGenreChange}>
                            <option value="pop">Pop</option>
                            <option value="classic">Classic</option>
                            <option value="house">House</option>
                            <option value="trap">Trap</option>
                        </select>
                    </div>
                    <div>
                        <label>Publish Date: </label>
                        <input 
                        type='text' 
                        value={date} 
                        onChange={this.handleDateChange}
                        />
                    </div>
                    <div>
                        <label>Music File: </label>
                        <input 
                        type='file' 
                        onChange={this.handleMusicFileChange}
                        />
                    </div>
                    <div>
                        <label>Album Art: </label>
                        <input 
                        type='file'  
                        onChange={this.handleAlbumArtChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>            
            </div>
		)
	}
}

export default Upload