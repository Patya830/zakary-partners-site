import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMinimized, setIsMinimized] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    onClose();
  };

  const sections = [
    { id: "hero", name: "Главный экран", icon: "Home" },
    { id: "about", name: "О нас", icon: "Info" },
    { id: "services", name: "Услуги", icon: "Briefcase" },
    { id: "cases", name: "Кейсы", icon: "FileText" },
    { id: "team", name: "Команда", icon: "Users" },
    { id: "reviews", name: "Отзывы", icon: "Star" },
    { id: "pricing", name: "Цены", icon: "DollarSign" },
    { id: "contact", name: "Контакты", icon: "Phone" },
  ];

  if (isMinimized) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          variant="outline"
          size="sm"
          className="bg-white shadow-lg"
        >
          <Icon name="Settings" size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-end p-4 z-50">
      <Card className="w-full max-w-md h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Icon name="Settings" size={20} />
            <span>Админ-панель</span>
          </CardTitle>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
            >
              <Icon name="Minimize2" size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
            >
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-full overflow-auto">
          <Tabs value={activeSection} onValueChange={setActiveSection} className="h-full">
            <TabsList className="grid grid-cols-2 gap-1 p-2 h-auto">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="text-xs p-2 h-auto flex flex-col items-center space-y-1"
                >
                  <Icon name={section.icon as any} size={14} />
                  <span>{section.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="p-4 space-y-4">
                <h3 className="font-semibold text-lg">Редактировать {section.name}</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Заголовок
                    </label>
                    <Input placeholder="Введите заголовок" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Описание
                    </label>
                    <Textarea 
                      placeholder="Введите описание"
                      rows={4}
                    />
                  </div>

                  {section.id === "hero" && (
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Текст кнопки
                      </label>
                      <Input placeholder="Получить консультацию" />
                    </div>
                  )}

                  {section.id === "contact" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Телефон
                        </label>
                        <Input placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input placeholder="info@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Адрес
                        </label>
                        <Input placeholder="г. Москва, ул. Пример, д. 1" />
                      </div>
                    </>
                  )}

                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="RotateCcw" size={16} className="mr-2" />
                      Отменить
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4 mt-6">
                  <h4 className="font-medium mb-2">Действия</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Предпросмотр изменений
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить изображение
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Palette" size={16} className="mr-2" />
                      Изменить цвета
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;