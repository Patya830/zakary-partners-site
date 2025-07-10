import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { companyInfo } from "@/data/constants";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [dataProcessingConsent, setDataProcessingConsent] = useState(false);
  const [privacyPolicyConsent, setPrivacyPolicyConsent] = useState(false);

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.message &&
    dataProcessingConsent &&
    privacyPolicyConsent;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setDataProcessingConsent(false);
      setPrivacyPolicyConsent(false);
    }
  };

  return (
    <div className="bg-navy rounded-lg p-8">
      <h3 className="text-xl font-playfair font-semibold text-cream mb-6">
        Получить консультацию
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          type="text"
          placeholder="Ваше имя *"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full p-3 rounded border border-gold/20 bg-cream text-navy placeholder:text-navy/60"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full p-3 rounded border border-gold/20 bg-cream text-navy placeholder:text-navy/60"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Телефон *"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full p-3 rounded border border-gold/20 bg-cream text-navy placeholder:text-navy/60"
        />
        <Textarea
          name="message"
          placeholder="Опишите вашу ситуацию *"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full p-3 rounded border border-gold/20 bg-cream text-navy placeholder:text-navy/60"
        />

        <div className="space-y-3 pt-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="data-processing"
              checked={dataProcessingConsent}
              onCheckedChange={setDataProcessingConsent}
              className="mt-1 border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
            />
            <label
              htmlFor="data-processing"
              className="text-sm text-cream/90 leading-relaxed cursor-pointer"
            >
              Даю согласие на{" "}
              <PrivacyPolicy>
                <span className="text-gold underline cursor-pointer hover:text-gold/80">
                  обработку персональных данных
                </span>
              </PrivacyPolicy>{" "}
              *
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy-policy"
              checked={privacyPolicyConsent}
              onCheckedChange={setPrivacyPolicyConsent}
              className="mt-1 border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
            />
            <label
              htmlFor="privacy-policy"
              className="text-sm text-cream/90 leading-relaxed cursor-pointer"
            >
              Ознакомлен с{" "}
              <PrivacyPolicy>
                <span className="text-gold underline cursor-pointer hover:text-gold/80">
                  Политикой обработки персональных данных
                </span>
              </PrivacyPolicy>{" "}
              *
            </label>
          </div>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-gold text-navy hover:bg-gold/90 disabled:bg-gold/50 disabled:cursor-not-allowed mt-6"
        >
          Отправить заявку
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-gold/20">
        <h4 className="text-sm font-semibold text-cream mb-3">Реквизиты ИП</h4>
        <div className="text-xs text-cream/70 space-y-1">
          <p>
            <strong>{companyInfo.fullName}</strong>
          </p>
          <p>ИНН: {companyInfo.inn}</p>
          <p>ОГРНИП: {companyInfo.ogrnip}</p>
          <p>Юридический адрес: {companyInfo.address}</p>
        </div>
      </div>
    </div>
  );
};
