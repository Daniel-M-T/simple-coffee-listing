import { useState } from 'react'
import CoffeeList from './components/CoffeeList'
import FilterButtons from './components/FilterButtons'

function App() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  return (
    <div className='min-h-screen'>
      {/* Imagen superior */}
      <div className='w-full overflow-hidden'>
        <img
          src="./images/bg-cafe-lg.jpg"
          alt="bg-cafe-lg"
          className='h-[300px] object-fill'
        />
      </div>

      {/* Contenido principal */}
      <main className='relative max-w-6xl mx-8 mt-[-200px] md:mt-[-150px] mb-20'>
        <div className='flex flex-col justify-center bg-card-bg rounded-2xl p-6 md:p-10 shadow-xl relative'>
          {/* Vector decorativo */}
          <div className='absolute top-2 left-1/2 transform -translate-x-1/2 md:top-8 md:right-28 md:translate-x-[20%]'>
            <img
              src="./images/vector.svg"
              alt=""
            />
          </div>
          {/* Título y descripción */}
          <div className='text-center mx-3 md:w-[500px] md:mx-auto md:mt-8 relative'>
            <h1 className='text-heading text-text-primary mb-4'>Our Collection</h1>
            <p className='text-body text-text-secondary'>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
              expertly roasted in small batches and shipped fresh weekly.
            </p>
          </div>

          {/* Filtros */}
          <FilterButtons 
            showAvailableOnly={showAvailableOnly}
            setShowAvailableOnly={setShowAvailableOnly}
          />

          {/* Lista de cafés */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full xl:px-24'>
            <CoffeeList showAvailableOnly={showAvailableOnly} />
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
