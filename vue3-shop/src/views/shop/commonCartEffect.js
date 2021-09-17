import { useStore } from 'vuex'

export const useCommonCartEffect = () => {
  const store = useStore();
  const { cartList } = store.state;
  const handleChangeCart = (shopId, productId, productInfo, num) => {
    store.commit("changeCart", { shopId, productId, productInfo, num });
  };

  return {
    cartList,
    handleChangeCart,
  };
};