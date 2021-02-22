import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611',
    name: 'Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    on_sale: true,
    regular_price: 10,
    actual_price: 10,
    discount_percentage: '12%',
    installments: '3x R$ 39,97',
  },
  {
    id: uuidv4(),
    image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946',
    name: 'Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    on_sale: true,
    regular_price: 10,
    actual_price: 10,
    discount_percentage: '12%',
    installments: '3x R$ 39,97',
  },
  {
    id: uuidv4(),
    image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578',
    name: 'Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    on_sale: true,
    regular_price: 10,
    actual_price: 10,
    discount_percentage: '12%',
    installments: '3x R$ 39,97',
  },

]

export default data;