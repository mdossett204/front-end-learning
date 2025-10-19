"use client";

import { useState } from "react";
import LoginDialog from "@/components/LoginDiaglog";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Home, ChartBar, Settings, LogIn, LogOut } from "lucide-react";

interface HealthSidebarProps {
  username: string | null;
  onLogin: (username: string) => void;
  onLogout: () => void;
}

export default function HealthSidebar({
  username,
  onLogin,
  onLogout,
}: HealthSidebarProps) {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const loggedIn = Boolean(username);

  return (
    <Sidebar className="h-full bg-gradient-to-br from-white via-blue-50 to-emerald-50 border-r border-slate-200">
      <SidebarHeader className="px-4 py-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
          Health Menu Bar
        </h2>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">
                <Home size={18} />{" "}
                <span className="font-bold text-slate-900">Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/insights">
                <ChartBar size={18} />{" "}
                <span className="font-extrabold text-green-600">Insights</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings size={18} />{" "}
                <span className="font-bold text-blue-600">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            {loggedIn ? (
              <button
                className="flex w-full items-center gap-2 font-bold text-blue-500 hover:text-blue-600"
                onClick={() => onLogout()}
              >
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <button
                className="flex w-full items-center gap-2 font-bold text-green-600 hover:text-blue-600"
                onClick={() => setIsLoginDialogOpen(true)}
              >
                <LogIn size={18} /> Login
              </button>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarContent>

      <LoginDialog
        isOpen={isLoginDialogOpen}
        onOpenChange={setIsLoginDialogOpen}
        onLogin={onLogin}
      />
    </Sidebar>
  );
}
