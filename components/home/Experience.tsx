'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { homeExperienceData } from '@/data';

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isExplicitlyMuted = useRef<boolean>(false);

  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Monitor when the section is in view to play/pause video and audio
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger when at least 25% of section is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setIsInView(true);
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: [0, 0.15, 0.25, 0.5],
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Manage video and audio play/pause based on section visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // User is currently in the section: start playing with audio if permitted
      if (!isExplicitlyMuted.current) {
        video.muted = false;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsMuted(false);
            })
            .catch(() => {
              // Browser policy restricted unmuted autoplay before user interaction
              video.muted = true;
              setIsMuted(true);
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            });
        }
      } else {
        video.muted = true;
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      // User scrolled out of the section: stop video and audio
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  // If autoplay was muted due to browser policy, unmute on first document interaction if still in view
  useEffect(() => {
    const handleFirstInteraction = () => {
      const video = videoRef.current;
      if (!video) return;

      if (isInView && video.muted && !isExplicitlyMuted.current) {
        video.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isInView]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      isExplicitlyMuted.current = false;
      setIsMuted(false);
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      video.muted = true;
      isExplicitlyMuted.current = true;
      setIsMuted(true);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-charcoal relative" id="experience">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Container */}
          <AnimatedSection direction="left">
            <div
              onClick={togglePlay}
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl cursor-pointer group bg-graphite"
            >
              <video
                ref={videoRef}
                src="/images/video1.mp4"
                playsInline
                loop
                preload="auto"
                className="w-full h-full object-cover select-none"
              />

              {/* Decorative luxury frame */}
              <div className="absolute inset-4 border border-champagne/25 pointer-events-none transition-opacity duration-300 group-hover:border-champagne/45" />

              {/* Overlay with Pause/Play Indicator if manually paused */}
              {!isPlaying && isInView && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                  <div className="w-16 h-16 rounded-full border border-champagne/70 bg-graphite/80 flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 text-champagne ml-1" />
                  </div>
                </div>
              )}

              {/* Luxury Audio Toggle Button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full glass-dark border border-champagne/40 text-ivory text-xs tracking-wider uppercase transition-all duration-300 hover:border-champagne hover:scale-105 shadow-xl group/btn cursor-pointer"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-champagne group-hover/btn:text-champagne-light transition-colors" />
                    <span className="hidden sm:inline font-light text-[11px] text-ivory/80 group-hover/btn:text-ivory">
                      Activar audio
                    </span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-champagne animate-pulse" />
                    <span className="hidden sm:inline font-light text-[11px] text-ivory/80 group-hover/btn:text-ivory">
                      Audio activado
                    </span>
                  </>
                )}
              </button>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div>
              <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4">
                {homeExperienceData.subtitle}
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-tight mb-6">
                {homeExperienceData.title}
              </h2>
              <div className="w-16 h-px bg-champagne mb-8" />
              <p className="text-ivory/60 text-base leading-relaxed mb-10">
                {homeExperienceData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {homeExperienceData.highlights.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-champagne" />
                      </div>
                      <div>
                        <h4 className="text-ivory text-sm font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-ivory/40 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
