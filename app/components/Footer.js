'use client';

export default function Footer() {
  return (
    <>
     <footer className="bg-[#002244] text-[#cfd8f7] text-center px-4 py-6 font-sans">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-base mb-3">
          <p className="m-0 select-none">
            📞{' '}
            <a
              href="tel:+96170123456"
              className="text-[#aaccff] hover:text-white transition-colors"
            >
              +961 70 123 456
            </a>
          </p>
          <p className="m-0 select-none">
            ✉️{' '}
            <a
              href="mailto:info@lebanontravel.com"
              className="text-[#aaccff] hover:text-white transition-colors"
            >
              info@lebanontravel.com
            </a>
          </p>
          <p className="m-0 select-none">📍 Beirut, Lebanon</p>
        </div>
        <p className="text-sm text-[#8899bb] select-none">
          &copy; {new Date().getFullYear()} Lebanon Travel Guide. All rights reserved.
        </p>
      </div>
    </footer>
      <style jsx>{`

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
