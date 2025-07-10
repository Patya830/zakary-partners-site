import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

export const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-navy">
            Политика обработки персональных данных
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-navy/80">
            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                1. Общие положения
              </h3>
              <p className="mb-3">
                Настоящая Политика обработки персональных данных (далее —
                Политика) действует в отношении всех персональных данных,
                которые ИП Закарьяева Патимат Магомедовна (далее — Оператор)
                может получить от Пользователя во время использования сайта и
                получения юридических услуг.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие
                Пользователя с настоящей Политикой и условиями обработки его
                персональных данных.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                2. Персональные данные, которые обрабатывает Оператор
              </h3>
              <p className="mb-3">
                Оператор обрабатывает следующие персональные данные
                Пользователей:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Фамилия, имя, отчество</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Информация о юридической проблеме</li>
                <li>Иные данные, предоставляемые Пользователем добровольно</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                3. Цели обработки персональных данных
              </h3>
              <p className="mb-3">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Предоставление юридических услуг и консультаций</li>
                <li>Связь с Пользователем для уточнения деталей заказа</li>
                <li>
                  Информирование о новых услугах и специальных предложениях
                </li>
                <li>Выполнение договорных обязательств</li>
                <li>Соблюдение требований законодательства РФ</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                4. Правовые основания обработки
              </h3>
              <p className="mb-3">
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Согласия субъекта персональных данных</li>
                <li>Необходимости исполнения договора</li>
                <li>Необходимости соблюдения правовых обязательств</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                5. Порядок обработки персональных данных
              </h3>
              <p className="mb-3">
                Оператор обрабатывает персональные данные с соблюдением
                принципов:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Законности целей и способов обработки</li>
                <li>Добросовестности</li>
                <li>Соответствия целей обработки</li>
                <li>Соразмерности</li>
                <li>Точности, достаточности и актуальности</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                6. Сроки обработки персональных данных
              </h3>
              <p>
                Персональные данные обрабатываются в течение времени,
                необходимого для достижения целей обработки, но не дольше срока,
                установленного законодательством РФ или договором.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                7. Права субъекта персональных данных
              </h3>
              <p className="mb-3">Пользователь имеет право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Получать информацию об обработке своих персональных данных
                </li>
                <li>
                  Требовать уточнения, блокирования или уничтожения персональных
                  данных
                </li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>
                  Обжаловать действия Оператора в уполномоченный орган или суд
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                8. Безопасность персональных данных
              </h3>
              <p>
                Оператор применяет технические и организационные меры для защиты
                персональных данных от неправомерного доступа, уничтожения,
                изменения, блокирования, копирования, предоставления,
                распространения.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-navy mb-3">
                9. Контактная информация
              </h3>
              <div className="bg-cream/50 p-4 rounded-lg">
                <p className="font-semibold text-navy">
                  ИП Закарьяева Патимат Магомедовна
                </p>
                <p>Email: info@zakarypartners.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
