const main = () => {
  const data = {
      payment_symbol_is_jpy : true
    , loss_amount    : document.getElementById('loss_amount').value   // 最大許容損失額
    , entry_price    : document.getElementById('entry_price').value   // エントリー価格
    , loss_cut_price : document.getElementById('loss_cut_price').value// ロスカット価格
  }

  if (_validate(data) === 999) {
    alert('未入力項目あり')
    return
  }

  const fx = new FxCalulater(data)
  alert(
    `
    取引数量:${fx.trade_volume}\n
    pips:${fx.pips}\n
    推奨ロットサイズ:${fx.lot}
    `
  )
}

const _validate = data => {
  for (let v in data) {
    if (data[v] === '') return 999
  }
  return 0
}