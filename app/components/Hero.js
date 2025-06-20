'use client';

export default function Hero() {
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container mx-auto">
          <div className="bg-white/60 bg-[url('/images/polygon-scatter-haikei.svg')] bg-cover bg-center bg-no-repeat backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl px-10 py-16 text-center">
            <h1 className="text-4xl text-[#003366] md:text-5xl font-extrabold leading-tight mb-6">
              Discover the Beauty of Lebanon
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-md mx-auto">
              Your ultimate guide from the majestic mountains to the sparkling
              Mediterranean coast.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#destinations"
                className="bg-[#003366] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0055aa] transition duration-300 shadow"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`


        @media (max-width: 600px) {
          .hero {
            padding: 4rem 1rem;
            border-radius: 8px;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style> */}
    </>
  );
}
