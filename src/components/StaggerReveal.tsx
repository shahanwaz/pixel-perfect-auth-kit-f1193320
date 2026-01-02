import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
}

const StaggerReveal = ({
  children,
  className = '',
  childClassName = '',
  staggerDelay = 0.1,
  duration = 0.5,
  once = true
}: StaggerRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerReveal;
