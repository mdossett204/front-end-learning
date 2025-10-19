"use client";
import { useState } from "react";
import LoginDialog from "@/components/LoginDiaglog";

export default function AdaptiveHealthLanding() {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUserName] = useState("");
  const handleLogin = (username: string) => {
    setUserName(username);
    setIsOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 flex items-center justify-center">
      <LoginDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onLogin={handleLogin}
      />
      {username && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome, {username}!
          </h2>
        </div>
      )}
    </div>
  );
}
