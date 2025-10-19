"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditTargetDialog from "@/components/EditTargetDialog";
import AddEntryDialog from "@/components/AddEntryDialog";

interface HealthEntryCardProps {
  id: number;
  category: string;
  entry: string;
  target: string;
  unit: string;
  bgColor: string;
  borderColor: string;
  categoryColor: string;
  onEditTarget: (id: number, newTarget: string) => void;
  onAddEntry: (id: number, newEntry: string) => void;
}

export default function HealthCard({
  id,
  category,
  entry,
  target,
  unit,
  bgColor,
  borderColor,
  categoryColor,
  onEditTarget,
  onAddEntry,
}: HealthEntryCardProps) {
  const [isEditTargetOpen, setIsEditTargetOpen] = useState(false);
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);

  const handleEditTarget = (edited: { value: string }) => {
    onEditTarget(id, edited.value);
    setIsEditTargetOpen(false);
  };

  const handleAddEntry = (added: { value: string }) => {
    onAddEntry(id, added.value);
    setIsAddEntryOpen(false);
  };

  return (
    <>
      <Card
        className={`${bgColor} ${borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden`}
      >
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle className={`text-lg ${categoryColor} mb-1`}>
                {category}
              </CardTitle>
              <CardDescription className="whitespace-nowrap overflow-hidden text-ellipsis">
                Target: {target} {unit}
              </CardDescription>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="opacity-70 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditTargetOpen(true);
              }}
            >
              Edit Target
            </Button>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl font-semibold text-slate-700">
            {entry}
            <span className="text-sm text-slate-500 ml-1 font-normal">
              {unit}
            </span>
          </p>
        </CardContent>
        <CardFooter>
          <Button
            size="sm"
            variant="outline"
            className="opacity-80 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              setIsAddEntryOpen(true);
            }}
          >
            Add Daily Entry
          </Button>
        </CardFooter>
      </Card>
      <EditTargetDialog
        key={`edit-target-dialog-${id}`}
        isOpen={isEditTargetOpen}
        onOpenChange={setIsEditTargetOpen}
        setTarget={handleEditTarget}
        defaultTarget={{ value: target }}
      />
      <AddEntryDialog
        key={`add-entry-dialog-${id}`}
        isOpen={isAddEntryOpen}
        onOpenChange={setIsAddEntryOpen}
        setEntry={handleAddEntry}
        defaultEntry={{ value: entry }}
      />
    </>
  );
}
