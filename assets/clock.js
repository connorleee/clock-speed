function initLocalClocks(){
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
        for (let k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg';
            elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';

            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
    }
}

initLocalClocks()