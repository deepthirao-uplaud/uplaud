import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award, MessageSquare } from "lucide-react";

// Mock data - replace with real data from your backend
const reviewerData = {
  name: "John Smith",
  avatar: "",
  initials: "JS",
  location: "Tech City, TC",
  totalReviews: 47,
  memberSince: "2023",
  badges: ["Top Reviewer", "Verified User", "Early Adopter"],
  recentReviews: [
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      rating: 5,
      content: "Excellent service! The team was very professional and helpful.",
      date: "2024-02-15"
    },
    {
      id: 2,
      businessName: "Digital Marketing Pro",
      rating: 4,
      content: "Great experience working with this team.",
      date: "2024-02-10"
    }
  ]
};

export default function ReviewerProfile() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src={reviewerData.avatar} />
              <AvatarFallback className="text-xl">{reviewerData.initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold">{reviewerData.name}</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {reviewerData.location}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{reviewerData.totalReviews} reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Member since {reviewerData.memberSince}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {reviewerData.badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Reviews</h2>
        {reviewerData.recentReviews.map((review) => (
          <Card key={review.id} className="w-full">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{review.businessName}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.content}</p>
                <span className="text-sm text-muted-foreground block">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}