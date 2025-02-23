"use client";
import Image from "next/image";
import Whatsapp from "../../../../public/Image/whatsapp.png";

const FloatingWhatsAppButton = () => {
  // Function to open WhatsApp chat
  const handleWhatsAppClick = () => {
    const phoneNumber = "9034499719"; // Replace with your WhatsApp number
    const defaultMessage = encodeURIComponent(
      "Hello! I'm interested in your Waterproofing Services. Can we talk?"
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${defaultMessage}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50"
    >
      <Image src={Whatsapp} width={50} height={50} alt="WhatsApp Icon" />
    </button>
  );
};

export default FloatingWhatsAppButton;
