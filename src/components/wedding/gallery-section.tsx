"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  { src: "/images/image (2).webp", alt: "Boda 1" },
  { src: "/images/image (3).webp", alt: "Boda 2" },
  { src: "/images/image (4).webp", alt: "Boda 3" },
  { src: "/images/image (5).webp", alt: "Boda 4" },
]

export function GallerySection() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-24 max-w-4xl mx-auto w-full bg-[#fdfcf9]">
      
      {/* Título y Separador */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-[38px] md:text-[42px] text-[#3d312b] italic">Nuestra Historia</h2>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#b09c8d]" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[#b09c8d]" />
          <div className="h-px w-8 bg-[#b09c8d]" />
        </div>
      </div>

      {/* Grilla 2x2 Compacta */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-[3/4] overflow-hidden bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Separador inferior */}
      <div className="h-px w-16 bg-slate-200/50 mt-4" />
    </section>
  )
}