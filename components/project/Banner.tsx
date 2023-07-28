import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaExchangeAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="flex h-[350px]  shrink-0 items-center justify-center border-b">
      <div className="mx-auto flex  flex-col items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">
          Transfer Money With E Transfer
        </h3>
        <div className="">
          <div className="flex mt-6 items-center gap-8">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bdt">Amount 🇧🇩</Label>
              <Input
                type="number"
                id="bdt"
                placeholder="Bangladeshi Taka (BDT)"
              />
              <p className="text-xs text-muted-foreground"> </p>
            </div>

            <FaExchangeAlt className="h-10 w-10 " />

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="inr">Converted To 🇮🇳</Label>
              <Input type="number" id="inr" placeholder="Indian Rupees (INR)" />
            </div>
          </div>
          <div className="mt-4 flex items-center  justify-between">
            <div className="">
              <p className="text-2xl font-semibold">1 BDT = 1.12 INR</p>
              <p className="text-xs text-muted-foreground">
                Market exchange rate at 17:19 UTC
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline">Track Exchange</Button>
              <Button>Transfer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
