import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import Star from "./Assessts/Star.png"
import image_33 from "./Assessts/image_33.png"
import image_34 from "./Assessts/image_34.png"
import image_35 from "./Assessts/image_35.png"
import image_36 from "./Assessts/image_36.png"
import image_37 from "./Assessts/image_37.png"
import image_38 from "./Assessts/image_38.png"
import image_39 from "./Assessts/image_39.png"
import image_40 from "./Assessts/image_40.png"
import Tick from "./Assessts/Tick.png"

function App() {
  return (
    <>
      <div className="bg-sky-500 font-bold text-white text-center py-5 text-lg w-auto">
        Get <span className='underline'>25%</span> off for 12 months: Use ### when you signup
      </div>
      <Navbar></Navbar>
      {/* initial reviews */}
      <div className='flex justify-between px-72 py-7'>
        {/* 1 */}
        <div className='flex flex-col  gap-1'>
          <div className='flex justify-center'>
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
          </div>
          <p>"Amazing Renting System"</p>
        </div>
        {/* 2 */}
        <div className='flex flex-col  gap-1'>
          <div className='flex justify-center'>
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
          </div>
          <p>"Amazing Renting System"</p>
        </div>
        {/* 3 */}
        <div className='flex flex-col gap-1'>
          <div className='flex justify-center'>
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
            <img className='h-5 w-5' src={Star} />
          </div>
          <p>"Amazing Renting System"</p>
        </div>
      </div>

      {/* Section1 */}
      <div className='flex flex-col justify-center items-center gap-5 px-5 py-9 text-center'>
        <h1 className='text-5xl px-2'>Create <span className='text-blue-500 glassy-text'>content at scale.</span></h1>
        <h1 className='text-5xl ' >Social media using AI & Automation.</h1>
        <p className=' px-72 text-center'>Create, schedule, publish, and easily manage your social media content at scale with FeedHive's AI-powered platform.</p>
        <div className='flex gap-4 '>
          <div className='flex items-center gap-1'>
            <img className='h-5 w-5' src={image_34} />
            <img className='h-5 w-5' src={image_33} />
            <img className='h-5 w-5' src={image_35} />
            <img className='h-5 w-5' src={image_36} />
            <img className='h-5 w-5' src={image_37} />
            <img className='h-5 w-5' src={image_38} />
            <img className='h-5 w-5' src={image_39} />
            <img className='h-5 w-5' src={image_40} />
          </div>
          <div className='flex items-center gap-1'><img className='h-5 w-5' src={Tick} /><span> Rated 4.9/5</span></div>
          <div>
            <div className='flex items-center'>
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
            </div>
          </div>
        </div>
        <div className='py-5 '>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50 ">Get Started</button></div>
      </div>
      {/* Section2 */}
      <div>
        
      </div>
      {/* Section3*/}
    </>
  );
}

export default App;
