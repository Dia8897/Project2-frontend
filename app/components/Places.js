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
  ];

  return (
    <section className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-center text-[#003366] font-sans text-2xl mb-8">
        Top Destinations
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7">
        {places.map(({ name, emoji, description, image }) => (
          <div
            key={name}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer
                       transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-40 sm:h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-center flex-grow">
              <h3 className="mb-2 text-[#003366] font-bold font-sans text-lg">
                {emoji} {name}
              </h3>
              <p className="text-gray-600 text-base leading-snug">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
