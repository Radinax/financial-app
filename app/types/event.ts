type Status = "On Sale" | "Closed";

export type Event = {
  id: number;
  name: string;
  url: string;
  date: string;
  time: string;
  location: string;
  totalRevenue: string; // ${money}
  totalRevenueChange: string;
  ticketsAvailable: number;
  ticketsSold: number;
  ticketsSoldChange: string; // Percentage string
  pageViews: string;
  pageViewsChange: string; // Percentage string
  status: Status;
  imgUrl: string;
  thumbUrl: string;
};
