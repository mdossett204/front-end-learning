"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, TrendingUp } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: boolean;
};

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
}: StatCardProps) {
  const { isDark } = useTheme();

  return (
    <Card className={isDark ? "bg-gray-800 border-gray-700" : ""}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle
          className={`text-sm font-medium ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {title}
        </CardTitle>
        <Icon
          className={`h-4 w-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}
        />
      </CardHeader>
      <CardContent>
        <div
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {value}
        </div>
        {subtitle && (
          <p
            className={`text-xs mt-1 flex items-center ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {trend && <TrendingUp className="h-3 w-3 mr-1 text-green-500" />}
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
