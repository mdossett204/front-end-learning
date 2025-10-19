"use client";
import { useState } from "react";
import HealthEntryCard from "@/components/HealthEntryCard";
import HealthSidebar from "@/components/HealthSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdaptiveHealthLanding() {
  const [healthMetrics, setHealthMetrics] = useState([
    {
      id: 1,
      category: "Daily Steps",
      entry: "8000",
      target: "10000",
      unit: "steps",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      categoryColor: "text-blue-600",
    },
    {
      id: 2,
      category: "Sleep",
      entry: "7",
      target: "8",
      unit: "hours",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      categoryColor: "text-purple-600",
    },
    {
      id: 3,
      category: "Fasting",
      entry: "20",
      target: "16",
      unit: "hours",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      categoryColor: "text-emerald-600",
    },
    {
      id: 4,
      category: "Calories",
      entry: "1800",
      target: "2000",
      unit: "kcal",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      categoryColor: "text-orange-600",
    },
  ]);

  const handleEditTarget = (id: number, newTarget: string) => {
    setHealthMetrics((prev) =>
      prev.map((metric) =>
        metric.id === id ? { ...metric, target: newTarget } : metric
      )
    );
  };
  const handleAddEntry = (id: number, entry: string) => {
    setHealthMetrics((prev) =>
      prev.map((metric) =>
        metric.id === id ? { ...metric, entry: entry } : metric
      )
    );
  };

  const [username, setUsername] = useState<string | null>(null);

  const handleLogin = (user: string) => {
    setUsername(user);
  };

  const handleLogout = () => {
    setUsername(null);
  };
  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-emerald-50">
        <HealthSidebar
          username={username}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Adaptive Health Dashboard
            </h1>
            <SidebarTrigger className="md:hidden" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {healthMetrics.map((metric) => (
              <HealthEntryCard
                key={metric.id}
                id={metric.id}
                category={metric.category}
                entry={metric.entry}
                target={metric.target}
                unit={metric.unit}
                bgColor={metric.bgColor}
                borderColor={metric.borderColor}
                categoryColor={metric.categoryColor}
                onEditTarget={handleEditTarget}
                onAddEntry={handleAddEntry}
              />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
