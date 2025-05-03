import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, you would send a password reset email here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="mx-auto w-full max-w-md px-4">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
            <div className="mb-6">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Sent</h1>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to your email address.
            </p>
            <p className="text-gray-600 text-sm">
              Didn't receive an email?{' '}
              <button 
                onClick={() => setSubmitted(false)} 
                className="font-medium text-blue-600 hover:underline"
              >
                Try again
              </button>
            </p>
            <div className="mt-8">
              <Link 
                to="/login" 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
            <p className="mt-2 text-gray-600">
              Enter your email to receive a reset link
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        {...field} 
                        autoFocus
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <Link 
              to="/login" 
              className="font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}