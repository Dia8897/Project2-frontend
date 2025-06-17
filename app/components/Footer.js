'use client';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="contact-info">
            <p>📞 <a href="tel:+96170123456">+961 70 123 456</a></p>
            <p>✉️ <a href="mailto:info@lebanontravel.com">info@lebanontravel.com</a></p>
            <p>📍 Beirut, Lebanon</p>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Lebanon Travel Guide. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        footer {
          background-color: #002244;
          color: #cfd8f7;
          padding: 1.5rem 1rem;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .footer-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        .contact-info p {
          margin: 0;
          user-select: none;
        }
        .contact-info a {
          color: #aaccff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-info a:hover,
        .contact-info a:focus {
          color: #ffffff;
          outline: none;
        }
        .copyright {
          font-size: 0.9rem;
          color: #8899bb;
          user-select: none;
        }

        @media (max-width: 480px) {
          .contact-info {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
