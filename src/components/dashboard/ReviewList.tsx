import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    customer: "Alex Thompson",
    feedback: "Great product",
    status: "Ready for publishing",
    avatar: "AT",
  },
  {
    id: 2,
    customer: "Sarah Wilson",
    feedback: "Loved their service",
    status: "Draft",
    avatar: "SW",
  },
  {
    id: 3,
    customer: "Mike Brown",
    feedback: "Discuss team goals",
    status: "Draft",
    avatar: "MB",
  },
];

export function ReviewList() {
  return (
    <Card className="glass-card col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Social Content</CardTitle>
        <p className="text-sm text-muted-foreground">
          Review and publish your auto created social posts
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex items-center animate-in">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{review.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{review.customer}</p>
                <p className="text-sm text-muted-foreground">{review.feedback}</p>
              </div>
              <div className="ml-auto">
                <Badge 
                  variant={review.status === "Draft" ? "secondary" : "default"}
                  className="ml-auto"
                >
                  {review.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}