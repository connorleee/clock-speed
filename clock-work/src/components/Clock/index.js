import React, { Component } from 'react';

class Clock extends Component {


    render() {
        return (
            <div className="clockContainer">
                <article className="clock">
                    <div className="hours-container">
                        <div className="hours"></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes"></div>
                    </div>
                    <div className="seconds-container">
                        <div className="seconds"></div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Clock;