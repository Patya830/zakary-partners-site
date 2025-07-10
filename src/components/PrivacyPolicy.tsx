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
            Согласие на обработку персональных данных
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-navy/80 leading-relaxed">
            <div className="bg-cream/10 p-4 rounded-lg border border-gold/20">
              <p className="text-navy font-medium mb-4">
                Настоящим Пользователь, действуя свободно, в своей воле и в
                своем интересе, а также подтверждая свою дееспособность, дает
                настоящее Согласие на обработку Персональных данных (далее –
                «Согласие») ИП Закарьяевой Патимат Магомедовне (далее –
                «Оператор"):
              </p>
            </div>

            <section>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    1.
                  </span>
                  <p>
                    Согласие дается Пользователем на сайте, расположенном в сети
                    Интернет по адресу http://zakary&Partners/ (далее – «Сайт").
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    2.
                  </span>
                  <p>
                    Принятием (акцептом) настоящего Согласия является активация
                    чек-бокса рядом с текстом «Даю согласие на обработку
                    персональных данных» и нажатие кнопки «Отправить заявку».
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    3.
                  </span>
                  <p>
                    Пользователь дает согласие на обработку своих персональных
                    данных как без использования средств автоматизации, так и с
                    их использованием.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    4.
                  </span>
                  <div>
                    <p className="mb-2">
                      Согласие дается на обработку следующих Персональных
                      данных:
                    </p>
                    <ul className="ml-4 space-y-1">
                      <li>• ФИО;</li>
                      <li>• Контактный телефон;</li>
                      <li>• Адрес электронной почты.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    5.
                  </span>
                  <p>
                    Целью обработки Персональных данных является осуществление
                    связи с Пользователями, в том числе направление уведомлений,
                    информации и запросов, связанных с оказанием услуг, а также
                    обработка запросов и заявок Пользователей;
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    6.
                  </span>
                  <div>
                    <p className="mb-2">
                      Пользователь дает согласие на осуществление следующих
                      действий с персональными данными:
                    </p>
                    <div className="ml-4 grid grid-cols-2 gap-2">
                      <ul className="space-y-1">
                        <li>• сбор;</li>
                        <li>• запись;</li>
                        <li>• систематизация;</li>
                        <li>• накопление;</li>
                        <li>• хранение;</li>
                        <li>• уточнение (обновление, изменение);</li>
                        <li>• извлечение;</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• использование;</li>
                        <li>
                          • передача (распространение, предоставление, доступ),
                          в том числе трансграничная передача;
                        </li>
                        <li>• обезличивание;</li>
                        <li>• блокирование;</li>
                        <li>• удаление;</li>
                        <li>• уничтожение;</li>
                        <li>
                          • передача третьим лицам для цели, указанной в п. 5
                          настоящего Согласия.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    7.
                  </span>
                  <p>
                    Согласие считается действующим до момента его отзыва
                    Пользователем.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    8.
                  </span>
                  <p>
                    Условием для прекращения обработки является достижение цели
                    обработки персональных данных, истечение срока действия
                    согласия или отзыв Согласия на обработку Персональных данных
                    Пользователем.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    9.
                  </span>
                  <p>
                    Пользователь имеет право отозвать свое Согласие посредством
                    составления соответствующего письменного документа, который
                    может быть направлен в простой письменной форме по адресу
                    Оператора, указанному в п. 12 настоящего Согласия, а также
                    на адрес электронной почты Оператора: info@zarlaw.ru.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    10.
                  </span>
                  <p>
                    Пользователь согласен с тем, что на основании его
                    письменного обращения с требованием о прекращении обработки
                    Персональных данных Оператор прекратит обработку таких
                    сведений в течение 15 (пятнадцати) календарных дней.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    11.
                  </span>
                  <p>
                    В случае отзыва Пользователем Согласия на обработку
                    персональных данных Оператор вправе продолжить обработку
                    персональных данных без согласия Пользователя при наличии
                    оснований, указанных в пунктах 2–11 части 1 статьи 6, части
                    2 статьи 10 и части 2 статьи 11 Федерального закона № 152-ФЗ
                    «О персональных данных» от 27.07.2006 г.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gold font-semibold text-lg mt-1">
                    12.
                  </span>
                  <div>
                    <p className="mb-3 font-medium">Реквизиты Оператора:</p>
                    <div className="bg-cream/20 p-4 rounded-lg border border-gold/30">
                      <div className="space-y-2">
                        <p className="font-semibold text-navy">
                          ИП Закарьяева Патимат Магомедовна
                        </p>
                        <p>ОГРИП __________________</p>
                        <p>ИНН _________________</p>
                        <p>Адрес регистрации ____________________________</p>
                        <p>Почтовый адрес ___________________</p>
                        <p>Телефон + 7 _________</p>
                        <p>E-mail ____________</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
