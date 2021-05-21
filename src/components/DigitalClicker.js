// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClick = (e) => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render() {
        return(
            <div>
               This button has been clicked <button onClick={this.handleClick} name='Button'>{this.state.timesClicked}</button> times!
                
            </div>
        )
    }

}