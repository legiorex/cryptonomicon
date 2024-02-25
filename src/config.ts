const links = {
  coinPrice: (coin: string) =>
    `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`,
  listCoins: "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
}
const errors = {
  coinIsAdded: "Такой тикер уже добавлен",
  coinNotFound: "Такой тикер не найден"
}
export { links, errors }
