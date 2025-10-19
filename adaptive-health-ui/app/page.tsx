"use client";
import { useState } from "react";
import HealthEntryCard from "@/components/HealthEntryCard";

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}
