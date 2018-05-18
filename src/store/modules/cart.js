// import shop from '../../api/shop'

const state = {
  added: []
}
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.added.map(({id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        totalPrice: (product.price * quantity).toFixed(2)
      }
    })
  }
}
const mutations = {
  pushProductToCart (state, {id, quantity}) {
    if (quantity === 0) return
    for (var index in state.added) {
      if (state.added[index].id === id) {
        quantity += state.added[index].quantity
        state.added.splice(index, 1)
      }
    }
    state.added.unshift({
      id,
      quantity: quantity
    })
  }
}
const actions = {
  addToCart ({commit}, product) {
    commit('pushProductToCart', {id: product.id, quantity: product.inventory})
    commit('resetProductInventory', { id: product.id }) // 添加后数量重置
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
