"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/wedding/welcome-screen"
import { HeroSection } from "@/components/wedding/hero-section"
import { CountdownSection } from "@/components/wedding/countdown-section"
import { LogisticsSection } from "@/components/wedding/logistics-section"
import { GallerySection } from "@/components/wedding/gallery-section"

import { FooterSection } from "@/components/wedding/footer-section"


export default function WeddingPage() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Pantalla de Bienvenida */}
      <WelcomeScreen onEnter={() => setShowContent(true)} />

      {/* Contenido Principal */}
      {showContent && (
        <div className="animate-in fade-in duration-1000">
          <HeroSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <CountdownSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <LogisticsSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <GallerySection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
     
          
          
          
        
          
          <FooterSection />

         
        </div>
      )}
    </main>
  )
}