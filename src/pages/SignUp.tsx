import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-[1000px] p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left side - Value Proposition */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Ready to supercharge your sales?</h1>
              <p className="text-xl text-muted-foreground">
                Increase your positive reviews by 5X
              </p>
            </div>
            
            <div className="aspect-square bg-primary rounded-lg flex items-center justify-center">
              <div className="text-6xl font-light text-primary-foreground tracking-tight">
                uplaud
              </div>
            </div>
          </div>

          {/* Right side - Sign Up Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Join Uplaud and start growing!</h2>
              <div className="text-sm text-right">
                Already part of the team? <Link to="/signin" className="text-primary hover:underline">Sign in</Link>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your business name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Enter a strong password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Retype your password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">Join Uplaud!</Button>

                <div className="text-center text-sm text-muted-foreground">
                  or continue with
                </div>

                <Button variant="outline" type="button" className="w-full">
                  Google
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
}