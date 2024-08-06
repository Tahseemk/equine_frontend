import { useState } from "react";
import { useCart } from "react-use-cart";


const useAddToCart = () => {
  const [item, setItem] = useState(1);
  const { addItem, items, updateItemQuantity, emptyCart } = useCart();

  console.log("items", items)

  const handleAddItem = (product) => {
    const result = items.find((i) => i.id === product.id);
    if (!result) {
      emptyCart();
      addItem(product, product.quantity);
    }
  };

  const handleIncreaseQuantity = (product) => {
    const result = items?.find((p) => p.id === product.id);
    if (result) {
      updateItemQuantity(product.id, product.quantity + 1);
    }
  };

  return {
    setItem,
    item,
    handleAddItem,
    handleIncreaseQuantity,
  };
};

export default useAddToCart;
