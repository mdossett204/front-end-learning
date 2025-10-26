"use client";

import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, CloudMoon, TrendingUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type SleepData = {
  day: string;
  hours: number;
  quality: number;
};

export default function SleepPage() {
  const { isDark } = useTheme();
  const [sleepData] = useState<SleepData[]>([
    { day: "Mon", hours: 7.5, quality: 85 },
    { day: "Tue", hours: 6.8, quality: 72 },
    { day: "Wed", hours: 8.2, quality: 92 },
    { day: "Thu", hours: 7.1, quality: 78 },
    { day: "Fri", hours: 6.5, quality: 68 },
    { day: "Sat", hours: 9.0, quality: 95 },
    { day: "Sun", hours: 8.5, quality: 90 },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Sleep Tracking
        </h1>
        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Optimize your rest and recovery
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Average Sleep"
          value="7.7 hrs"
          subtitle="This week"
          icon={CloudMoon}
        />
        <StatCard
          title="Sleep Quality"
          value="83%"
          subtitle="+5% from last week"
          icon={TrendingUp}
          trend={true}
        />
        <StatCard
          title="Best Night"
          value="9.0 hrs"
          subtitle="Saturday night"
          icon={Calendar}
        />
      </div>

      <Card className={isDark ? "bg-gray-800 border-gray-700" : ""}>
        <CardHeader>
          <CardTitle className={isDark ? "text-white" : ""}>
            Weekly Sleep Pattern
          </CardTitle>
          <CardDescription className={isDark ? "text-gray-400" : ""}>
            Hours and quality scores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sleepData.map((day) => (
              <div
                key={day.day}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div
                    className={`font-medium w-12 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {day.hours} hours
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${day.quality}%` }}
                      />
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium w-12 text-right ${
                      day.quality >= 80 ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {day.quality}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
