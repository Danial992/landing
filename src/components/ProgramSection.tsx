import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, FileText, TrendingUp } from 'lucide-react';

const ProgramSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const program = [
    {
      time: "12:00-13:00",
      title: "Анализ и поиск объектов",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Где найти объекты со скидкой 30-50%",
        "Советский фонд vs Стрессовые активы банков",
        "Чек-лист проверки: 27 пунктов юридической чистоты",
        "Как определить потенциал роста за 15 минут"
      ]
    },
    {
      time: "13:00-14:00",
      title: "Концепция и планирование",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        "Формула выбора концепции под локацию",
        "GBA и GLA анализ — как увеличить полезную площадь на 30%",
        "3 финмодели: оптимистичная, нейтральная, пессимистичная",
        "Кейс: как поднять потолки на 20 см и сэкономить 6 млн тг"
      ]
    },
    {
      time: "14:00-15:00",
      title: "Реализация и инвестиции",
      icon: <Users className="w-6 h-6" />,
      items: [
        "150+ документов за 4 месяца вместо 1.5 лет",
        "Готовые проекты для инвестирования",
        "Индивидуальные консультации по вашим объектам",
        "Закрытый инвест-клуб для участников"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Что конкретно вы узнаете <span className="text-blue-600">за 3 часа</span>
          </h2>
        </div>

        <div className="space-y-6">
          {program.map((part, i) => (
            <div key={i} className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <div
                className="bg-slate-800 text-white p-6 cursor-pointer hover:bg-slate-700 transition-colors"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg text-slate-900">
                      {part.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded text-sm font-bold">
                          ЧАСТЬ {i + 1}
                        </span>
                        <span className="flex items-center space-x-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span>{part.time}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{part.title}</h3>
                    </div>
                  </div>
                  {expanded === i ? (
                    <ChevronUp className="w-8 h-8 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-yellow-400" />
                  )}
                </div>
              </div>

              {expanded === i && (
                <div className="p-6 bg-white">
                  <ul className="space-y-4">
                    {part.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-lg text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
            Зарегистрироваться на встречу
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
