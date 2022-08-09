const produto = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (product) => {
  if (!product) {
    return new Error('You must provide an url');
  }
  const link = produto(product);
  const resposta = await fetch(link);
  const results = await (resposta.json());
    console.log(results);
  return results;
};
fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
fetchProducts('computador');