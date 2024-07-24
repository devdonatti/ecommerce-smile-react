import React from 'react'

const Banner = () => {
  return (

<div className="bg-cover bg-start text-white py-40 px-6 text-center"style={{ backgroundImage: "url('/img/banner.jpg')" }}>
            <h2 className="text-2xl font-bold mb-2">¡Gran venta de verano!</h2>
            <p className="text-lg mb-4">Descuentos increíbles en toda la colección de verano. ¡No te lo pierdas!</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-bold">Ver ofertas</button>
        </div>
  )
}

export default Banner