import React from 'react';
import { Shield, CheckCircle, Users, MessageCircle, RefreshCw } from 'lucide-react';

const GuaranteesSection: React.FC = () => {
  const guarantees = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Реальные кейсы с цифрами",
      description: "только практическая информация без лишней теории"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Ответы на ваши вопросы",
      description: "полчаса, чтобы задать любые вопросы и получить честные ответы"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Контакты и связи",
      description: "новые полезные контакты в среде активных инвесторов"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Возврат денег",
      description: "если не получите конкретные инструменты для роста дохода"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#143A41] mb-6">
            <span className="text-[#38747E]">Ваши гарантии</span> — наша ответственность за результат
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#143A41] mb-8">Что мы гарантируем:</h3>
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#53A4B1]/10 p-6 rounded-lg border border-[#53A4B1]">
                <div className="bg-[#38747E] p-3 rounded-lg text-white">
                  {guarantee.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#143A41] mb-1">
                    ✓ {guarantee.title}
                  </h4>
                  <p className="text-[#306770]">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#143A41] text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-[#53A4B1] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Стоимость участия</h3>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl line-through text-gray-400">75 000 тг</span>
                <span className="text-5xl font-bold text-[#53A4B1]">45 000 тг</span>
              </div>
              <p className="text-lg text-gray-300">
                Специальная цена только для первых 10 участников — чтобы поощрить тех, кто принимает решения быстро
              </p>

              <div className="bg-[#306770] text-white px-4 py-2 rounded-lg inline-block">
                <p className="font-bold">Осталось всего 3 места — после этого цена вернётся к обычной</p>
              </div>

              <div className="bg-[#53A4B1]/20 border border-[#53A4B1] rounded-lg p-4 mt-6">
                <p className="text-[#53A4B1] text-sm">
                  💡 Цена одной консультации по недвижимости — 50 000 тг<br />
                  За встречу вы получите знания стоимостью более 500 000 тг
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#38747E] to-[#306770] text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">100% гарантия возврата денег</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Если во время встречи вы не получите чёткие и применимые инструменты для увеличения дохода от вашей недвижимости — мы вернём всю сумму. 
            <span className="font-bold"> Мгновенно, без вопросов и лишней бюрократии.</span>
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-semibold">Ваш риск = 0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
