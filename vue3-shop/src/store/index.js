import { createStore } from 'vuex'

const setCartListCache = (state) => {
    const { cartList = {} } = state
    localStorage.cartList = JSON.stringify(cartList)
}

const getCartListCache = () => {
    const cartList = localStorage.cartList || '{}'
    return JSON.parse(cartList)
}

export default createStore({
    state: {
        name: 'vue3',
        // cartList: {
        //     [shopId]: {
        //         shopName: [shopName],
        //         productList: {
        //             [productId]: {}
        //         }
        //     }
        // },

        cartList: getCartListCache()
    },
    mutations: {
        changeName(state, payload) {
            state.name = payload
        },
        changeCart (state, payload) {
            const { shopId, productId, productInfo, num } = payload
            let cartItem = state.cartList[shopId]
            if (!cartItem) {
                cartItem = {shopName: '', productList: {}}
            }
            let product = cartItem.productList[productId]
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

            cartItem.productList[productId] = product
            state.cartList[shopId] = cartItem
            setCartListCache(state)
        },
        changeProductCheck (state, payload) {
            const { shopId, productId } = payload
            const product = state.cartList[shopId].productList[productId]
            product.check = !product.check
            setCartListCache(state)
        },
        clearCartProducts(state, payload) {
            const { shopId } = payload
            state.cartList[shopId].productList = {}
            setCartListCache(state)
        },
        setCartProductsCheck(state, payload) {
            const { shopId } = payload
            const products = state.cartList[shopId].productList
            if (products) {
                for (let key in products) {
                    const product = products[key]
                    product.check = true
                }
            }
            setCartListCache(state)
        },
        changeShopName (state, payload) {
            const { shopId, shopName } = payload
            const cartItem = state.cartList[shopId] || {
                shopName: '',
                productList: {}
            }
            cartItem.shopName = shopName
            state.cartList[shopId] = cartItem
            setCartListCache(state)
        }
    },
    actions: {
        changeName(ctx, payload) {
            ctx.commit('changeName', payload)
        }
    },
    modules: {},
})