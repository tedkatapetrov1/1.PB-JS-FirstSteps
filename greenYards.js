function greenYards (input) {

    let squareMeters = Number(input[0]);
    let price = squareMeters * 7.61;
    let discount = 0.18 * price;
    let finalPriceForTheProduct = price - discount;
    
    console.log(`The final price is: ${finalPriceForTheProduct} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

greenYards (["550"])