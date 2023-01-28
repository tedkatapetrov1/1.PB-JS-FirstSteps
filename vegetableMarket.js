// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]


// Да се отпечата на конзолата едно число: приходите от всички плодове и зеленчуци в евро.
// Резултата да се форматира до втория знак след десетичния разделител.


function vegetableMarket(input) {
    let priceForKiloVegs = Number(input[0]);
    let priceForKiloFruits = Number(input[1]);
    let totalKiloVegs = Number(input[2]);
    let totalKiloFruits = Number(input[3]);

    let sumVegs = priceForKiloVegs * totalKiloVegs;
    let sumFruits = priceForKiloFruits * totalKiloFruits;

    let totalSum = ((sumVegs + sumFruits) / 1.94).toFixed(2);

    console.log(totalSum);
}

vegetableMarket([0.194, 19.4, 10, 10])