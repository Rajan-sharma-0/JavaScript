import React from 'react'

function Youtub() {
  return (
    <>
      <section className="bg-[#F7F7F7] py-12 flex justify-center">
  <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center">
    {/* Left: YouTube Video */}
    <div className="flex-1 w-full">
      <div className="aspect-w-16 aspect-h-9 bg-black">
        <iframe
          className="w-full h-[600px] md:h-[400px] rounded"
          src="https://www.youtube.com/embed/igVKdmUTQoM?start=3"
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
    </>
  )
}

export default Youtub
