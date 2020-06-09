import React, { Component } from "react"
import { Link } from 'react-router-dom';

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
            musicfile: null,
            albumart:'',
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
            musicfile: event.target.files
        })
    }

    handleAlbumArtChange = event => {
        this.setState({
            albumart: event.target.files
        })
    }

    handleSubmit = event => {
        
        event.preventDefault()
    }

    render() {
        const linkStyle = {color:"transparent"}
        const { title, artist, genre, date, musicfile, albumart} = this.state
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
                        value={musicfile} 
                        onChange={this.handleMusicFileChange}
                        />
                    </div>
                    <div>
                        <label>Album Art: </label>
                        <input 
                        type='file' 
                        value={albumart} 
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