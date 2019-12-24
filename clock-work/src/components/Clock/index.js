import React, { Component } from 'react';

class Clock extends Component {
    
    componentDidMount = () => {
        this.initLocalClocks();
        this.setUpMinuteHands();
        this.moveSecondHands();
    }

    initLocalClocks = () => {
        let date = new Date;
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();

        // array of objects with each hand and it's angle in degrees
        let hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6)
            },
            {
                hand: 'seconds',
                angle: (seconds * 6)
            }
        ];

        // Loop through each hand and set the angle
        for (let j = 0; j < hands.length; j++) {
            let elements = document.querySelectorAll("." + hands[j].hand);
            console.log(elements)
            for (let k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg';
                elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';

                if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }
    }

    setUpMinuteHands = () => {
        let containers = document.querySelectorAll('.minutes-container');
        let secondAngle = containers[0].getAttribute('data-second-angle');
        if (secondAngle > 0) {
            let delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
            setTimeout(function () {
                this.moveMinuteHands(containers);
            }, delay);
        }
    }

    moveMinuteHands = (containers) => {
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.webkitTransform = 'rotateZ(6deg)';
            containers[i].style.transform = 'rotateZ(6deg)';
        }
        setInterval(function () {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 12;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
            }
        }, 60000);
    }

    moveSecondHands = () => {
        var containers = document.querySelectorAll('.seconds-container');
        setInterval(function () {
            for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 6;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
            }
        }, 1000);
    }

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