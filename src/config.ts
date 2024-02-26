const links = {
  coinPrice: (coin: string) =>
    `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`,
  listCoins: "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
}
const errors = {
  coinIsAdded: "Такой тикер уже добавлен",
  coinNotFound: "Такой тикер не найден"
}
const authorization = "8eeac640f75e175be422bd2010f05530ebc854f8a3d5eed849ace17b045c4f72"
export { links, errors, authorization }
