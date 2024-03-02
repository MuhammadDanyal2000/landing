import React from 'react'

const ActionCard = () => {
  return (
    <section className="p-8 sm:p-16 w-[100%] flex justify-center items-center font-sans">
            <div className="max-w-screen-xl  w-[100%] flex justify-center md:justify-between items-center bg-sky-950 shadow-forgetButton rounded-[20px] text-white flex-wrap h-max px-3 sm:px-6 py-16 sm:py-20 space-y-10 md:space-y-0">
                <div className="flex flex-col gap-4">
                    <span className="text-3xl font-bold">
                    Ready to stop wasting ad spend?
                    </span>
                    <span className="text-2xl font-bold ">
                    Get started immediately, <span className="text-2xl font-bold text-green-500">no credit card required.</span>
                    </span>
                </div>
                <button
                    
                    className=" w-full sm:w-max text-sm px-6 py-4 rounded-[30px] text-discountBackground font-semibold bg-white text-center"
                >
                    Get Started
                </button>
            </div>
        </section>
  )
}

export default ActionCard