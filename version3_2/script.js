const main = () => {
  const data = {
      lots : document.getElementById('lots').value// 取引数量
    , pips : document.getElementById('pips').value// pips
  }

  if (_validate(data) === 999) {
    alert('未入力項目あり')
    return
  }

  const fx = new FxCalulater(data)
  alert(
    `
    pips:${fx.pips}\n
    利益:${fx.trading_profit_loss}円
    `
  )
}

const _validate = data => {
  for (let v in data) {
    if (data[v] === '') return 999
  }
  return 0
}
