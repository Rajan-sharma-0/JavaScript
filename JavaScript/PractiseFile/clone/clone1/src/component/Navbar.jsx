import React from 'react'

function Navbar() {
  return (
    <>  
     <nav className="flex items-center justify-between px-8 py-4 bg-white shadow font-sans mb-[2px]">
       
        <div className="flex items-center flex-shrink-0">
          <span className="font-extrabold text-2xl text-gray-800">Career</span>
          <span className="font-extrabold text-2xl text-gray-500">Guide</span>
          <span className="font-bold text-lg text-gray-400 ml-1">.com</span>
        </div>
      
        <ul className="flex-1 flex justify-center space-x-1 text-gray-500 font-medium">
          <li><a href="#class10" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px] ">Class 10</a></li>
          <li><a href="#class11-12" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Class 11-12</a></li>
          <li><a href="#counsellors" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Counsellors</a></li>
          <li><a href="#professionals" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Professionals</a></li>
          <li><a href="#studyabroad" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Study Abroad</a></li>
          <li><a href="#psychometric" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Psychometric Test</a></li>
          <li><a href="#pricing" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Pricing</a></li>
          <li><a href="#courses" className="text-[14px] hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Courses</a></li>
          <a href="tel:918800442358" className="text-blue-600 font-medium hover:underline">918800442358</a>
        </ul>
        {/* Phone and Buttons */}
        <div className="flex items-center space-x-8">
          <button className="font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">Sign In</button>
          <button className="font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition p-[7px] rounded-[8px]">My Dashboard</button>
        </div>
      </nav>
    </>
      
  )
}

export default Navbar
