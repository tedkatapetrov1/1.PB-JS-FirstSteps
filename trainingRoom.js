//От конзолата се четат 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
//Ограничения: 3 ≤ h ≤ w ≤ 100.



function trainingRoom(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let totalH = h - 1;


    let wPlaces = Math.trunc(w / 1.2);
    let hPlaces = Math.trunc(totalH / 0.7);

    let totalPlaces = wPlaces * hPlaces -3;

    console.log(totalPlaces);
}

trainingRoom([15, 8.9])