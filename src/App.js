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
import image_47 from "./Assessts/image_47.png"
import image_48 from "./Assessts/image_48.png"
import image_49 from "./Assessts/image_49.png"
import image_50 from "./Assessts/image_50.png"
import main from "./Assessts/main.png"
import Tick from "./Assessts/Tick.png"
import building from "./Assessts/building.mp4"
import building1 from "./Assessts/building1.mp4"
import realestate from "./Assessts/realestate.png"
import visit from "./Assessts/visit.png"
import bg from "./Assessts/bg.png"
import house from "./Assessts/house.mp4"
import image_129 from "./Assessts/image_129.png"
import React, { useState } from 'react'
import ActionCard from './componenets/ActionCard';
import Blogpost from './componenets/Blogpost';
import Expand from './componenets/Expand';
import Steps from './componenets/Steps';
import Testinomial from './componenets/Testinomial';
import HowWeWork from './componenets/HowWeWork';
import Chat from './componenets/Chat';
import AIchat from './componenets/AIchat';
import Footer from './componenets/Footer';
import Logo1 from "./Assessts/Logo1.png"

function App() {
  const [cookies, setCookies] = useState(true);
  return (
    <>
      <div className="bg-sky-500 font-bold text-white text-center py-5 text-lg w-auto">
      <p className="overflow-hidden">
  <span className='inline-block animate-slidein'> Get <span className='underline'>25%</span> off for 12 months: Use ### when you signup </span>
</p>
      </div>
      <Navbar></Navbar>
      {/* initial reviews */}
      <div className='absolute  top-60 -z-10 overflow-hidden'><img className=' opacity-10 w-screen h-auto max-w-full min-w-full  rotate-6' src={bg} /></div> {/*background image */}
      <div className='flex justify-around gap-2 scroll-px-9 py-7 a'>

        {/* 1 */}
        <div className='flex flex-col  gap-1'>
          <div className='flex justify-center '>
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
      <div className='flex flex-col justify-center items-center gap-5 px-5 py-9 text-center animate-slidein'>
        <h1 className='text-5xl px-2'>Create <span className='text-blue-500 glassy-text'>content at scale.</span></h1>
        <h1 className='text-5xl ' >Social media using AI & Automation.</h1>
        <p className='text-center'>Create, schedule, publish, and easily manage your social media content at scale with FeedHive's AI-powered platform.</p>
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
      <div >
        <div className='relative flex justify-center px-40 py-10'>
          <img className='absolute px-40 py-10 z-10  min-w-full' src={main} />
          <img className='absolute px-35 py-10 right-0 z-20' src={image_47} />
          <img className='absolute px-35 py-0 right-52 rotate-12' src={image_48} />
          <img className='absolute px-35 py-10 top-48 left-8 z-40 rotate-45' src={image_49} />
          <img className='absolute px-35 py-10 top-5 left-24 z-30 rotate-12' src={image_50} />
        </div>
      </div>

      {/* Section3*/}
      <div className='pb-12 pt-96 overflow-hidden'>
        <div className='pt-80 pb-12 flex gap-56 justify-center items-center bg-white'>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building} />
            <p>Single & multiple house renting</p></div>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building1} />
            <p>Dormitory and rental housing</p></div>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building1} />
            <p>Commercial Renting</p></div>
        </div>
      </div>

      {/* Section4 */}
      <div>
        <div>
          <div className="flex flex-col justify-center items-center gap-5 py-10 w-full">
            <button className="mt-6 bg-[#7e98f833] text-[#1134b4df] font-bold py-3 px-20 rounded-full items-center ">
              Solution
            </button>
            <h1 className="font-poppins font-extrabold text-3xl text-center">Features</h1>
            <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
          </div>
          <div className="flex gap-8 flex-wrap justify-center max-[872px]:flex-col ">
            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#FF625033] p-5"><img className="w-10 h-10" src={visit}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#FF625033] p-5"><img className="w-10 h-10" src={visit}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#FF625033] p-5"><img className="w-10 h-10" src={visit}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#FF625033] p-5"><img className="w-10 h-10" src={visit}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>

            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#00937933] p-5"><img className="w-10 h-10" src={image_34}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md max-[872px]:w-auto max-[872px]:items-center">
              <div className="rounded-2xl bg-[#F8D57E33] p-5"><img className="w-10 h-10" src={image_37}></img></div>
              <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
              <p className="text-lg font-Mulish font-normal text-center">c amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      {/* Section5 */}
      <div className='py-44 px-4 max-w-screen-2xl'>
        {/* 1 */}
        <div className='flex gap-6 '>
          <div className='flex-1 px-14 pt-28'>
            <div className='flex flex-col gap-6  '>
              <h1 className='text-5xl font-extrabold leading-snug '>Streamline Your Workflow with Effortless E-Signatures!</h1>
              <p className='text-lg font-semibold'>Seal deals in seconds. Sign digitally, hassle-free.</p>
              <div className='flex flex-wrap gap-y-4 pt-4'>
                <div className='flex w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Swift</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Paperless</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Convenient</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Reliable</p>
                </div>.
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src={image_129} />
          </div>
        </div>
        {/* 2 */}
        <div className='flex gap-6 '>
          <div className='flex-1'>
            <img src={image_129} />
          </div>
          <div className='flex-1 px-14 pt-28'>
            <div className='flex flex-col gap-6  '>
              <h1 className='text-5xl font-extrabold leading-snug '>Engage Instantly: Introducing Live Chat for Seamless Interaction!</h1>
              <p className='text-lg font-semibold'>Elevate your website experience with our dynamic Live Chat feature, bridging the gap between you and your audience. Instantly connect, assist, and convert visitors with real-time support and engagement. Maximize your online presence and foster meaningful connections with ease.</p>
              <div className='flex flex-wrap gap-y-4 pt-4'>
                <div className='flex w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Instantaneous</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Interactive</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Seamless</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Engaging</p>
                </div>.
              </div>
            </div>
          </div>

        </div>
        {/* 3 */}
        <div className='flex gap-6 '>
          <div className='flex-1 px-14 pt-28'>
            <div className='flex flex-col gap-6  '>
              <h1 className='text-5xl font-extrabold leading-snug '>Unlock Easy Payments: Your Gateway to Effortless Transactions!</h1>
              <p className='text-lg font-semibold'>Say hello to smooth sailing with our cutting-edge payment feature! Seamlessly handle transactions with ease and confidence, ensuring a hassle-free experience every time.</p>
              <div className='flex flex-wrap gap-y-4 pt-4'>
                <div className='flex w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Effortless</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Smooth</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12 ' src={image_35} />
                  <p className='text-center font-bold'>Seamless</p>
                </div>
                <div className='flex  w-1/2 items-center gap-2'>
                  <img className='w-12 h-12' src={image_35} />
                  <p className='text-center font-bold'>Reliable</p>
                </div>.
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img className="object-cover" src={image_129} />
          </div>
        </div>
      </div>
      {/* Section6 */}
      <ActionCard/>
      {/* Section7 */}
      <Steps/>
      {/* Section8 */}
      <div class="m-2 space-y-2">
  <div
    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabindex="1"
  >
    <div class="flex cursor-pointer items-center justify-between">
      <span> HTML </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>

  <div
    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabindex="2"
  >
    <div class="flex cursor-pointer items-center justify-between">
      <span> CSS </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>

  <div
    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between">
      <span> JAVASCRIPT </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>
</div>

{/* Section10 Cookies */}

{cookies && (
                <div className="fixed sm:left-4 bottom-20 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden z-50 ">
        
        <div class="">
            <div class="relative overflow-hidden px-8 pt-8">
                <div width="80" height="77" class="absolute -top-10 -right-10 text-yellow-500">
                    <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                              d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                              fill="currentColor"/>
                    </svg>
                </div>
                <div class="text-2xl flex flex-col pb-4">
                    <small>Hello there..</small>
                    <span class="text-3xl font-bold">We are the Cookies !</span>
                </div>
                <div class="pb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus aliquid aperiam beatae
                        consectetur culpa dolores eum expedita, ipsam iure laboriosam nobis odit quos, sed sunt
                        veritatis
                        voluptas voluptate voluptatum!
                    </p>
                </div>
            </div>

        </div>
        
        <div class="w-full flex justify-center items-center border-t border-solid border-gray-200">
            <button class="border-r border-gray-200 flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-red-400 duration-150" onClick={() => setCookies(false)}>
                No thanks !
            </button>
            <button className="flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-green-400 duration-150" onClick={() => setCookies(false)}>
                Off course
            </button>
        </div>
    </div>
)}
    <button class="fixed left-4 bottom-2 uppercase text-sm px-6 py-6 bg-blue-600 text-white rounded-full z-30"
           onClick={() => setCookies(!cookies)}>
        Cookies
    </button>



{/* Section11 */}
<Blogpost/>
{/* Section12 */}
<div className='px-9 py-28'>
<Expand/>
</div>
{/* Section13 */}
<HowWeWork/>
{/* Section14 */}
<Testinomial/>
{/* Section15 */}
<Chat/>
{/* Section16 */}
<AIchat/>
{/* Section17 */}
{/* Section18 */}
{/* Footer */}
<Footer/>

    </>
  );
}

export default App;
