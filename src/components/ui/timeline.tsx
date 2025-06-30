'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const cardVariants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-3 top-2 h-full w-0.5 bg-border -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-3 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 border-4 border-background ring-4 ring-background"></div>
            
            <motion.div 
              variants={cardVariants}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-headline text-xl font-bold text-foreground">{item.title}</h3>
                <time className="text-sm font-medium text-muted-foreground">{item.date}</time>
              </div>
              <p className="mt-1 text-md font-semibold text-primary">{item.subtitle}</p>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
