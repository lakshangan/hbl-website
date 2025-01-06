import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift } from 'lucide-react';

const prizes = [
  {
    icon: Trophy,
    place: '1st Place',
    prize: '$10,000',
    perks: ['Startup Mentorship', 'Cloud Credits', 'Hardware Kit']
  },
  {
    icon: Award,
    place: '2nd Place',
    prize: '$5,000',
    perks: ['Cloud Credits', 'Development Tools', 'Tech Gadgets']
  },
  {
    icon: Gift,
    place: '3rd Place',
    prize: '$2,500',
    perks: ['Development Tools', 'Online Courses', 'Swag Pack']
  }
];

export const Prizes = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="prizes">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Prizes & Rewards</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compete for exciting prizes and opportunities to take your project to the next level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <prize.icon className="w-16 h-16 text-purple-500 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center mb-2">{prize.place}</h3>
                <p className="text-4xl font-bold text-center text-purple-400 mb-6">{prize.prize}</p>
                <ul className="space-y-2">
                  {prize.perks.map((perk, i) => (
                    <li key={i} className="text-gray-300 text-center">{perk}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};