const _products = [
  {'id': 1, 'title': 'MiBook Air', 'price': 599.99, 'inventory': 2},
  {'id': 2, 'title': 'MateBook X', 'price': 800.99, 'inventory': 10},
  {'id': 3, 'title': 'MacBook Pro', 'price': 999.99, 'inventory': 5}
]
export default {
  // 异步返回
  getProducts (cb) {
    setTimeout(() => {
      return cb(_products)// 将产品信息传递给子组件
    }, 100)
  }
}
