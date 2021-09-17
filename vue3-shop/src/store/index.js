import { createStore } from 'vuex'

export default createStore({
    state: {
        name: 'vue3',
        // cartList: {
        //     [shopId]: {
        //         [productId]: {}
        //     }
        // }

        cartList: {}
    },
    mutations: {
        changeName(state, payload) {
            state.name = payload
        },
        changeCart (state, payload) {
            const { shopId, productId, productInfo, num } = payload
            let products = state.cartList[shopId]
            if (!products) {
                products = {}
            }
            let product = products[productId]
            if (!product) {
                product = productInfo
                product.count = 0
            }
            product.count += num
            if (num > 0) {
                product.check = true
            }
            if (product.count < 0) {
                product.count = 0
            }

            products[productId] = product
            state.cartList[shopId] = products
        },
        changeProductCheck (state, payload) {
            const { shopId, productId } = payload
            const product = state.cartList[shopId][productId]
            product.check = !product.check
        },
        clearCartProducts(state, payload) {
            const { shopId } = payload
            state.cartList[shopId] = {}
        },
        setCartProductsCheck(state, payload) {
            const { shopId } = payload
            const products = state.cartList[shopId]
            if (products) {
                for (let key in products) {
                    const product = products[key]
                    product.check = true
                }
            }
        }
    },
    actions: {
        changeName(ctx, payload) {
            ctx.commit('changeName', payload)
        }
    },
    modules: {},
})