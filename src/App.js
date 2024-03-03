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
import image_119 from "./Assessts/image_119.png"
import image_120 from "./Assessts/image_120.png"
import image_121 from "./Assessts/image_121.png"
import image_122 from "./Assessts/image_122.png"
import image_123 from "./Assessts/image_123.png"
import image_129 from "./Assessts/image_129.png"
import image_125 from "./Assessts/image_125.png"
import image_160 from "./Assessts/image_160.png"
import image_161 from "./Assessts/image_161.png"
import React, { useState } from 'react'
import ActionCard from './componenets/ActionCard';
import Blogpost from './componenets/Blogpost';
import Expand from './componenets/Expand';
import Steps from './componenets/Steps';
import Testinomial from './componenets/Testimonial';
import HowWeWork from './componenets/HowWeWork';
import Chat from './componenets/Chat';
import AIchat from './componenets/AIchat';
import Footer from './componenets/Footer';
import Logo1 from "./Assessts/Logo1.png"
import Pricing from './componenets/Pricing';
import Metrics from './componenets/Metrics';
import Integratiopn from './componenets/Integratiopn';
import image_21 from "./Assessts/image_21.jpeg"
import image_24 from "./Assessts/image_24.jpeg"
import Hero from "./Assessts/Hero.png"
import { BrowserRouter } from 'react-router-dom';
import Last from './componenets/Last';
import Compnanies from './componenets/Compnanies';

function App() {
  const [cookies, setCookies] = useState(true);

  return (
    <BrowserRouter>
      <>
        <div className="bg-sky-800 font-bold text-white text-center py-3 text-base w-auto">
          <p className="overflow-hidden">
            <span className='inline-block animate-slidein font-sans'> Get <span className='underline'>25%</span> off for 12 months: Use ### when you signup </span>
          </p>
        </div>
        <div className=''>

          <Navbar></Navbar>
          <div className=''>
            {/* initial reviews */}


            {/* Section1 */}
            <div className='bg-sky-950'>
              <div className='flex flex-col justify-center items-center gap-8  py-9 animate-slidein  mx-auto max-w-screen-xl'>
                <div className='flex gap-8 flex-col max-w-4xl mx-auto px-5'>
                  <h1 className='text-3xl md:text-5xl lg:text-6xl sm:4xl font-extrabold whitespace-no-wrap text-white'>Tracking e-commerce <span className='text-green-500 glassy-text text-shadow-md'>performance.</span>
                    <br />with real-time profit overview.</h1>
                  <div className='flex flex-col gap-3 text-white'>
                    <p className=' text-white font-medium '>We calculate the <span className='text-green-500'>gross profit per order</span> and provide you with:</p>
                    <div>
                      <p className='  font-medium'>1. Profit data in Google Ads and Facebook Ads to <span className='text-green-500'>activate POAS® bidding</span></p>
                      <p className=' font-medium'>2. A <span className='text-green-500'> realtime profit dashboard</span> for profitability management</p>
                      <p className=' font-medium'>3. Best practice  <span className='text-green-500'>server-side tracking</span></p>
                    </div>
                    <p className=' font-medium'>Our customers have saved up to 60% on ad spend by cutting the unprofitable ads alone.</p>
                  </div>
                </div>
                <div className='py-5 flex gap-3 '>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50 ">Get Started</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm sm:py-3 sm:px-6 lg:py-4 lg:px-8 shadow-lg ring-2 ring-blue-500 ring-opacity-50 ">Book a Demo</button></div>

              </div>
              {/* <div className='flex flex-col items-center gap-4 sm:flex-row '>
        
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
          <div className='flex items-center gap-1 '><img className='h-5 w-5' src={Tick} /><span className='text-white font-medium'> Rated 4.9/5</span></div>
          <div>
            <div className='flex items-center'>
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
              <img className='h-5 w-5' src={Star} />
            </div>
          </div>
        </div> */}


            </div>
            {/* Section2 */}
            {/* <div >
        <div className=' flex justify-center py-0 px-3 min-w-fit sm:max-w-screen-sm sm:px-5 md:px-9'>
          <img className=' px-0 py-10 z-10 object-cover shadow-sky-200 min-w- max-h-fit transition duration-500 ease-in-out -rotate-3 hover:rotate-0 ' src={main} />
          {/* <img className='relative px-35 py-10 right-0 z-20' src={image_47} />
          <img className='relative px-35 py-0 right-52 rotate-12' src={image_48} />
          <img className='relative px-35 py-10 top-48 left-8 z-40 rotate-45' src={image_49} />
          <img className='relative px-35 py-10 top-5 left-24 z-30 rotate-12' src={image_50} /> */}
            {/* </div> */}
            {/* </div> */}

            {/* Section3*/}
            {/* <div className='py-12 px-6 overflow-hidden'>
        <div className=' py-12 px-6 flex flex-col gap-8 justify-evenly item-center bg-white sm:flex-row'>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building} />
            <p>Single & multiple house renting</p></div>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building1} />
            <p>Dormitory and rental housing</p></div>
          <div className='flex gap-4 w-24 h-24 items-center justify-center'> <video src={building1} />
            <p>Commercial Renting</p></div>
        </div>
      </div> */}

            {/* Section4 Features */}
            <div>
              <div className='md:mx-auto max-w-screen-xl pb-14'>
                <div className="flex flex-col justify-center gap-5 py-10 font-sans   ">
                    <h1 className='text-center text-green-500 font-bold text-xl rounded-full px-5 py-1 bg-green-100 mx-auto w-fit'>Our Services</h1>
                  <h1 className="font-sans font-extrabold text-2xl md:text-4xl sm:4xl lg:text-5xl text-gray-700 text-center">What we offer</h1>
                  <p className="font-sans text-lg text-center text-gray-500 px-4">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
                </div>
                <div className="flex gap-8 flex-wrap justify-center max-[872px]:flex-col px-6 ">

                  <div className="flex flex-col w-1/3 h-fit bg-[#FFFFFF] px-8 py-6 gap-4  rounded-3xl shadow-none max-[872px]:w-auto max-[872px]:items-center">
                    <div className=""><img className="w-16 h-16" src={image_119}></img></div>
                    <h1 className="text-2xl font-extrabold">Lorem Ipsum</h1>
                    <p className="text-base text-gray-500 font-medium ">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
                  </div>
                  <div className="flex flex-col w-1/3 h-fit bg-[#FFFFFF] px-8 py-6 gap-4  rounded-3xl shadow-none max-[872px]:w-auto max-[872px]:items-center ">
                    <div className=""><img className="w-16 h-16" src={image_119}></img></div>
                    <h1 className="text-2xl font-extrabold">Lorem Ipsum</h1>
                    <p className="text-base text-gray-500 font-medium">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
                  </div>

                  <div className="flex flex-col w-1/3 h-fit bg-[#FFFFFF] px-8 py-6 gap-4  rounded-3xl shadow-none max-[872px]:w-auto max-[872px]:items-center ">
                    <div className=""><img className="w-16 h-16" src={image_119}></img></div>
                    <h1 className="text-2xl font-extrabold">Lorem Ipsum</h1>
                    <p className="text-base text-gray-500 font-medium">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
                  </div>
                  <div className="flex flex-col w-1/3 h-fit bg-[#FFFFFF] px-8 py-6 gap-4  rounded-3xl shadow-none max-[872px]:w-auto max-[872px]:items-center ">
                    <div className=""><img className="w-16 h-16" src={image_119}></img></div>
                    <h1 className="text-2xl font-extrabold">Lorem Ipsum</h1>
                    <p className="text-base text-gray-500 font-medium">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
                  </div>

                </div>
              </div>
            </div>
            {/* Section Companies */}
            <Compnanies/>
            {/* Section5 */}
            <div className='bg-slate-200'>
              <div className='py-10 lg:py-20 px-4 max-w-screen-xl mx-auto flex flex-col gap-6 sm:gap-20 '>

                {/* 1 */}
                <div className='flex flex-col text-center max-w-lg mx-auto gap-16 lg:max-w-full lg:flex-row lg:text-left'>
                  <div className='flex-1 pt-28'>
                    <div className='flex flex-col gap-6 '>
                      <h1 className='text-gray-700 leading-snug font-extrabold px-2 text-2xl md:text-4xl lg:text-4xl sm:3xl  whitespace-no-wrap '>Real-Time profit dashboard!</h1>
                      <p className=' font-semibold  text-gray-500'>With the click of a button, you can see your daily gross profit, profit after ad spend and even profit after your fixed costs.​ No more spreadsheets - react to changes in your business immediately.</p>
                      <div className='flex flex-wrap gap-y-4 pt-4 text-gray-500 '>
                        <div className='flex w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_119} />
                          <p className='text-center font-bold'>Swift</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_120} />
                          <p className='text-center font-bold'>Paperless</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_121} />
                          <p className='text-center font-bold'>Convenient</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_122} />
                          <p className='text-center font-bold'>Reliable</p>
                        </div>.
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 my-auto'>
                    <img src={image_21} />
                  </div>
                </div>
                {/* 2 */}
                <div className='flex flex-col-reverse text-center max-w-lg mx-auto gap-16 lg:max-w-full lg:flex-row lg:text-left'>
                  <div className='flex-1 my-auto object-fill'>
                    <img className="object-fill" src={image_24} />
                  </div>
                  <div className='flex-1 pt-28'>
                    <div className='flex flex-col gap-6  '>
                      <h1 className=' leading-snug text-gray-700 font-extrabold px-2 text-2xl md:text-4xl lg:text-4xl sm:3xl  whitespace-no-wrap'>Engage Teach Google Ads to find profitable customers</h1>
                      <p className=' font-semibold  text-gray-500'>It will automatically enriches the algorithms with profit data to help them find the most profitable customers and order combinations.​ Set target goals in paid ads based on profit, instead of revenue.</p>
                      <div className='flex flex-wrap justify-between gap-y-4 pt-4 text-gray-500 '>
                        <div className='flex w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_122} />
                          <p className='text-center font-bold'>Instantaneous</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_161} />
                          <p className='text-center font-bold'>Interactive</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_161} />
                          <p className='text-center font-bold'>Seamless</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_122} />
                          <p className='text-center font-bold'>Engaging</p>
                        </div>.
                      </div>
                    </div>
                  </div>

                </div>
                {/* 3 */}
                <div className='flex flex-col text-center max-w-lg mx-auto gap-16 lg:max-w-full lg:flex-row lg:text-left '>
                  <div className='flex-1 pt-28'>
                    <div className='flex flex-col gap-6  '>
                      <h1 className='leading-snug text-gray-700 font-extrabold px-2 text-2xl md:text-4xl lg:text-4xl sm:3xl  whitespace-no-wrap'>Unlock Easy Best practice conversion tracking</h1>
                      <p className=' font-semibold  text-gray-500'>We collect and send data via serverside-to-serverside integrations. Perhaps you’ve noticed the discrepancy in conversions between Google ads and your ecommerce platform?</p>
                      <div className='flex flex-wrap gap-y-4 pt-4 text-gray-500 '>
                        <div className='flex w-1/2 items-center gap-2 '>
                          <img className='w-12 h-12' src={image_160} />
                          <p className='text-center font-bold'>Effortless</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_161} />
                          <p className='text-center font-bold'>Smooth</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12 ' src={image_122} />
                          <p className='text-center font-bold'>Seamless</p>
                        </div>
                        <div className='flex  w-1/2 items-center gap-2'>
                          <img className='w-12 h-12' src={image_161} />
                          <p className='text-center font-bold'>Reliable</p>
                        </div>.
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 my-auto'>
                    <img className="object-cover " src={image_21} />
                  </div>
                </div>
              </div>
            </div>

            {/* Section6 */}
            <ActionCard />
            {/* Section7 */}
            {/* <Steps/> */}
            {/* Section8 Metrics*/}
            <Metrics />
            <Integratiopn />
            {/* Section10 Cookies */}

            {cookies && (
              <div className="fixed sm:left-4 bottom-20 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden z-50 ">

                <div class="">
                  <div class="relative overflow-hidden px-8 pt-8">
                    <div width="80" height="77" class="absolute -top-10 -right-10 text-blue-500">
                      <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                          d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                          fill="currentColor" />
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



            {/* Section11 Integration*/}
            <div className='py-16'>
            <div className='flex gap-8 flex-col text-center  '>
              <h1 className='font-sans text-3xl md:text-4xl lg:text-5xl sm:4xl font-extrabold whitespace-no-wrap text-gray-800 '>Integration
              </h1>

              <p className=' text-gray-500 font-medium '>We're constantly developing new integrations to popular ecommerce and marketing platforms.</p>
            </div>
            <div className='py-10 pb-14 flex justify-evenly flex-wrap gap-8 text-black text-2xl max-w-screen-xl mx-auto  '>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_35} />
                  <p className='font-extrabold text-xl text-gray-600  '>Shopify</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_34} />
                  <p className='font-extrabold text-xl text-gray-600  '>Facebook Ads</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_36} />
                  <p className='font-extrabold text-xl text-gray-600 '>Google Analytics 4</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_37} />
                  <p className='font-extrabold text-xl text-gray-600 '>WooCommerce</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_33} />
                  <p className='font-extrabold text-xl text-gray-600  '>Google Ads</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_33} />
                  <p className='font-extrabold text-xl text-gray-600  '>Google Ads</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_33} />
                  <p className='font-extrabold text-xl text-gray-600  '>Google Ads</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_33} />
                  <p className='font-extrabold text-xl text-gray-600  '>Google Ads</p>
                </div>
              </div>
              <div className='w-80'>
                <div className='flex flex-start items-center gap-6 px-9 bg-white   py-3 rounded-full'>
                  <img className='w-10 h-10' src={image_34} />
                  <p className='font-extrabold text-xl text-gray-600  '>Google Analytics</p>
                </div>
              </div>
              

            </div>
            <div className='text-center bg-gray-200 w-fit mx-auto rounded-full px-16 py-4 mt-6 object-fill text-base'>
        <p className='text-gray-700'>Learn about the integerations <span className='text-green-500 font-bold cursor-pointer hover:text-green-600'>Here.</span></p>
      </div>
      </div>

            {/* Section12 */}
            {/* Section13 */}
            <Last/>
            {/* Section14 */}
            <Testinomial />
            {/* Section15 */}
            {/* <Chat/> */}
            {/* Section16 */}
            {/* <AIchat/> */}
            {/* Section17 */}
            {/* Section FAQ */}
            <div class=" m-2 space-y-2 py-20 max-w-screen-xl mx-auto px-5">
            <h1 className="" />
                <span className="text-green-500 font-sans bg-green-100 text-lg  font-bold px-6 py-2 rounded-[15px] text-center">
                    FAQS
                </span>
              <h1 className='font-sans text-3xl md:text-4xl lg:text-5xl sm:4xl font-extrabold whitespace-no-wrap text-gray-800 text-center pb-16 '>Frequently Ask Questions</h1>
             
              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold "
                tabindex="1"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class="font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>

              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold"
                tabindex="2"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class=" font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>

              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold"
                tabindex="3"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class=" font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>
              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold"
                tabindex="3"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class=" font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>
              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold"
                tabindex="3"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class=" font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>
              <div
                class="group flex flex-col gap-2 rounded-lg bg-sky-950 p-5 text-white font-bold"
                tabindex="3"
              >
                <div class="flex cursor-pointer items-center justify-between">
                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div
                  class=" font-thin invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>
              
            </div>
            <Pricing />
           
            {/* Section18 */}
          </div>
         
        </div>
        {/* Footer */}
        <Footer />

      </></BrowserRouter>
  );
}

export default App;
