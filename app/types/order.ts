import { Event } from "@/types/event";

export type Amount = {
  usd: string;
  cad: string;
  fee: string;
  net: string;
};

export type Payment = {
  transactionId: string;
  card: {
    number: string;
    type: string;
    expiry: string;
  };
};

export type Customer = {
  name: string;
  email: string;
  address: string;
  country: string;
  countryFlagUrl: string;
};

export type Order = {
  id: number;
  url: string;
  date: string;
  amount: Amount;
  payment: Payment;
  customer: Customer;
  event: Event;
};
