function getHandScore(hand) {
    //split input to an array
    let getHand = hand.split(" ");
    let points = 0;
    let sum = 0;
    let faceArr = [];
    let pointObj = {
        S: 0,
        C: 0,
        H: 0,
        D: 0
    };
    for (let i = 0; i < getHand.length; i++) {
        //loop to get suit
        let suit = getHand[i][0];
        //loop to get face and push to faceArr
        let face = getHand[i].substring(1);
        faceArr.push(face);
        // check condition king, queen, jack and ace
        if (face == 'J' || face == 'Q' || face == 'K') {
            face = 10;
        } else if (face == 'A') {
            face = 11;
        }

        //check condition to keep point in pointObj
        if (suit == 'S') {
            pointObj.S += parseInt(face);
        } else if (suit == 'C') {
            pointObj.C += parseInt(face);
        } else if (suit == 'H') {
            pointObj.H += parseInt(face);
        } else if (suit == 'D') {
            pointObj.D += parseInt(face);
        }
    }
    //check condition if three cards with the same rank will get special points
    if (faceArr[0] == 'A' && faceArr[1] == 'A' && faceArr[2] == 'A') {
        points += 35;
    }
    else if (faceArr[0] == faceArr[1] && faceArr[1] == faceArr[2]) {
        points += 32.5;
    }

    //find the max face value
    sum = Math.max(pointObj.S, pointObj.C, pointObj.H, pointObj.D, points)
    console.log(sum)
    return sum
}

getHandScore("S4 S6 C6")
getHandScore("S8 S10 CA")
getHandScore("S8 H8 C8")
getHandScore("SA HA CA")