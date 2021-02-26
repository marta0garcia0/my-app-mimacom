import { Product } from '../models/product';

const API_URL = 'http://localhost:3000/';

const getProducts = (): Promise<Product[]> =>
  fetch(`${API_URL}grocery`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataParsed: Product[] = data.map((product: Product) => {
        return { ...product, imageUrl: product.image_url };
      });
      return dataParsed;
    });

export { getProducts };
