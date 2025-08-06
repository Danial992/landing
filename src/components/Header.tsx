import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-yellow-400">Steeltech Group</div>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>23 августа в 12:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Осталось 7 мест из 20</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>г. Алматы</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;