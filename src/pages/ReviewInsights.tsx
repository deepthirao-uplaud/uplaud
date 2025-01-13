import { ReviewChart } from "@/components/dashboard/ReviewChart";
import { ReviewList } from "@/components/dashboard/ReviewList";
import { StatCard } from "@/components/dashboard/StatCard";

export default function ReviewInsights() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hello, Dave</h2>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Positive Reviews"
            value="82%"
            className="hover-scale"
          />
          <StatCard
            title="New Reviews this week"
            value="21"
            className="hover-scale"
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
          <ReviewChart />
          <ReviewList />
        </div>
      </div>
    </div>
  );
}