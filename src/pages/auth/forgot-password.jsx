"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { forgotpassword } from "@/services/auth/forgotpassword";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/section/Footer";

const BACK_TO_LOGIN = "Back to login";

const ForgotPassword = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const { email } = values;

      const res = await forgotpassword({ email });

      const data = res.data;

      if (data) {
        toast({
          title: "Success",
          description: "Confirmation Successful",
        });
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Confirmation Failed",
      });
    }
  };

  return (
    <div className="container">
      <div className=" rounded-md shadow-md border-t-primary-3 border-t-8 px-3 pb-10">
        <div className="flex justify-between py-7">
          <div className="flex justify-between">
            <Link to="/login" className="flex items-center">
              <ChevronLeftIcon className="h-4 w-4" />
              <h1 className="text-xs font-medium">{BACK_TO_LOGIN}</h1>
            </Link>
          </div>
          <img src="/logo_ukmik.svg" alt="Logo UKM IK" width={24} />
        </div>
        <div className="header">
          <img
            src="/forgot_password.svg"
            alt="forgot_password"
            className="mx-auto mb-5"
          />
        </div>
        <h1 className="text-center font-semibold text-base mb-4">
          Forgot your password?
        </h1>
        <p className="font-normal text-xs text-gray-400 text-center mb-4">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ava.wright@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-primary-3 hover:bg-primary-2 w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <Footer fill={"#AAA"} />
    </div>
  );
};

export default ForgotPassword;
