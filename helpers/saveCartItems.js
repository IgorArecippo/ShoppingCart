const saveCartItems = () => {
  const cartItems = document.getElementsByClassName('cart__items');
  const itemsSalvos = cartItems.innerHTML;
  // console.log(itemsSalvos);
  localStorage.setItem('cartItems', '');
  localStorage.setItem('cartItems', itemsSalvos);
};
saveCartItems();
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
