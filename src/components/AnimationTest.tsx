import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import * as anime from 'animejs';

const AnimationTest = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animeRef = useRef<HTMLDivElement>(null);

  // React Spring animation
  const springProps = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { tension: 280, friction: 60 },
  });

  // Anime.js animation
  useEffect(() => {
    if (animeRef.current && inView) {
      anime({
        targets: animeRef.current,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
  }, [inView]);

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-center">Animation Libraries Test</h2>
      
      {/* Framer Motion */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg"
      >
        <h3 className="text-lg font-semibold mb-2">Framer Motion Animation</h3>
        <p>This element animates with Framer Motion when it comes into view.</p>
      </motion.div>

      {/* React Spring */}
      <animated.div
        style={springProps}
        className="bg-green-100 dark:bg-green-900 p-6 rounded-lg"
      >
        <h3 className="text-lg font-semibold mb-2">React Spring Animation</h3>
        <p>This element uses React Spring for smooth physics-based animations.</p>
      </animated.div>

      {/* Anime.js */}
      <div
        ref={animeRef}
        className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg opacity-0"
      >
        <h3 className="text-lg font-semibold mb-2">Anime.js Animation</h3>
        <p>This element uses Anime.js for complex timeline-based animations.</p>
      </div>
    </div>
  );
};

export default AnimationTest;
