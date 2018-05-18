import shop from '../../api/shop'

// 初始化状态
const state = {
  all: []
}
// 获得所有产品的计算属性
const getters = {
  allProducts: state => state.all
}
// 状态操作方法
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  imcreaseNum (state, {id}) { // 找到对应产品,增加数量
    const product = state.all.find(product => product.id === id)
    product.inventory++
  },
  decrementProductInventory (state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },
  resetProductInventory (state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory = 0
  }
}
// 提交产品,执行Action是dispatch分发
const actions = {
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  },
  // 增加数量
  addNum ({commit}, product) {
    return commit('imcreaseNum', { id: product.id })
  },
  // 减少数量
  deNum ({commit}, product) {
    return commit('decrementProductInventory', { id: product.id })
  },
  resetNum ({commit}, product) {
    return commit('resetProductInventory', { id: product.id })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
