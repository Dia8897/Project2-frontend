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
    <>
      <section className="places">
        <h2>Top Destinations</h2>
        <div className="cards">
          {places.map(({ name, emoji, description, image }) => (
            <div key={name} className="card">
              <img src={image} alt={name} />
              <div className="card-content">
                <h3>{emoji} {name}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .places {
          padding: 2rem 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          color: #003366;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.8rem;
        }
        .card {
          background: #f9fafb;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 51, 102, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 51, 102, 0.25);
        }
        .card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .card-content {
          padding: 1rem 1.2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          color: #003366;
          font-weight: 700;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .card-content p {
          margin: 0;
          font-size: 1rem;
          color: #555;
          line-height: 1.3;
        }

        @media (max-width: 480px) {
          .card img {
            height: 140px;
          }
          .card-content h3 {
            font-size: 1.1rem;
          }
          .card-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
