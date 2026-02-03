import './App.css'
import Header from './components/Header/Header'
import data from './components/data'
import DishGrid from './components/DishGrid/DishGrid'

function App() {


  return (
    <>
      <Header />
      
      <DishGrid dishes={data}/>
      </>
  )
}

export default App
