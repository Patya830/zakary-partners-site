import { useState, useEffect } from 'react';

interface ContentData {
  [key: string]: {
    title: string;
    description: string;
    buttonText?: string;
    phone?: string;
    email?: string;
    address?: string;
  };
}

const defaultContent: ContentData = {
  hero: {
    title: "Профессиональная юридическая помощь",
    description: "Опытные юристы и адвокаты готовы защитить ваши права и интересы в любых правовых вопросах",
    buttonText: "Получить консультацию"
  },
  about: {
    title: "О нашей компании",
    description: "Мы — команда профессиональных юристов с многолетним опытом работы в различных областях права"
  },
  services: {
    title: "Наши услуги",
    description: "Полный спектр юридических услуг для физических лиц и бизнеса"
  },
  cases: {
    title: "Успешные кейсы",
    description: "Примеры нашей эффективной работы и достигнутых результатов"
  },
  team: {
    title: "Наша команда",
    description: "Опытные специалисты с высокой квалификацией и практическим опытом"
  },
  reviews: {
    title: "Отзывы клиентов",
    description: "Мнения тех, кто уже воспользовался нашими услугами"
  },
  pricing: {
    title: "Стоимость услуг",
    description: "Прозрачные и справедливые цены на все виды юридических услуг"
  },
  contact: {
    title: "Контакты",
    description: "Свяжитесь с нами удобным способом",
    phone: "+7 (999) 123-45-67",
    email: "info@law-firm.ru",
    address: "г. Москва, ул. Юридическая, д. 1"
  }
};

export const useAdminContent = () => {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('adminContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading admin content:', error);
      }
    }
  }, []);

  const updateContent = async (sectionId: string, newData: Partial<ContentData[string]>) => {
    setIsLoading(true);
    
    const updatedContent = {
      ...content,
      [sectionId]: {
        ...content[sectionId],
        ...newData
      }
    };

    setContent(updatedContent);
    localStorage.setItem('adminContent', JSON.stringify(updatedContent));
    
    // Имитация сохранения на сервер
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const resetContent = (sectionId: string) => {
    const updatedContent = {
      ...content,
      [sectionId]: defaultContent[sectionId]
    };
    
    setContent(updatedContent);
    localStorage.setItem('adminContent', JSON.stringify(updatedContent));
  };

  const getContent = (sectionId: string) => {
    return content[sectionId] || defaultContent[sectionId];
  };

  return {
    content,
    updateContent,
    resetContent,
    getContent,
    isLoading
  };
};