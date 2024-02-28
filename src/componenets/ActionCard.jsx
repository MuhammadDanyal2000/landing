import React from 'react'

const ActionCard = () => {
  return (
    <div class="flex flex-col justify-center items-center pb-40">
            
            <div className="flex w-full flex-col rounded-md bg-cover "
            style={{backgroundImage: `url("https://raw.githubusercontent.com/horizon-ui/horizon-tailwind-react-ts-corporate/main/src/assets/img/nfts/NftBanner1.png")`}}>
            <div class="w-full px-12 py-24">
                <h4 class="mb-[14px] max-w-full text-4xl mx-auto font-bold text-white">
                Ready to stop wasting ad spend?
                </h4>
                <p class="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] ">
                Get started immediately, no credit card required.
                </p>
                <div class="mt-[36px] flex items-center justify-between gap-4 ">
                <button class="text-black linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                    Get Started
                </button>
               
                </div></div>
            
        </div>
        </div>
  )
}

export default ActionCard