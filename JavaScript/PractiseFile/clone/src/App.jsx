import React from 'react';

export default function App() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow font-sans">
       
        <div className="flex items-center flex-shrink-0">
          <span className="font-extrabold text-2xl text-gray-800">Career</span>
          <span className="font-extrabold text-2xl text-gray-500">Guide</span>
          <span className="font-bold text-lg text-gray-400 ml-1">.com</span>
        </div>
      
        <ul className="flex-1 flex justify-center space-x-8 text-gray-500 font-medium">
          <li><a href="#class10" className="hover:text-blue-600 transition">Class 10</a></li>
          <li><a href="#class11-12" className="hover:text-blue-600 transition">Class 11-12</a></li>
          <li><a href="#counsellors" className="hover:text-blue-600 transition">Counsellors</a></li>
          <li><a href="#professionals" className="hover:text-blue-600 transition">Professionals</a></li>
          <li><a href="#studyabroad" className="hover:text-blue-600 transition">Study Abroad</a></li>
          <li><a href="#psychometric" className="hover:text-blue-600 transition">Psychometric Test</a></li>
          <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
          <li><a href="#courses" className="hover:text-blue-600 transition">Courses</a></li>
        </ul>
        {/* Phone and Buttons */}
        <div className="flex items-center space-x-8">
          <a href="tel:918800442358" className="text-blue-600 font-medium hover:underline">918800442358</a>
          <button className="font-semibold text-gray-700 hover:text-blue-600 transition">Sign In</button>
          <button className="font-semibold text-gray-700 hover:text-blue-600 transition">My Dashboard</button>
        </div>
      </nav>

      {/* Hero Section */}
     
    
    {/*         */}




    <section className="flex items-center justify-center px-4  bg-white">
        <div className="flex flex-col md:flex-row items-center  max-w-5xl">
          <div className=" text-center md:text-left">
            <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
              SCIENTIFICALLY PLAN YOUR CAREER
            </h1>
            <p className="text-xl font-semibold text-gray-600 mb-4">
              FOR SCHOOL/COLLEGE STUDENTS &amp; WORKING PROFESSIONALS
            </p>
            <div className="flex justify-center md:justify-start">
              {/* <div className="w-16 h-1 bg-cyan-400 rounded"></div> */}
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <img
              src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png"
              alt="National Education Excellence Award"
              className="w-[17rem] h-[30px]  md:h-34 object-contain"
            />
          </div>
        </div>
      </section>

      

      {/* Pricing Section */}
      <section className="flex justify-center items-start bg-white py-12">
        <div className="flex flex-col md:flex-row gap-8  max-w-6xl height-[37rem]">
          {/* Plan 1 */}
          <div className="flex-1 border-2 border-[#32c5d2] bg-white flex flex-col items-center px-8 py-8 min-w-[300px] max-w-xs">
            <span className="bg-[#32c5d2] text-white text-xs font-bold px-4 py-1 mb-6 mt-2 tracking-wider">CAREER REPORT</span>
            <div className="mb-1 text-gray-800 text-3xl font-extrabold line-through flex items-center justify-center">
              1999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg">50% off</div>
            <div className="bg-[#32c5d2] text-white text-4xl font-extrabold px-10 py-2 rounded mb-6 flex items-center justify-center">
              999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <ul className="text-xs text-gray-800 font-bold  mb-8 space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🧩 1</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📞 1</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK SELF CAREER COUNSELLING
              </li>
            </ul>
            <hr className=" border-gray-300 mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs hover:bg-gray-100 transition">GET STARTED »</button>
          </div>
          {/* Plan 2 */}
          <div className="flex-1 border-2 border-[#32c5d2] bg-white flex flex-col items-center px-8 py-8 min-w-[300px] max-w-xs shadow-lg z-10 scale-105">
            <span className="bg-[#32c5d2] text-white text-xs font-bold px-4 py-1 mb-6 mt-2 tracking-wider">RECOMMENDED PLAN</span>
            <div className="mb-1 text-gray-800 text-3xl font-extrabold line-through flex items-center justify-center">
              5,999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg">16% off</div>
            <div className="bg-[#32c5d2] text-white text-4xl font-extrabold px-10 py-2 rounded mb-6 flex items-center justify-center">
              4,999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <ul className="text-xs text-gray-800 font-bold  mb-8 space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🧩 2</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📞 2</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🎥 1</span> VIDEO CAREER COUNSELLING SESSION
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🗺️</span> PERSONALISED ROADMAP
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK SELF CAREER COUNSELLING
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK NEW AGE CAREERS
              </li>
            </ul>
            <hr className=" border-gray-300 mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs hover:bg-gray-100 transition">GET STARTED »</button>
          </div>
          {/* Plan 3 */}
          <div className=" bg-[#32c5d2] flex flex-col items-center px-8 py-8 min-w-[300px] w-[31%] max-w-xs">
            <span className="bg-white text-[#32c5d2] text-xs font-bold px-4 py-1 mb-6 mt-2 tracking-wider">OUR MOST POPULAR CAREER PLAN</span>
            <div className="mb-1 text-white text-3xl font-extrabold line-through flex items-center justify-center">
              12,999<span className="text-lg font-bold ml-1">₹</span>
            </div>
            <div className="mb-2 text-red-600 font-extrabold text-lg">24% off</div>
            <div className="bg-white text-[#32c5d2] text-4xl font-extrabold px-10 py-2 rounded mb-6 flex items-center justify-center">
              9,999<span className="text-2xl font-bold ml-1">₹</span>
            </div>
            <ul className="text-xs text-white font-bold  mb-8 space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🧩 3</span> PSYCHOMETRIC CAREER TEST <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📞 3</span> PSYCHOMETRIC CAREER REPORT <span className="ml-auto">🔗</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">🎥 3</span> VIDEO CAREER COUNSELLING SESSION
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK SELF CAREER COUNSELLING
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK NEW AGE CAREERS
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK NEW AGE TECHNOLOGY
              </li>
              <li className="flex items-center gap-2">
                <span className="font-extrabold">📚</span> E-BOOK DIGITAL CAREER
              </li>
            </ul>
            <hr className=" border-white mb-8" />
            <button className="border-2 border-black px-6 py-2 font-bold text-xs bg-white text-cyan-400 hover:bg-gray-100 transition">GET STARTED »</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 flex justify-center">
  <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center">
    {/* Left: YouTube Video */}
    <div className="flex-1 w-full">
      <div className="aspect-w-16 aspect-h-9 bg-black">
        <iframe
          className="w-full h-[350px] md:h-[400px] rounded"
          src="https://www.youtube.com/embed/8wV2u9w5lXw"
          title="Why invest in career guidance?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    {/* Right: Text Content */}
    <div className="flex-1 bg-white p-10 rounded shadow-sm flex flex-col items-center">
      <span className="bg-cyan-400 text-white text-sm font-bold px-4 py-1 mb-6 tracking-wider text-center">
        SCIENTIFICALLY PLAN YOUR CAREER
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-4 text-center">
        A CAREER COUNSELLOR CAN<br />CHANGE YOUR LIFE
      </h2>
      <p className="text-gray-500 text-lg mb-8 text-center">
        Investing in Career Guidance &amp; Career counselling helps you understand yourself and your career options better, making it easier to make decisions. It also helps you learn more about the job market, be happier in your career, and succeed in the long run.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-3 rounded text-lg shadow-lg transition">
        VIEW PRICING
      </button>
    </div>
  </div>
</section>

{/* Right: Text Content  */}

{/* Help Section */}
<section className="bg-cyan-400 pt-16 pb-8 relative">
  <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
      UNSURE WHICH CAREER PLAN IS BEST FOR YOU?
    </h2>
    <div className="text-2xl md:text-3xl text-white mb-2">CALL US ANY TIME!</div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
      <span className="text-3xl md:text-4xl text-white flex items-center">
        <svg className="inline-block mr-2" width="36" height="36" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
        +91-8800442358
      </span>
    </div>
    <div className="flex items-center justify-center text-white text-3xl md:text-4xl mb-8">
      <svg className="inline-block mr-2" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
      customercare@careerguide.com
    </div>
  </div>
  {/* Money Back Badge */}
  <img
    src="https://dwq4lez4vhobf.cloudfront.net/moneyback.png"
    alt="100% Money Back Guarantee"
    className="absolute right-24 top-1/2 transform -translate-y-1/2 w-56 hidden md:block z-0 mt-[7rem]"
    style={{ pointerEvents: 'none' }}
  />
  
</section>

{/* Footer */}
<footer className="bg-gray-800 text-gray-200 pt-12 pb-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      {/* About */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">ABOUT</div>
        <ul className="space-y-1 text-sm">
          <li>About</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Refund & Cancellation</li>
          <li>Sitemap</li>
          <li>Partners</li>
          <li>Content Writer Jobs</li>
          <li>Career Blogs</li>
          <li>Institute Blogs</li>
          <li>Counselling Blogs</li>
        </ul>
      </div>
      {/* Psychometric Test */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">PSYCHOMETRIC TEST</div>
        <ul className="space-y-1 text-sm">
          <li>Psychometric test</li>
          <li>Ideal Career Test</li>
          <li>Skill based test</li>
          <li>Commerce Career Selector</li>
          <li>Humanities Career Selector</li>
          <li>Professional Skill Index</li>
          <li>Educator Professional Skill Index</li>
          <li>Career Tests</li>
        </ul>
      </div>
      {/* Schools */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">SCHOOLS</div>
        <ul className="space-y-1 text-sm">
          <li>Counselling Services For school</li>
          <li>Career Counselling Services For 9th</li>
          <li>Career Counselling Services For 10th</li>
          <li>Career Counselling Services For 11th</li>
          <li>Career Counselling Services For 12th</li>
          <li>Competitive Exam Calendars</li>
          <li>Engineering Entrance Exam</li>
          <li>Medical Entrance Exam</li>
          <li>Management Entrance Exam</li>
        </ul>
      </div>
      {/* Parents */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">PARENTS</div>
        <ul className="space-y-1 text-sm">
          <li>Psychometric Career Tests</li>
          <li>Study in India</li>
          <li>Knowledge Base</li>
          <li>Pricing</li>
          <li>Career Options</li>
          <li>Professional Skill Index</li>
        </ul>
      </div>
      {/* Counsellor */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">COUNSELLOR</div>
        <ul className="space-y-1 text-sm">
          <li>CareerGuide Profile</li>
          <li>Certification Courses</li>
          <li>Know Your Community</li>
          <li>Counsellor Jobs</li>
          <li>Exclusive Interviews</li>
          <li>Impact Stories</li>
          <li>Inspirational Stories</li>
          <li>Knowledge Base</li>
        </ul>
      </div>
      {/* Let's Be Friends */}
      <div>
        <div className="font-bold text-lg mb-4 text-white">LET'S BE FRIENDS</div>
        <div className="flex space-x-2 mb-4">
          <span className="bg-blue-600 p-2 rounded"><svg width="20" height="20" fill="white"><rect width="20" height="20" rx="3"/></svg></span>
          <span className="bg-blue-400 p-2 rounded"><svg width="20" height="20" fill="white"><rect width="20" height="20" rx="3"/></svg></span>
          <span className="bg-red-500 p-2 rounded"><svg width="20" height="20" fill="white"><rect width="20" height="20" rx="3"/></svg></span>
          <span className="bg-blue-700 p-2 rounded"><svg width="20" height="20" fill="white"><rect width="20" height="20" rx="3"/></svg></span>
        </div>
        <div className="text-sm mb-2">CONTACT US</div>
        <div className="text-sm mb-2">+91-8800442358</div>
        <div className="text-sm mb-4">customercare@careerguide.com</div>
        <a href="#" className="inline-block">
          <img src="https://www.careerguide.com/Images-MCG/playstore.png" alt="Get it on Google Play" className="w-40"/>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}