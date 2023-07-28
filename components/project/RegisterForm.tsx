import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import { LoginForm } from '.';

const RegisterForm = () => {
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
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Syket Das" />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="syket@example.com" />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          <div className="grid gap-4">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full">Register</Button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-start">
            <span className="text-sm text-muted-foreground">
              Already have an account?
            </span>
            <Dialog>
              <DialogTrigger>
                <Button variant="link">Login now</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login Here</DialogTitle>
                  <DialogDescription>
                    Enter your credentials to login to your account
                  </DialogDescription>
                </DialogHeader>
                <LoginForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
