import React from 'react';
import Card from './Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueCard = ({ icon: Icon, title, description, delay = '' }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={cardRef} className={`fade-in-up ${delay} ${cardVisible ? 'visible' : ''}`}>
      <Card>
        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-charcoal mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default ValueCard;

