import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
       {/* Cards 1 */}
       <div className='rounded-xl relative'>
        {/* OverLays */}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className="px-2">through 8/26</p>
            <button className='boder-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now
            </button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
        />

       </div>
       {/* Cards 2 */}
       <div className='rounded-xl relative'>
        {/* OverLays */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restuarents</p>
            <p className="px-2">Added Daily</p>
            <button className='boder-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now
            </button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
        />

       </div>
       {/* Cards 3 */}
       <div className='rounded-xl relative'>
        {/* OverLays */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Deserts Too</p>
            <p className="px-2">Tasty Treats</p>
            <button className='boder-white bg-white text-black mx-2 absolute bottom-4'>
                Order Now
            </button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
        />

       </div>
    </div>
  )
}

export default HeadlineCards