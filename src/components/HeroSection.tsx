import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 18
  });

  const [seatsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-yellow-400">Удвойте стоимость</span> вашей недвижимости за 12 месяцев
                <span className="text-gray-300 block text-2xl lg:text-3xl mt-2">
                  без риска потерять вложения
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Закрытая встреча с <span className="text-yellow-400 font-semibold">Мадияром Кыстаубаев</span> — человеком, который модернизировал 100 000 м² и продал последний объект за <span className="text-green-400 font-bold">206 млн тг</span> (в 2 раза дороже покупки)
              </h2>
            </div>

            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>23 августа в 12:00</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-yellow-400" />
                <span>Только 20 мест</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>3 часа практики</span>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">До встречи осталось:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-slate-700 rounded-lg p-4">
                    <div className="text-3xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-gray-300 uppercase">
                      {unit === 'days' ? 'дней' : 
                       unit === 'hours' ? 'часов' : 
                       unit === 'minutes' ? 'минут' : 'секунд'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seats counter */}
            <div className="bg-red-900 bg-opacity-50 border border-red-400 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Осталось мест:</span>
                <span className="text-3xl font-bold text-red-400">{seatsLeft} из 20</span>
              </div>
              <div className="mt-3 bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-red-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((20 - seatsLeft) / 20) * 100}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full lg:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Забронировать место на встрече</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-slate-900">
                <h3 className="text-2xl font-bold mb-4">Мадияр Марат</h3>
                <div className="space-y-2 text-sm">
                  <p>🏢 Steeltech Group</p>
                  <p>📊 100 000 м² модернизированной недвижимости</p>
                  <p>💰 Последняя сделка: +206 млн тг</p>
                  <p>🎯 ROI: 87% за 8 месяцев</p>
                  <p>🌏 Делегат в Сингапуре от ЦА</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
