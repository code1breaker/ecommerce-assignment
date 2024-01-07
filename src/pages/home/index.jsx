import Filter from '../../components/filter/Filter'
import Products from './Products'

const Home = () => {

  return (
    <div className='py-3'>
      <h1 className='text-2xl text-center'>Products</h1>
      <div className='flex justify-around gap-5 my-2'>
        <Filter />
        <Products />
      </div>
    </div>
  )
}

export default Home
