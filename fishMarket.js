// •	Първи ред – цена на скумрията(Mackerel) на килограм. Реално число в интервала [0.00…40.00]
// •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
// •	Трети ред – килограма паламуд(Bonito). Реално число в интервала [0.00…50.00]
// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]

// •	Паламуд – 60% по-скъп от скумрията
// •	Сафрид – 80% по-скъп от цацата
// •	Миди – 7.50 лв. за килограм



function fishMarket(input) {
    let priceForMackerel = Number(input[0]);
    let priceForCaca = Number(input[1]);
    let kilosBonito = Number(input[2]);
    let kilosSafrid = Number(input[3]);
    let kilosMussels = Number(input[4]);
    


    let bonitoPrice = priceForMackerel + (priceForMackerel * 0.60);
    let safridPrice = priceForCaca + (priceForCaca * 0.80);

    let totalSumBonito = kilosBonito * bonitoPrice;
    let totalSumSafrid = kilosSafrid * safridPrice;
    let totalSumMussels = kilosMussels * 7.50;

    let totalSum = totalSumBonito + totalSumMussels + totalSumSafrid;

    console.log(totalSum.toFixed(2));

}

fishMarket([6.90, 4.20, 1.5, 2.5, 1])