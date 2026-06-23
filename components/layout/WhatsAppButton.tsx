'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '@/data';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3" id="whatsapp-float">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="glass-dark px-4 py-2 rounded-lg shadow-lg"
          >
            <p className="text-ivory text-sm whitespace-nowrap">
              Agenda tu visita privada
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={contactConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300"
        aria-label="Contactar por WhatsApp"
        id="whatsapp-button"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
