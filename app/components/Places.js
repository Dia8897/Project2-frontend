'use client';

export default function Places() {
  const places = [
    {
      name: "Bsharri",
      emoji: "🌄",
      description: "The heart of the Cedars and Gibran Museum",
      image: "/images/Bsharri.jpg"
    },
    {
      name: "Baalbek",
      emoji: "🏛️",
      description: "Famous for its Roman temples",
      image: "/images/Baalbeck.jpg"
    },
    {
      name: "Jbeil (Byblos)",
      emoji: "🏖️",
      description: "Beach and ancient history in one",
      image: "/images/Jbeil.jpg"
    },
    {
      name: "Jeita Grotto",
      emoji: "🏞️",
      description: "Stunning limestone caves",
      image: "/images/Jeita.jpg"
    },
    {
      name: "Tripoli",
      emoji: "🏰",
      description: "Historic souks and the Citadel of Raymond de Saint-Gilles",
      image: "/images/Tripoli.jpg"
    },
    {
      name: "Tyre (Sour)",
      emoji: "🌊",
      description: "Ancient Phoenician city with beautiful beaches",
      image: "/images/Sour.jpg"
    },
    {
      name: "Beiteddine",
      emoji: "🏛️",
      description: "Famous for its grand 19th-century Beiteddine Palace",
      image: "/images/Beiteddine.jpg"
    },
    {
      name: "Sidon (Saida)",
      emoji: "🏖️",
      description: "Coastal city known for its Sea Castle and soap museum",
      image: "/images/Saida.jpg"
    },
    {
      name: "Faraya",
      emoji: "🎿",
      description: "Popular ski resort in winter and cool escape in summer",
      image: "/images/Faraya.jpg"
    }

  ];

  return (
    <section className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-center text-[#003366] font-sans text-5xl mb-8 font-bold">
        Top Destinations
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
        {places.map(({ name, emoji, description, image }) => (
          <div
            key={name}
            className="md:h-[350px] bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer
                       transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg"
          >
            <img
              src={image}
              alt={name}
              className="w-full md:h-35 sm:h-20 object-cover"
            />
            <div className="p-4 flex flex-col justify-center flex-grow">
              <h3 className="mb-2 text-[#003366] font-bold font-sans text-lg">
                {emoji} {name}
              </h3>
              <p className="text-gray-600 text-base leading-snug">
                {description}
              </p>

              <div className=" flex gap-3 mt-5">
                <button className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0055aa] transition">
                  Read More
                </button>
                <button className="border border-blue-600 text-blue-700 px-4 py-2 rounded-lg text-sm ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
