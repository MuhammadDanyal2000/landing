import React from 'react'
import TestimonialCard from './TestimonialCard'
// import TestimonialCard from  '../componenets/TestimonialCard'

const Testinomial = () => {
  return (
    <section className="w-full bg-white px-8 md:px-20 pb-20 flex justify-center items-center">
            <div className="w-full max-w-[1260px] ">
                <h1 className="w-[100%] pb-[5rem]" />
                <span className="text-green-500 font-sans bg-background text-lg font-bold px-6 py-2 rounded-[15px]">
                    Testimonials
                </span>
                <div className="flex justify-between items-center flex-wrap pt-8 space-y-8 sm:space-y-0 pb-10">
                    <div className="flex flex-col items-start justify-center space-y-2 font-bold">
                        <span className="text-xl md:text-4xl text-primaryfont font-sans">
                            Don&apos;t take our word for it.
                        </span>
                        <span className="text-xl sm:text-4xl text-primaryfont font-sans">
                            See what our clients say.
                        </span>
                    </div>
                    <button
                        to="/signup"
                        className="px-6 py-4 bg-buttonBackground shadow-forgetButton rounded-[30px] text-white font-semibold w-full text-center sm:w-max"
                    >
                        Get Started
                    </button>
                </div>
                <main className="m-auto overflow-hidden relative w-auto">
                    <div className="flex justify-start items-center gap-6 w-[calc(270px*9)] animate-scroll">
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-transparent" />
                </main>
                <main className="m-auto overflow-hidden relative w-auto pt-12">
                    <div className="flex justify-start items-center gap-6 w-[calc(270px*9)] animate-scrollReverse">
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-transparent" />
                </main>
            </div>
        </section>
  )
}

export default Testinomial