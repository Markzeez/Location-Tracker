import React from 'react'
import {BiArrowToTop , BiBell, BiHome, BiNavigation, BiNotification, BiUser} from "react-icons/bi"

const Sidebar = () => {
  return (
    <div className=' flex-none w-14 sm:w-20 h-screen bg-[#090503]'>
<div className='h-20 items-center flex'>
    <BiHome width={40} className='text-gray-300 left-3 sm:left-6 fixed text-4xl' />
</div>
<div className='fixed left-3 sm:left-6 top-[100px]'>
   
   
    <BiBell width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
    <BiUser width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' />
    <BiNotification width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' />
    <BiNavigation width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' />
   
</div>
<div className='fixed bottom-4 left-3 sm:left-6 '>
  <a href="#top"> <BiArrowToTop  width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' /></a>
   

</div>
    </div>
  )
}

export default Sidebar