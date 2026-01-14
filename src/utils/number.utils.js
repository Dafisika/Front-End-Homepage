export function currencyFormat(price) {
    return price > 1000 ? price / 1000 + "K" : price;
}
