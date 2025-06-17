'use client';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Discover the Beauty of Lebanon</h1>
          <p>Your ultimate guide from the majestic mountains to the sparkling Mediterranean coast.</p>
          {/* You could add a call-to-action button here if you want */}
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(
              rgba(0, 51, 102, 0.45),
              rgba(0, 51, 102, 0.45)
            ),
            url('images/Lebanon.jpg');
          background-position: center;
          background-size: cover;
          color: #f0f5fb;
          padding: 6rem 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          border-radius: 12px;
          max-width: 1100px;
          margin: 2rem auto;
          box-shadow: 0 8px 20px rgba(0, 51, 102, 0.2);
        }

        .content {
          max-width: 700px;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.1;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }

        p {
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.5;
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

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
      `}</style>
    </>
  );
}
