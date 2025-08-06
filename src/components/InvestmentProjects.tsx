import React from 'react';
import { TrendingUp, Shield, Zap, Crown, ArrowRight } from 'lucide-react';

const InvestmentProjects: React.FC = () => {
  const projects = [
    {
      name: "Бурабай",
      subtitle: "минимальный риск",
      entry: "47 млн тг",
      yield: "40-45% годовых",
      timeline: "с первого месяца",
      feature: "уже сдается в аренду",
      risk: "low",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "LIP",
      subtitle: "средний риск",
      entry: "50 млн тг",
      yield: "70% годовых",
      timeline: "12-18 месяцев",
      feature: "x2 на вложения",
      risk: "medium",
      icon: <Zap className="w-8 h-8" />
    },
    {
      name: "ЖК Караганда",
      subtitle: "для крупных инвесторов",
      entry: "от 300 млн тг",
      yield: "индивидуально",
      timeline: "x3-x5 за 2 года",
      feature: "эксклюзивные условия",
      risk: "high",
      icon: <Crown className="w-8 h-8" />
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'from-green-600 to-green-700';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'high': return 'from-purple-600 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Готовые проекты для тех, кто хочет <span className="text-blue-600">начать сразу</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Эксклюзивные инвестиционные возможности только для участников встречи
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className={`bg-gradient-to-r ${getRiskColor(project.risk)} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRiskBadge(project.risk)}`}>
                    {project.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{project.name}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Вход от</p>
                    <p className="text-lg font-bold text-slate-900">{project.entry}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Доходность</p>
                    <p className="text-lg font-bold text-green-600">{project.yield}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Выплаты:</span>
                    <span className="font-semibold">{project.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Особенность:</span>
                    <span className="font-semibold text-blue-600">{project.feature}</span>
                  </div>
                </div>
                
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <span>Узнать детали</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">⚠️ Эксклюзивные условия</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Эти проекты доступны только участникам закрытой встречи. 
            После 23 августа условия входа могут измениться.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
            Зарезервировать место для инвестирования
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentProjects;