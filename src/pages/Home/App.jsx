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
        {/* <Hero /> */}
        <Trending />
        <p className='py-1 mt-2 bg-amber-200' />
        <Movies />
        <p className='py-1 mt-2 bg-amber-200' />
        <People />
      </MainLayouts>
    </div>
  )
}

export default App
