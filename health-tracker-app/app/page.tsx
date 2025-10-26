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
import { Activity, Beef, Calendar, CloudMoon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { fetchTodos, TodoItem } from "@/lib/api";

export default function HomePage() {
  const { isDark } = useTheme();
  const [apiData, setApiData] = useState<TodoItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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

  return (
    <div className="space-y-6">
      <div>
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Dashboard
        </h1>
        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Your health metrics at a glance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Steps Today"
          value="8,234"
          subtitle="+12% from yesterday"
          icon={Activity}
          trend={true}
        />
        <StatCard
          title="Sleep Quality"
          value="87%"
          subtitle="7.5 hours last night"
          icon={CloudMoon}
        />
        <StatCard
          title="Calories"
          value="1,847"
          subtitle="453 remaining"
          icon={Beef}
        />
        <StatCard
          title="Active Days"
          value="23"
          subtitle="This month"
          icon={Calendar}
        />
      </div>

      {loading && (
        <div
          className={`text-center py-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Loading activity data...
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-600">Error: {error}</div>
      )}

      {apiData && (
        <Card className={isDark ? "bg-gray-800 border-gray-700" : ""}>
          <CardHeader>
            <CardTitle className={isDark ? "text-white" : ""}>
              Recent Activity
            </CardTitle>
            <CardDescription className={isDark ? "text-gray-400" : ""}>
              Data from external API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {apiData.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`font-medium ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    User ID: {item.userId} •{" "}
                    {item.completed ? "✓ Completed" : "○ Pending"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
