import React from 'react';
import { Award, Users, Globe, Building, Star, Heart } from 'lucide-react';

const SpeakerSection: React.FC = () => {
  const achievements = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "100 000 м²",
      description: "модернизированной недвижимости"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Steeltech Group",
      description: "полный цикл реконструкции"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "IREM CPM",
      description: "международная сертификация в процессе"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Property Forum",
      description: "со-основатель крупнейшего форума по коммерческой недвижимости в КЗ"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Делегат в Сингапуре",
      description: "от Центральной Азии (2024)"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Отец 4 детей",
      description: "строю долгосрочный бизнес для семьи"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Почему стоит учиться именно у <span className="text-yellow-400">Мадияра Кыстаубаева</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-yellow-500 text-slate-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-center">Мадияр Кыстаубаев</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span>Основатель и CEO Steeltech Group</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span>15+ лет в коммерческой недвижимости</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span>Портфель проектов: 2.5 млрд тг</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-xl italic text-white font-medium mb-4">
                "Каждый объект — это не просто здание, это финансовый инструмент, 
                который должен работать на владельца 24/7"
              </blockquote>
              <p className="text-yellow-400 font-semibold">— Мадияр Кыстаубаев</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow hover:bg-slate-700 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg text-slate-900">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-white text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-xl p-8 max-w-4xl mx-auto border border-slate-700 shadow">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Почему я делюсь своими знаниями?
            </h3>
            <p className="text-lg text-white leading-relaxed">
              За 15 лет работы я понял: успех в недвижимости — это не везение, а система. 
              Я хочу, чтобы больше людей в Казахстане умели создавать реальную ценность, 
              а не просто покупали квадратные метры в надежде на рост. 
              <span className="text-yellow-400 font-semibold"> Вместе мы поднимем весь рынок.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
