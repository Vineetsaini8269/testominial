import './App.css';
import reviews from './data';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div className=' bg-gray-200 flex fle-col w-[100vw] h-[100vh] justify-center items-center '>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimorials</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonial reviews ={reviews}/>
      </div>
    </div>
  );
}

export default App;
