import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef(null);

  const fadeInUp = (delay = 0, duration = 1) => {
    return gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const fadeIn = (delay = 0, duration = 1) => {
    return gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const slideInFromLeft = (delay = 0, duration = 1) => {
    return gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const slideInFromRight = (delay = 0, duration = 1) => {
    return gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const scaleIn = (delay = 0, duration = 1) => {
    return gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: 'back.out(1.7)',
      }
    );
  };

  const staggerChildren = (stagger = 0.1, delay = 0) => {
    if (!elementRef.current?.children?.length) return;
    return gsap.fromTo(
      elementRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const scrollTriggerAnimation = (trigger, animation, start = 'top 80%') => {
    return gsap.fromTo(
      trigger,
      animation.from,
      {
        ...animation.to,
        scrollTrigger: {
          trigger,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const hoverScale = (scale = 1.05) => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  };

  return {
    elementRef,
    fadeInUp,
    fadeIn,
    slideInFromLeft,
    slideInFromRight,
    scaleIn,
    staggerChildren,
    scrollTriggerAnimation,
    hoverScale,
  };
}; 