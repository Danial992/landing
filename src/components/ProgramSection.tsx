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
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">
            Что конкретно вы узнаете <span className="text-teal-600">за 3 часа</span>
          </h2>
        </div>

        <div className="space-y-6">
          {program.map((part, i) => (
            <div key={i} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <div
                className="bg-teal-900 text-white p-6 cursor-pointer hover:bg-teal-800 transition-colors"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-400 p-3 rounded-lg text-teal-900">
                      {part.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="bg-cyan-300 text-teal-900 px-3 py-1 rounded text-sm font-semibold">
                          ЧАСТЬ {i + 1}
                        </span>
                        <span className="flex items-center space-x-2 text-sm text-white">
                          <Clock className="w-4 h-4" />
                          <span>{part.time}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold">{part.title}</h3>
                    </div>
                  </div>
                  {expanded === i ? (
                    <ChevronUp className="w-8 h-8 text-cyan-300" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-cyan-300" />
                  )}
                </div>
              </div>

              {expanded === i && (
                <div className="p-6 bg-white">
                  <ul className="space-y-4">
                    {part.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <div className="mt-2">
                          <div className="w-2 h-2 bg-teal-900 rounded-full"></div>
                        </div>
                        <span className="text-lg text-teal-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
            Зарегистрироваться на встречу
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;
