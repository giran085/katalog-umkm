'use client';

export default function FloatingWhatsApp() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6282128797844';
  const message = 'halo afcjapanstore.id - saya mau tanya tentang produk di katalog web ini';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style jsx>{`
        .floating_btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        @keyframes pulsing {
          to {
            box-shadow: 0 0 0 30px rgba(66, 219, 135, 0);
          }
        }

        .contact_icon {
          background-color: #25d366;
          color: #fff;
          width: 60px;
          height: 60px;
          font-size: 30px;
          border-radius: 50px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 #25d366;
          animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
          font-weight: normal;
          transition: all 300ms ease-in-out;
          cursor: pointer;
        }

        .contact_icon:hover {
          transform: scale(1.1);
        }

        .text_icon {
          margin-top: 8px;
          color: #707070;
          font-size: 13px;
          font-weight: 500;
        }

        .whatsapp-link {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

      <div className="floating_btn">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <div className="contact_icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.281 4.65C24.318 1.686 20.396 0.042 16.238 0.042C7.582 0.042 0.542 7.082 0.542 15.738C0.542 18.482 1.238 21.15 2.558 23.502L0.418 31.958L9.118 29.858C11.378 31.058 13.79 31.702 16.238 31.702C24.894 31.702 31.934 24.662 31.934 16.006C31.934 11.85 30.244 7.998 27.281 4.65ZM16.238 29.034C14.014 29.034 11.842 28.426 9.958 27.286L9.518 27.018L4.318 28.358L5.678 23.298L5.382 22.838C4.118 20.874 3.454 18.582 3.454 16.194C3.454 8.798 9.306 2.71 16.702 2.71C20.238 2.71 23.558 4.102 26.078 6.622C28.598 9.142 29.99 12.462 29.99 15.998C29.99 23.394 24.138 29.034 16.238 29.034ZM23.794 19.558C23.382 19.35 21.234 18.294 20.858 18.15C20.482 18.006 20.214 17.934 19.946 18.346C19.678 18.758 18.838 19.75 18.606 20.018C18.374 20.286 18.142 20.322 17.73 20.114C17.318 19.906 15.978 19.478 14.394 18.078C13.158 16.99 12.318 15.634 12.086 15.222C11.854 14.81 12.062 14.59 12.27 14.382C12.454 14.198 12.682 13.906 12.89 13.674C13.098 13.442 13.17 13.27 13.314 13.002C13.458 12.734 13.386 12.502 13.282 12.294C13.178 12.086 12.338 9.938 11.998 9.114C11.662 8.29 11.326 8.414 11.078 8.414C10.846 8.414 10.578 8.414 10.31 8.414C10.042 8.414 9.63 8.518 9.254 8.93C8.878 9.342 7.742 10.398 7.742 12.546C7.742 14.694 9.29 16.77 9.498 17.038C9.706 17.306 12.318 21.378 16.238 23.25C17.182 23.686 17.918 23.942 18.494 24.134C19.438 24.438 20.294 24.398 20.978 24.29C21.734 24.17 23.486 23.286 23.826 22.318C24.166 21.35 24.166 20.53 24.062 20.354C23.958 20.178 23.69 20.074 23.278 19.866L23.794 19.558Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text_icon">Hubungi Kami</p>
        </a>
      </div>
    </>
  );
}
