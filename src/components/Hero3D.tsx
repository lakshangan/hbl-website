import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Terminal, Rocket } from 'lucide-react';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  return (
    <Sphere args={[1, 100, 100]} ref={sphereRef}>
      <MeshDistortMaterial
        color="#9333ea"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

export const Hero3D = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/70" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Terminal className="w-20 h-20 text-purple-500" />
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient"
              >
                HACK_BEYOND
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-blue-400"
              >
                Shape the Future of Innovation
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto text-lg text-gray-300"
            >
              Join the most innovative hackathon where creativity meets technology.
              24 hours of coding, creation, and breakthrough innovations.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Register Now
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};