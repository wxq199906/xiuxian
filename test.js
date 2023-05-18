function generateDish() {
  const dishes = ['辣子鸡', '螺蛳粉', '火锅', '饺子', '毛血旺', '酸辣粉'];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  const dish = dishes[randomIndex];
  document.getElementById('result').innerHTML = dish;
}
