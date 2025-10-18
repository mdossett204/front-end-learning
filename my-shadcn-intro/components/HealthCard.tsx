"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HealthCardProps {
  id: number;
  title: string;
  value: string;
  target: string;
  bgColor: string;
  borderColor: string;
  titleColor: string;
  onEdit: (id: number) => void;
}

export default function HealthCard({
  id,
  title,
  value,
  target,
  bgColor,
  borderColor,
  titleColor,
  onEdit,
}: HealthCardProps) {
  return (
    <Card
      className={`${bgColor} ${borderColor} cursor-pointer hover:shadow-lg transition-shadow group`}
      onClick={() => onEdit(id)}
    >
      <CardHeader>
        <CardTitle className={`text-lg ${titleColor}`}>{title}</CardTitle>
        <CardDescription>Target: {target}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
          {value}
        </p>
        <Button
          size="sm"
          variant="outline"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Edit Target
        </Button>
      </CardContent>
    </Card>
  );
}
