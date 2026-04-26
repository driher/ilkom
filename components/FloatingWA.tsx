import Link from "next/link";

export default function FloatingWA() {
  const phoneNumber = ""; // isi nanti: 628123456789

  const message =
    "Assalamualaikum wr wb, saya ingin bertanya...";

  return (
    <div className="fixed bottom-5 right-5 z-50 group">

      {/* TOOLTIP */}
      <div className="absolute right-16 bottom-3 hidden group-hover:block bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg">
        Chat Admin
      </div>

      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
      >
        <div className="relative flex items-center justify-center">

          {/* PULSE ANIMATION */}
          <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

          {/* BUTTON */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-2xl transition-transform duration-300 hover:scale-110">
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M16 3C9.383 3 4 8.383 4 15c0 2.61.84 5.02 2.25 7.02L4 29l7.2-2.2C13.3 27.6 14.63 28 16 28c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.2 0-2.4-.2-3.5-.6l-.5-.2-4.3 1.3 1.4-4.2-.3-.5C7.2 18.6 6.5 16.8 6.5 15 6.5 9.7 10.7 5.5 16 5.5S25.5 9.7 25.5 15 21.3 25 16 25zm5.2-6.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.3-.3.5-.5.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.4 3.4.9 4 .8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4z"/>
            </svg>

          </div>
        </div>
      </Link>
    </div>
  );
}