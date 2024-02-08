import React from "react";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotpassword } from "@/services/auth/forgotpassword";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Footer from "@/components/section/Footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="border w-11/12">
      <CardHeader>
        <img
          src="/forgot_password.svg"
          alt="forgot_password"
          className="mx-auto mb-5"
        />
        <CardTitle>Forgot your password?</CardTitle>
        <CardDescription>
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ForgotPassword;
