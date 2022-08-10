const item = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  // seu código aqui
  if (!id) {
    return new Error('You must provide an url');
  }
  const link = item(id);
  const resposta = await fetch(link);
  const result = await resposta.json();
  // console.log(result);
  return result;
};
// fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
