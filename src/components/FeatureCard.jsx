import React from 'react';
import Card from './Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard = ({ icon: Icon, title, description, delay = '' }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={cardRef} className={`fade-in-up ${delay} ${cardVisible ? 'visible' : ''} h-full`}>
      <Card className="h-full flex flex-col">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg flex-shrink-0">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3 sm:mb-4 flex-shrink-0">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default FeatureCard;

