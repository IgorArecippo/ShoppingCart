require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  it('testa se a função fetch foi chamada.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('verifica se a função utiliza o endpoint correto.', async () =>{
    await fetchItem('MLB1615760527');  
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('verifica se o retorno da função possui a eestrutura de dados correta.', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  it('testa se a função retorna um erro caso chamada sem argumentos.', async () => {
    expect(fetchItem('')).resolves.toThrow(new Error('You must provide an url'));
  });
});
