"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "progress", label: "Progress", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "logout", label: "Logout", icon: "🚪" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen hidden md:block p-6 sticky top-16">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            variant={activeItem === item.id ? "default" : "ghost"}
            className={`w-full justify-start gap-3 ${
              activeItem === item.id
                ? "bg-gradient-to-r from-blue-500 to-emerald-500"
                : ""
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
