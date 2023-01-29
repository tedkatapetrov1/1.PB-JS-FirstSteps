// 1.	x – височината на къщата – реално число в интервала [2...100]
// 2.	y – дължината на страничната стена – реално число в интервала [2...100]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]




function housePainting(input) {
    let hHouse = Number(input[0]);
    let lengthSideWall = Number(input[1]);
    let hTriangleWallRoof = Number(input[2]);

    let frontWall = hHouse * hHouse - (1.2 * 2);
    let backWall = hHouse * hHouse;

    let oneSideWall = hHouse * lengthSideWall - (1.5 * 1.5);
    let otherSideWall = hHouse * lengthSideWall - (1.5 * 1.5);

    let fourWallsSquare = frontWall + backWall + oneSideWall + otherSideWall;
    let totalRoomGreenPaint = fourWallsSquare / 3.4;

    let firstRoofSquare = hHouse * lengthSideWall * 2;
    let secondRoofSquare = (hHouse * hTriangleWallRoof / 2)* 2;

    let totalRoofRedPaint = (firstRoofSquare + secondRoofSquare) / 4.3;

    console.log(totalRoomGreenPaint.toFixed(2));
    console.log(totalRoofRedPaint.toFixed(2));
}

housePainting([6, 10, 5.2])