"use client";

import { useEffect, useState } from "react";
import { StatCard } from "@/components/StatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Activity, Calendar, TrendingUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { fetchTodos, TodoItem } from "@/lib/api";

export default function FitnessPage() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  const [apiData, setApiData] = useState<TodoItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTodos();
        setApiData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const workoutTypes = ["all", "cardio", "strength", "flexibility"];

  return (
    <div className="space-y-6">
      <div>
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Fitness Tracking
        </h1>
        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Monitor your workouts and progress
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {workoutTypes.map((type) => (
          <Button
            key={type}
            onClick={() => setFilter(type)}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            className="capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Weekly Workouts"
          value="5"
          subtitle="Goal: 6 per week"
          icon={Activity}
        />
        <StatCard
          title="Total Duration"
          value="4.2 hrs"
          subtitle="This week"
          icon={Calendar}
        />
        <StatCard
          title="Calories Burned"
          value="2,847"
          subtitle="+15% vs last week"
          icon={TrendingUp}
          trend={true}
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && (
        <div
          className={`text-center py-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Loading workout data...
        </div>
      )}

      {!loading && !error && apiData && (
        <Card className={isDark ? "bg-gray-800 border-gray-700" : ""}>
          <CardHeader>
            <CardTitle className={isDark ? "text-white" : ""}>
              Workout History
            </CardTitle>
            <CardDescription className={isDark ? "text-gray-400" : ""}>
              Recent activities from API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {apiData.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Activity
                      className={`h-5 w-5 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <div>
                      <div
                        className={`font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title.slice(0, 30)}...
                      </div>
                      <div
                        className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Session #{item.id}
                      </div>
                    </div>
                  </div>
                  {item.completed && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Done
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
