import { StatCard } from "@/components/dashboard/StatCard";
import { ReviewChart } from "@/components/dashboard/ReviewChart";
import { ReviewList } from "@/components/dashboard/ReviewList";

const Index = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hello, Dave</h2>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Positive Reviews"
            value="82%"
            className="animate-in"
          />
          <StatCard
            title="New Reviews this week"
            value="21"
            className="animate-in"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <ReviewChart />
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

export default Index;