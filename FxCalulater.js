class FxCalulater {
  #TRADE_VOLUME = 10000

  #payment_symbol_is_jpy
  #loss_amount
  #entry_price
  #loss_cut_price

  constructor(data) {
    this.#payment_symbol_is_jpy = data.payment_symbol_is_jpy
    this.#loss_amount           = data.loss_amount
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
      return this.#calc_pips() / 100
    // TODO_2: 他の決済通過にも対応させる
    // } else {
    //   console.log('(未実装)payment_symbol_is_jpy をtrueにしてください')
    // }
  }

  get position_size() {
    return this.#calc_position_size()
  }

  #calc_position_size() {
    return Math.floor(this.#loss_amount / this.#convert_pips_to_currency())
  }

  get lot() {
    return this.#calc_lot()
  }

  #calc_lot() {
    const lot = this.#calc_position_size() / this.#TRADE_VOLUME
    return Math.round(lot * 100) / 100
  }
}
