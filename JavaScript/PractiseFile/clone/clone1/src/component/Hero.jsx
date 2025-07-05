import React from 'react'

function Hero() {
  return (
    <>
         <section className="flex  justify-center px-4 pl-[20rem]  bg-white">
        <div className="flex flex-col md:flex-row items-center  max-w-5xl">
          <div className=" text-center md:text-left mb-[30px]">
            <h1 className="text-[35px] md:text-3xl font-bold text-[#40454B] tracking-tight">
              SCIENTIFICALLY PLAN YOUR CAREER
            </h1>
            <p className="flex justify-center  text-[16px]  font-semibold text-[#5c6873] mb-4">
              FOR SCHOOL/COLLEGE STUDENTS &amp; WORKING PROFESSIONALS
            </p>
            <div className="flex justify-center md:justify-start">
              {/* <div className="w-16 h-1 bg-cyan-400 rounded"></div> */}
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-[12px] md:mt-0 pl-[5rem]">
            <img
              src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png"
              alt="National Education Excellence Award"
              className="w-[17rem] h-[30px]  md:h-34 object-contain"
            />
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Hero
