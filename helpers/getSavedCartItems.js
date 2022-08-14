const getSavedCartItems = () => {
  // seu código aqui
  const cartItems = document.getElementsByClassName('cart__items');
  cartItems.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
