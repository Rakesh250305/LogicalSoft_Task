import React from 'react'

const ProductCard = ({ product }) => {

    const handlelike = () => {
        alert("Added to favourites");
    }
  return (
    <div>
        <div className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <button className='rounded border bg-red-400 p-2 active:scale-90' onClick={handlelike} > Add to favourites</button>
          <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
            Add to Cart
          </button>
       </div>

      
    </div>
  )
}

export default ProductCard 
