require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  it('testa se a função fetch foi chamada.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('verifica se a função utiliza o endpoint correto.', async () =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('verifica se o restorno da função possui a eestrutura de dados correta.', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
  it('testa se a função retorna um erro caso chamada sem argumentos.', async () => {
    expect(fetchProducts('')).resolves.toThrow(new Error('You must provide an url'));
  });
});
