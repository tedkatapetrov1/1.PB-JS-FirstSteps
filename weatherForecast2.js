function weatherForecast2(input) {
    let weather = Number(input[0]);

    if (weather <= 5.00) {
        console.log("unknown");
    }
    else if (weather <= 11.9) {
        console.log("Cold");
    } else if (weather <= 14.9) {
        console.log("Cool");
    } else if (weather <= 20.00) {
        console.log("Mild");
    } else if (weather <= 25.9) {
        console.log("Warm");
    } else if (weather <= 35.00) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }

}

weatherForecast2(["4"])