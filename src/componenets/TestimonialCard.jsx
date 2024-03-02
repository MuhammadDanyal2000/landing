import React from 'react'
import Star from "../Assessts/Star.png"
import image_33 from "../Assessts/image_33.png"
const TestimonialCard = () => {
  return (
    <div className="bg-background rounded-[20px] w-[270px] h-[330px] p-4">
            <div className="flex items-center justify-start space-x-4 pb-4">
                <img src={image_33} alt="" className="w-[40px] h-[40px] rounded-[50%]"/>
                <div className="flex flex-col justify-center items-start">
                    <span className="text-gray-600 text-md font-semibold">David T.</span>
                    <span className="text-gray-600 text-md overflow-hidden font-semibold">CEO & Developer</span>
                </div>
            </div>
            <div className="flex items-center pb-4">
                <img className='h-4 w-4' src={Star}/>
                <img className='h-4 w-4' src={Star}/>
                <img className='h-4 w-4' src={Star}/>
                <img className='h-4 w-4' src={Star}/>
                <img className='h-4 w-4' src={Star}/>
            </div>
            <p className="text-gray-600 text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error illo natus asperiores placeat provident doloribus eum amet expedita sint.</p>
        </div>
  )
}

export default TestimonialCard