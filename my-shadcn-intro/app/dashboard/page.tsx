"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HealthCard from "@/components/HealthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newTarget, setNewTarget] = useState("");

  const [sections, setSections] = useState([
    {
      id: 1,
      title: "STEPS",
      value: "10,234",
      target: "10,000",
      bgColor: "bg-blue-50",
      borderColor: "border-2 border-blue-200",
      titleColor: "text-blue-600",
    },
    {
      id: 2,
      title: "STRENGTH",
      value: "60 min",
      target: "45 min",
      bgColor: "bg-red-50",
      borderColor: "border-2 border-red-200",
      titleColor: "text-red-600",
    },
    {
      id: 3,
      title: "SLEEP",
      value: "7 hrs",
      target: "8 hrs",
      bgColor: "bg-purple-50",
      borderColor: "border-2 border-purple-200",
      titleColor: "text-purple-600",
    },
    {
      id: 4,
      title: "NUTRITION",
      value: "2000 cal",
      target: "1800 cal",
      bgColor: "bg-emerald-50",
      borderColor: "border-2 border-emerald-200",
      titleColor: "text-emerald-600",
    },
  ]);

  const handleEditTarget = (id: number) => {
    setEditingId(id);
    setNewTarget("");
  };

  const handleSaveTarget = () => {
    if (editingId && newTarget) {
      setSections(
        sections.map((s) =>
          s.id === editingId ? { ...s, target: newTarget } : s
        )
      );
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                Health Dashboard
              </h1>
              <p className="text-center bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent text-sm sm:text-base font-semibold">
                Track your daily wellness metrics • Click cards to edit targets
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {sections.map((section) => (
                <HealthCard
                  key={section.id}
                  {...section}
                  onEdit={handleEditTarget}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Dialog
        open={editingId !== null}
        onOpenChange={(open) => !open && setEditingId(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Target</DialogTitle>
            <DialogDescription>
              Enter your new target value for this metric
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="target-input">New Target</Label>
              <Input
                id="target-input"
                placeholder="Enter new target"
                value={newTarget}
                onChange={(e) => setNewTarget(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingId(null)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveTarget}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
