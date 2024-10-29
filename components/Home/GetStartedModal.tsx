"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { BookingFormType, bookingSchema } from "@/types/booking.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, wait } from "@/lib/utils";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { siteConfig } from "@/lib/site.config";

const GetStartedModal = ({
  variant = "default",
  label = "FREE Consultation",
  reference,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  label?: string;
  reference?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const defaultValues: BookingFormType = {
    fullName: "",
    email: "",
    phone: "",
    dateTime: new Date(),
    projectDescription: "",
  };

  const form = useForm<BookingFormType>({
    resolver: zodResolver(bookingSchema),
    defaultValues,
  });

  const onSubmit = async (data: BookingFormType) => {
    try {
      setIsSubmitting(true);

      await addDoc(collection(db, "bookings"), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        dateTime: data.dateTime?.toISOString(),
        projectDescription: `${data.projectDescription} Reference: ${reference}`,
        createdAt: new Date().toISOString(),
      });

      // Show success toast
      toast({
        title: "Success!",
        description: `A meeting scheduled successfully, will notify details in your email! For any details, please contact ${siteConfig.email}`,
      });

      await wait();
      form.reset();
      setOpen(false); // Close the dialog after success
    } catch (error) {
      console.error("Error booking schedule:", error);
      // Show error toast
      toast({
        title: "Error",
        description:
          "There was an error booking schedule. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant}>{label}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Schedule a FREE Consultation</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Full name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date and Time Picker Need to add */}
            <FormField
              control={form.control}
              name="dateTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block">Select Date & Time</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPPp")
                          ) : (
                            <span>Pick a date and Time</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="flex">
                        {/* Date Input */}
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) {
                              field.onChange(
                                new Date(
                                  date.setHours(
                                    field.value ? field.value.getHours() : 10,
                                    field.value ? field.value.getMinutes() : 0
                                  )
                                )
                              );
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                        {/* Time Input */}
                        <div className="flex">
                          {/* Hour Selector */}
                          <Select
                            onValueChange={(value) => {
                              const newDate = new Date(field.value!);
                              newDate.setHours(Number(value));
                              field.onChange(newDate);
                            }}
                          >
                            <SelectTrigger className="w-[80px]">
                              <SelectValue placeholder="Hour" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(24).keys()].map((hour) => (
                                <SelectItem key={hour} value={String(hour)}>
                                  {hour < 12
                                    ? `${hour} AM`
                                    : `${hour === 12 ? 12 : hour - 12} PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          {/* Minute Selector */}
                          <Select
                            onValueChange={(value) => {
                              const newDate = new Date(field.value!);
                              newDate.setMinutes(Number(value));
                              field.onChange(newDate);
                            }}
                          >
                            <SelectTrigger className="w-[80px]">
                              <SelectValue placeholder="Minute" />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,
                              ].map((minute) => (
                                <SelectItem key={minute} value={String(minute)}>
                                  {minute} mins
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {/* <Input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full"
                        /> */}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Details */}
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project or issues"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                Schedule Now
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
