"use client";

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
import { Input } from "@/components/ui/input";
import { login } from "@/services/auth/login";
import { useToast } from "@/components/ui/use-toast";

const ResetPassword = () => {
  const formSchema = z.object({
    password: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const { password, confirmPassword } = values;

      const res = await login({ password, confirmPassword });

      const data = res.data;

      if (data) {
        toast({
          title: "Success",
          description: "Create New Password Success",
        });
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Create New Password Failed",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[300px] h-[547px] shadow-md ">
        <div className="h-[5px] bg-[#056BB7] rounded-t-lg"></div>
        <div className="heading flex flex-col justify-center items-center mb-2 mt-[57px]">
          <img
            src="/Aset Key 2.png"
            alt=""
            className="w-[161px] h-[139px] mb-[25px]"
          />
          <h1 className="flex justify-center text-[16px] font-semibold mb-[15px] leading-6">
            Create new password
          </h1>
          <p className="flex justify-center text-[10px] text-center text-gray-500 px-2">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-medium ml-[27px]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[240px] ml-[27px] drop-shadow-sm"
                      placeholder="ava.wright@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-[27px]">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[240px]  drop-shadow-sm ml-[27px]"
                      placeholder="ava.wright@gmail.com"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button className="bg-blue-700 w-[240px] h-[40px]" type="submit">
                Create Password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
