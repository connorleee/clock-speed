funciton initLocalClocks(){
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

    for (let j= 0; j < hands.length; j++){
        let elements = document.querySelectorAll("." + hands[j].hand);
    }
}