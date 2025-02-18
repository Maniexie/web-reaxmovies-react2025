import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import People from '../../components/People/People'
import Trending from '../../components/Trending/Trending'
import MainLayouts from '../../Layouts/MainLayouts'
import './App.css'

function App() {

  return (
    <div className='min-h-screen'>
      <MainLayouts>
        <Hero />
        <Trending />
        <Movies />
        <People />
      </MainLayouts>
    </div>
  )
}

export default App
