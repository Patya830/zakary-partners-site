import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const AdminAuth = ({ onAuthenticated }: AdminAuthProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Простая проверка пароля
    setTimeout(() => {
      if (password === "admin2024") {
        localStorage.setItem("adminAuth", "true");
        onAuthenticated();
      } else {
        setError("Неверный пароль");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2">
            <Icon name="Shield" size={24} />
            <span>Панель администратора</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "border-red-500" : ""}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <Icon name="Loader2" size={16} className="animate-spin mr-2" />
              ) : (
                <Icon name="LogIn" size={16} className="mr-2" />
              )}
              Войти
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;