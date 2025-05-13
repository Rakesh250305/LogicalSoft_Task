import React from 'react'
import ProductCard from './ProductCard';

const Products = () => {

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "../assets/headphone.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: ""
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    image: ""
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1299,
    image: ""
  }
];

  return (
    <div>
        <section className="p-6 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {sampleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>

      
    </div>
  )
}

export default Products
