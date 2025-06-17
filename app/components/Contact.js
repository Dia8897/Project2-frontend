'use client';

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </section>

      <style jsx>{`
        .contact-section {
          background-color: #f9fafb;
          padding: 3rem 1.5rem;
          max-width: 600px;
          margin: 3rem auto;
          border-radius: 12px;
          box-shadow: 0 0 15px rgb(0 51 102 / 0.1);
        }
        h2 {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #003366;
          text-align: center;
          letter-spacing: 1px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        input,
        textarea {
          padding: 0.75rem 1rem;
          font-size: 1.1rem;
          border: 2px solid #ccc;
          border-radius: 8px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          font-family: inherit;
          resize: vertical;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #003366;
          box-shadow: 0 0 6px #0055aa88;
          background-color: #fff;
        }
        button {
          padding: 0.85rem 1.2rem;
          font-size: 1.1rem;
          background-color: #003366;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 4px 8px rgb(0 51 102 / 0.3);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        button:hover,
        button:focus {
          background-color: #0055aa;
          box-shadow: 0 6px 14px rgb(0 85 170 / 0.6);
          outline: none;
        }

        @media (max-width: 480px) {
          .contact-section {
            margin: 2rem 1rem;
            padding: 2rem 1rem;
          }
          input,
          textarea,
          button {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
