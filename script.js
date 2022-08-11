// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require("./helpers/fetchItem");

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.addEventListener('click', async () => {
    const item = await fetchItem(sku);
    const { id, title, price } = item;
    const destructured = { sku: id, name: title, salePrice: price };
    const create = createCartItemElement(destructured);
    const itens = document.querySelector('.cart__items');
    itens.appendChild(create);
  });
  section.appendChild(btn);

  return section;
};

const showProducts = async () => {
  const produtos = await fetchProducts('computador');
  const itens = document.querySelector('.items');
  produtos.results.forEach((e) => {
    itens
    .appendChild(createProductItemElement({ sku: e.id, name: e.title, image: e.thumbnail }));
  });
};

window.onload = () => {
  showProducts();
};
