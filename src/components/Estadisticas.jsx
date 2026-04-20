import React from 'react';

const Estadisticas = () => {
  const datos = [
    { cifra: '+15k', texto: 'Empleos activos' },
    { cifra: '500+', texto: 'Empresas aliadas' },
    { cifra: '24h', texto: 'Respuesta promedio' }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {datos.map((item, index) => (
            <div key={index} className="text-center p-6 border-b md:border-b-0 md:border-r last:border-0 border-gray-100">
              <h3 className="text-4xl font-extrabold text-purple-700 mb-2">{item.cifra}</h3>
              <p className="text-gray-500 font-medium uppercase text-sm tracking-widest">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;