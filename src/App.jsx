import { useState, useEffect } from 'react'
import Card from './components/Card.jsx'
import Modal from './components/Modal.jsx'
import './App.css'

function App() {

  // STATE DECLARATIONS //
  const [apiData, setApiData] = useState(null);  

  const [cart, setCart] = useState([])

  // API DATA FETCHING //
  useEffect(() => {

    // DATA FATCH HELPER FUNCTION // 
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const resJSON = await res.json()
        console.log('fetched data', resJSON)
        setApiData(resJSON)
      } catch (error) {
        throw new Error('Failed to fetch data from Api')
      }
    }

    fetchData();
  },[])



  // ADD TO CART FUNCTION // 
  const addToCart = (item) => {

    setCart((prevCart) => [...prevCart, item]);
    console.log(cart)
  }


  // RETURN STATEMENT // 
  return (
    <>
      <div className="text-6xl font-bold">Mock Store</div>
      
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 ml:grid-cols-3 lg:grid-cols-4 gap-x-10'>
            {apiData ? 
            apiData.map((el) => (
              <Card key={el.id} pImage={el.image} pName={el.title} pPrice={el.price} pDesc={el.description} addToCart={addToCart}/>
            ))
            :
            <div>Loading...</div>
            }
          </div>
        </div>

      </div>

    </>
  )
}

export default App
