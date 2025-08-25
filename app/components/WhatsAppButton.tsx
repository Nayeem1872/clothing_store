"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "01748326000"; // Bangladesh number
  const message = "Hello! I'm interested in your garment sourcing services.";

  const handleWhatsAppClick = () => {
    // Format the phone number for WhatsApp (add country code for Bangladesh)
    const formattedNumber = `880${phoneNumber}`; // 880 is Bangladesh country code
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400/30 blur-lg"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Pulsing animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main button */}
        <motion.div
          className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
          whileHover={{ y: -2 }}
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: "none" }}
        >
          Chat with us on WhatsApp
          {/* Arrow pointing to button */}
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
        </motion.div>

        {/* Phone number display on hover */}
        <motion.div
          className="absolute right-full mr-3 bottom-full mb-2 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded shadow-lg"
          initial={{ opacity: 0, y: 5, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 5,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2, delay: 0.1 }}
          style={{ pointerEvents: "none" }}
        >
          {phoneNumber}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;
