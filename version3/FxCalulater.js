class FxCalulater {
  #TRADE_VOLUME = 10000

  #payment_symbol_is_jpy
  #lots
  #entry_price
  #loss_cut_price

  constructor(data) {
    this.#payment_symbol_is_jpy = data.payment_symbol_is_jpy
    this.#lots                  = data.lots
    this.#entry_price           = data.entry_price
    this.#loss_cut_price        = data.loss_cut_price
  }

  get trade_volume() {
    return this.#TRADE_VOLUME
  }

  get pips() {
    return this.#calc_pips()
  }

  #calc_pips() {
    const n = 100
    // TODO_1: 他の決済通過にも対応させる
    // const n = this.#payment_symbol_is_jpy ? 100 : <<?>>
    return Math.abs((
      (this.#entry_price * n) - (this.#loss_cut_price * n)
    ).toFixed(1))
  }

  #convert_pips_to_currency() {
    // クロス円用の処理
    if (this.#payment_symbol_is_jpy)
      return this.#calc_pips() / 100 * this.#lots
    // TODO_2: 他の決済通過にも対応させる
    // } else {
    //   console.log('(未実装)payment_symbol_is_jpy をtrueにしてください')
    // }
  }

  get trading_profit_loss() {
    return this.#trading_profit_loss()
  }

  #trading_profit_loss() {
    return this.#calc_pips() * this.#lots / 100
  }

}
