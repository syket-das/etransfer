import React from 'react';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';

const LoginForm = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="grid gap-4 ">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <AiOutlineGithub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <AiOutlineGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>

        <div className="flex justify-end my-6">
          <div className="text-sm">
            <a href="#" className="font-medium text-primary">
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full">Sign In</Button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-start">
            <span className="text-sm text-muted-foreground">
              Dont have an account?
            </span>
            <a href="#" className="ml-2 font-medium text-primary">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
