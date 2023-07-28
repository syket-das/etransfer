import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: '1',
    paymentStatus: '1.12',
    paymentMethod: 'Bkash',
    charge: 100,
  },
  {
    invoice: '1',
    paymentStatus: '1.12',
    paymentMethod: 'Nogod',
    charge: 0,
  },
  {
    invoice: '1',
    paymentStatus: '1.12',
    paymentMethod: 'Dutch Bangla Bank',
    charge: 0,
  },
  {
    invoice: '1',
    paymentStatus: '1.12',
    paymentMethod: 'Sonali Bank .',
    charge: 0,
  },
];

const LiveRate = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Live Currency Rate</h3>

      <Table>
        <TableCaption>A list of all available rates.</TableCaption>
        <TableHeader>
          <TableRow className="flex">
            <TableHead className="flex-1">BDT</TableHead>
            <TableHead className="flex-1">INR</TableHead>
            <TableHead className="flex-1">Extra Charge (INR)</TableHead>
            <TableHead className="text-right flex-1">Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="flex">
              <TableCell className="font-medium flex-1">
                {invoice.invoice}
              </TableCell>
              <TableCell className="flex-1">{invoice.paymentStatus}</TableCell>
              <TableCell className="flex-1">{invoice.charge}</TableCell>

              <TableCell className="text-right flex-1">
                {invoice.paymentMethod}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LiveRate;
