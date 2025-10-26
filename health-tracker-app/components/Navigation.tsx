"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Activity, Home, CloudMoon, Beef } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/fitness", label: "Fitness", icon: Activity },
    { href: "/sleep", label: "Sleep", icon: CloudMoon },
    { href: "/nutrition", label: "Nutrition", icon: Beef },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity
              className={`h-8 w-8 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              HealthTracker
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    active
                      ? isDark
                        ? "bg-gray-700 text-white"
                        : "bg-blue-100 text-blue-700"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className={isDark ? "border-gray-600" : ""}
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex space-x-2 pb-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md whitespace-nowrap transition-colors ${
                  active
                    ? isDark
                      ? "bg-gray-700 text-white"
                      : "bg-blue-100 text-blue-700"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
