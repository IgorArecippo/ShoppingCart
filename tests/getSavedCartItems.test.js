const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se a função chama o método correto', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('testa se a função chama com o parâmetro correto', async () => {
    await getSaveCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
