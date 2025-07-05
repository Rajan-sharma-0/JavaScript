import React from 'react'

function PrisingSection() {
  return (
    <>
        <section className="flex justify-center items-start bg-white py-12">
        <div className="flex flex-col md:flex-row gap-8  max-w-6xl height-[37rem]">
          {/* Plan 1 */}
          <div className="flex-1 border-2 border-[#32c5d2] bg-white flex flex-col h-[607px] items-center mt-11 w-[370px] px-8 py-8 min-w-[300px] max-w-xs">
            <span className="bg-[#32c5d2] hover:text-white text-xs font-bold px-4 py-1 mb-6 mt-2  tracking-wider">CAREER REPORT</span>
            <div className="mb-1 text-gray-800 text-3xl font-extrabold line-through hover:text-[#3FC7D1] flex p-2.5 items-center justify-center">
              1999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg">50% off</div>
            <div className="bg-[#32c5d2] text-white text-4xl font-extrabold px-10 py-2  p-3.5 rounded mb-6 flex items-center justify-center">
              999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <div className="flex-1 flex items-center justify-center ">
            <ul className="text-xs font-bold pt-5 mb-8 space-y-2 w-full text-[#5C6873]">
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><FaPuzzlePiece /> </span> <span className="font-extrabold">1</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><BsFillPieChartFill /></span> <span className="font-extrabold">1</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
            <span><FaBook /></span>    <span className="font-extrabold"></span> E-BOOK SELF CAREER COUNSELLING
              </li>
            </ul>
            </div>
            <hr className=" border-gray-300 mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs hover:bg-gray-100 transition">GET STARTED »</button>
          </div>
          {/* Plan 2 */}
          <div className="flex-1 border-2 border-[#32c5d2] bg-white flex flex-col pt-20 items-center h-[753px] px-8 py-8 min-w-[300px] w-[370px] max-w-xs shadow-lg z-10 scale-105">
            <span className="bg-[#32c5d2] hover:text-white text-xs font-bold px-4 py-1 mb-6 tracking-wider mt-4">RECOMMENDED PLAN</span>
            <div className="mb-1 text-gray-800 text-3xl font-extrabold line-through flex items-center hover:text-[#3FC7D1]  justify-center mt-4">
              5,999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg mt-4">16% off</div>
            <div className="bg-[#32c5d2] text-white text-4xl font-extrabold px-10 py-2 rounded mb-6 flex items-center justify-center mt-4">
              4,999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <ul className="text-xs font-bold mb-8 space-y-2 w-full mt-4 text-[#5C6873]">
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
                <span><FaPuzzlePiece /> </span><span className="font-extrabold">2</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><BsFillPieChartFill /></span> <span className="font-extrabold">2</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><FaPlay /></span>  <span className="font-extrabold"> 1</span> VIDEO CAREER COUNSELLING SESSION
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><FaMapMarkedAlt /></span> <span className="font-extrabold"></span> PERSONALISED ROADMAP
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
                <span><FaBook /></span>    <span className="font-extrabold"></span> E-BOOK SELF CAREER COUNSELLING
              </li>
              <li className="flex items-center gap-2 border-b border-gray-300 pb-2 hover:text-[#3FC7D1] cursor-pointer transition-colors">
               <span><FaBook /></span>     <span className="font-extrabold"></span> E-BOOK NEW AGE CAREERS
              </li>
            </ul>
            <hr className=" border-gray-300 mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs hover:bg-gray-100 transition mt-2">GET STARTED »</button>
          </div>
          {/* Plan 3 */}
          <div className="bg-[#32c5d2] flex flex-col items-center h-[730px] px-8 py-8 mt-11 min-w-[300px] w-[370px] max-w-xs">
            <span className="bg-white hover:text-[#32c5d2] text-xs font-bold px-4 py-1 mb-6 mt-6 tracking-wider">OUR MOST POPULAR CAREER PLAN</span>
            <div className="mb-1  text-3xl font-extrabold line-through flex items-center hover:text-white  justify-center mt-3">
              12,999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg mt-6">24% off</div>
            <div className="bg-white text-[#32c5d2] text-4xl font-extrabold px-10 py-2 rounded mb-6 flex items-center justify-center mt-2">
              9,999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <ul className="text-xs font-bold mb-8 space-y-2 w-full mt-6 text-[#5C6873]">
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
               <span><FaPuzzlePiece /> </span> <span className="font-extrabold"> 3</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
               <span><BsFillPieChartFill /></span> <span className="font-extrabold"> 3</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
               <span><FaPlay /></span> <span className="font-extrabold">3</span> VIDEO CAREER COUNSELLING SESSION
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
                 <span><FaBook /></span>   <span className="font-extrabold"></span> E-BOOK SELF CAREER COUNSELLING
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
                 <span><FaBook /></span>   <span className="font-extrabold"></span> E-BOOK NEW AGE CAREERS
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
               <span><FaBook /></span>     <span className="font-extrabold"></span> E-BOOK NEW AGE TECHNOLOGY
              </li>
              <li className="flex items-center gap-2 border-b border-white pb-2 hover:text-[#FFFEFE] cursor-pointer transition-colors">
                 <span><FaBook /></span>   <span className="font-extrabold"></span> E-BOOK DIGITAL CAREER
              </li>
            </ul>
            <div className="flex-grow"></div>
            <hr className="border-white mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs bg-white text-cyan-400 hover:bg-gray-100 transition ">GET STARTED »</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrisingSection
