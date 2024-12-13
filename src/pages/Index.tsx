import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Bell, MessageSquare } from "lucide-react";

const Index = () => {
  const filters = [
    { id: "positive", label: "Positive Comments" },
    { id: "likes", label: "Customer Likes" },
    { id: "requests", label: "Review Requests" },
    { id: "mentions", label: "Customer Mentions" },
    { id: "feedback", label: "Purchase Feedback" },
    { id: "messages", label: "Direct Messages" },
  ];

  const reviews = [
    {
      id: 1,
      type: "Customer Feedback",
      customer: "Sarah Wilson",
      avatar: "SW",
      product: "Product 1",
      feedback: "Amazing Product, Love it!",
      timeAgo: "1 day ago",
    },
    {
      id: 2,
      type: "Social Media Post",
      customer: "Mike Brown",
      avatar: "MB",
      product: "Service 1",
      feedback: "Positive feedback, great job",
      timeAgo: "2 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex flex-1">
            <div className="w-full max-w-lg">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reviews"
                  className="pl-8"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default">Generate</Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6">
        <h1 className="text-3xl font-bold tracking-tight">Review Insights</h1>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_300px]">
          {/* Reviews Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">New Reviews</h2>
              <select className="rounded-md border px-3 py-1">
                <option>Filter by keyword</option>
              </select>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="animate-in rounded-lg border bg-card p-4 text-card-foreground"
                >
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{review.type}</p>
                          <p className="text-sm text-muted-foreground">
                            on {review.product}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.timeAgo}
                        </span>
                      </div>
                      <p className="mt-2">{review.feedback}</p>
                      <div className="mt-3 flex gap-3">
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                        <Button variant="outline" size="sm">
                          Add to Social
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters Section */}
          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-semibold">Review Filters</h2>
            <div className="mt-4 space-y-3">
              {filters.map((filter) => (
                <div key={filter.id} className="flex items-center space-x-2">
                  <Checkbox id={filter.id} />
                  <label
                    htmlFor={filter.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {filter.label}
                  </label>
                </div>
              ))}
              <div className="mt-6 flex gap-2">
                <Button className="flex-1">Filter</Button>
                <Button variant="outline" className="flex-1">
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;