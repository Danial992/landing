import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-cyan-950 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Лого + название */}
        <div className="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="Steeltech Group Logo" 
            className="w-10 h-10 object-contain"
          />
          <div className="text-2xl font-bold text-white">Steeltech Group</div>
        </div>

        {/* Информация справа */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-cyan-100">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-cyan-300" />
            <span>23 августа в 12:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-cyan-300" />
            <span>Осталось 7 мест из 20</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>г. Алматы</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
