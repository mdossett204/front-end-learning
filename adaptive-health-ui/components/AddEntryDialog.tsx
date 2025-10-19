"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  entryValue: z.string().min(1, "Entry value is required"),
});

interface EditTargetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setEntry: (entry: { value: string }) => void;
  defaultEntry?: { value: string };
}

export default function EditTargetDialog({
  isOpen,
  onOpenChange,
  setEntry,
  defaultEntry,
}: EditTargetProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entryValue: defaultEntry?.value || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEntry({ value: values.entryValue });
    form.reset();
    onOpenChange(false);
  }
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add entry value</DialogTitle>
          <DialogDescription>
            Add/Edit your entry value below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="entryValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entry Value</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter/edit your daily entry value"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                Add/Update entry value
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
