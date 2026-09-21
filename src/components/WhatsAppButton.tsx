import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

// Global floating contact buttons.
// Rendered once in App.tsx so it appears on every page - before login,
// after login, and on every dashboard - instead of being duplicated
// per-page.
const WHATSAPP_NUMBER = "919059585039";
const PHONE_NUMBER = "9059585039";
const PHONE_DISPLAY = "+91 90595 85039";
const WHATSAPP_MESSAGE = "Hi, I'm interested in courses at NxGen Tech Academy";

export const WhatsAppButton = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4 items-end">
      {/* Phone Contact - visible on all devices, click to call */}
      <div className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-3 border border-gray-200 hover:shadow-xl transition-shadow">
        <a
          href={`tel:+91${PHONE_NUMBER}`}
          aria-label="Call us"
          className="flex items-center gap-2 text-gray-800 font-semibold hover:text-[#000080] transition-colors"
        >
          <Phone className="w-5 h-5 text-[#000080]" />
          <span className="text-sm hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="text-sm sm:hidden">{PHONE_NUMBER}</span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center w-14 h-14"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg animate-bounce transition-transform hover:scale-110">
          <FaWhatsapp className="w-8 h-8" />
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
