import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    date: 'March 1, 2024',
    title: 'Registration Opens',
    description: 'Start your journey by registering your team'
  },
  {
    date: 'March 15, 2024',
    title: 'Registration Closes',
    description: 'Last day to secure your spot'
  },
  {
    date: 'March 20, 2024',
    title: 'Opening Ceremony',
    description: 'Kickoff and team briefing'
  },
  {
    date: 'March 21, 2024',
    title: 'Hackathon Begins',
    description: '24 hours of intense coding and creation'
  },
  {
    date: 'March 22, 2024',
    title: 'Project Submission',
    description: 'Submit your revolutionary solutions'
  }
];

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black/40" id="timeline">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Event Timeline
        </motion.h2>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`flex ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              } items-center justify-center mb-8`}
            >
              <div className="w-5/12" />
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full" />
              </div>
              <div className="w-5/12 bg-gray-900/60 p-6 rounded-lg">
                <h3 className="text-purple-500 font-semibold">{event.date}</h3>
                <h4 className="text-white text-xl font-bold">{event.title}</h4>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};