// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    } 

    handleBitrate = (e) => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = (e) => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleBitrate} className='bitrate'>{this.state.settings.bitrate}</button>
                <br></br><br></br>
                <button onClick={this.handleResolution} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}