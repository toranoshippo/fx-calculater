class FxCalulater {
  #lots
  #pips

  constructor(data) {
    this.#lots = data.lots
    this.#pips = data.pips
  }

  get pips() {
    return this.#pips
  }

  get trading_profit_loss() {
    return this.#trading_profit_loss()
  }

  #trading_profit_loss() {
    return this.#pips * this.#lots / 100
  }

}
