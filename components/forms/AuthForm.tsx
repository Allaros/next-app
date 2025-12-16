"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

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
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import {
  signInWithCredentials,
  signUpWithCredentials,
} from "@/lib/actions/auth.action";
import { SignInSchema, SignUpSchema } from "@/lib/validations";

// Маппинг схем по типу формы
const schemas = {
  SIGN_IN: SignInSchema,
  SIGN_UP: SignUpSchema,
};

// Дефолтные значения для каждой схемы
const defaultValuesMap = {
  SIGN_IN: { email: "", password: "" },
  SIGN_UP: { name: "", username: "", email: "", password: "" },
};

interface AuthFormProps {
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = ({ formType }: AuthFormProps) => {
  const router = useRouter();
  const schema = schemas[formType];
  const defaultValues = defaultValuesMap[formType];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    if (formType === "SIGN_IN") {
      const signInData = data as z.infer<typeof SignInSchema>;
      const result = await signInWithCredentials(signInData);
      if (result?.success) {
        toast({ title: "Success", description: "Signed in successfully" });
        router.push(ROUTES.HOME);
      } else {
        toast({
          title: `Error ${result.status}`,
          description: result?.error?.message,
          variant: "destructive",
        });
      }
    } else {
      const signUpData = data as z.infer<typeof SignUpSchema>;
      const result = await signUpWithCredentials(signUpData);
      if (result?.success) {
        toast({ title: "Success", description: "Signed up successfully" });
        router.push(ROUTES.HOME);
      } else {
        toast({
          title: `Error ${result.status}`,
          description: result?.error?.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as keyof typeof defaultValues}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? formType === "SIGN_IN"
              ? "Signing In..."
              : "Signing Up..."
            : formType === "SIGN_IN"
              ? "Sign In"
              : "Sign Up"}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
