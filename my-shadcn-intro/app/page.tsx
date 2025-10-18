"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    if (!userName || !password) {
      setError("Please enter both userName and password");
      setIsLoading(false);
      return;
    }

    if (userName === "demo" && password === "pwd123") {
      // Credentials are correct - navigate to dashboard
      router.push("/dashboard");
    } else {
      setError("Invalid userName or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Health Tracker
          </h1>
          <p className="text-slate-600">Track your wellness journey</p>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Log In to Your Account</CardTitle>
            <CardDescription>
              Enter your username and password to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="username">UserName</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="your username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder=".........."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <p className="text-center text-slate-600 text-sm mt-4">
              Demo credentials:{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                demo / pwd123
              </span>
            </p>

            <p className="text-center text-slate-600 text-sm mt-4">
              Do not have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Sign up
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
