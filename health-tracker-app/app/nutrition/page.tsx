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
import { Button } from "@/components/ui/button";
import { Activity, Apple, Calendar, TrendingUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type Meal = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export default function NutritionPage() {
  const { isDark } = useTheme();
  const [meals] = useState<Meal[]>([
    { name: "Breakfast", calories: 420, protein: 25, carbs: 45, fats: 18 },
    { name: "Lunch", calories: 650, protein: 38, carbs: 62, fats: 24 },
    { name: "Dinner", calories: 580, protein: 42, carbs: 48, fats: 22 },
    { name: "Snacks", calories: 197, protein: 8, carbs: 28, fats: 7 },
  ]);

  const total = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fats: acc.fats + meal.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <div className="space-y-6">
      <div>
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Nutrition Tracking
        </h1>
        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Monitor your daily intake
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Calories"
          value={total.calories}
          subtitle="of 2,300 goal"
          icon={Apple}
        />
        <StatCard
          title="Protein"
          value={`${total.protein}g`}
          subtitle="of 150g goal"
          icon={TrendingUp}
        />
        <StatCard
          title="Carbs"
          value={`${total.carbs}g`}
          subtitle="of 200g goal"
          icon={Activity}
        />
        <StatCard
          title="Fats"
          value={`${total.fats}g`}
          subtitle="of 70g goal"
          icon={Calendar}
        />
      </div>

      <Card className={isDark ? "bg-gray-800 border-gray-700" : ""}>
        <CardHeader>
          <CardTitle className={isDark ? "text-white" : ""}>
            Today's Meals
          </CardTitle>
          <CardDescription className={isDark ? "text-gray-400" : ""}>
            Nutritional breakdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meals.map((meal, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {meal.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {meal.calories} calories
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Log
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div
                    className={`text-center p-2 rounded ${
                      isDark ? "bg-gray-600" : "bg-white"
                    }`}
                  >
                    <div className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Protein
                    </div>
                    <div
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {meal.protein}g
                    </div>
                  </div>
                  <div
                    className={`text-center p-2 rounded ${
                      isDark ? "bg-gray-600" : "bg-white"
                    }`}
                  >
                    <div className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Carbs
                    </div>
                    <div
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {meal.carbs}g
                    </div>
                  </div>
                  <div
                    className={`text-center p-2 rounded ${
                      isDark ? "bg-gray-600" : "bg-white"
                    }`}
                  >
                    <div className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Fats
                    </div>
                    <div
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {meal.fats}g
                    </div>
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
