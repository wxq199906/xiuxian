function rollDice() {
  const number = Math.floor(Math.random() * 2 + 1);

  document.getElementById('result').innerHTML = '你选出了' + number;
}
