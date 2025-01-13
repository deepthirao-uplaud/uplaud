import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - replace with real data from your backend
const businessData = {
  name: "Tech Solutions Inc",
  rating: 4.5,
  totalReviews: 128,
  address: "123 Business Ave, Tech City",
  category: "Technology Services",
  reviews: [
    {
      id: 1,
      reviewer: {
        id: "rev1",
        name: "John Smith",
        avatar: "",
        initials: "JS"
      },
      rating: 5,
      content: "Excellent service! The team was very professional and helpful.",
      date: "2024-02-15"
    },
    {
      id: 2,
      reviewer: {
        id: "rev2",
        name: "Sarah Wilson",
        avatar: "",
        initials: "SW"
      },
      rating: 4,
      content: "Great experience overall. Would recommend to others.",
      date: "2024-02-14"
    }
  ]
};

export default function PublicBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">{businessData.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{businessData.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({businessData.totalReviews} reviews)
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {businessData.category}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            <MapPin className="w-4 h-4" />
            {businessData.address}
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {businessData.reviews.map((review) => (
          <Card key={review.id} className="w-full">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Link to={`/reviewer/${review.reviewer.id}`}>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={review.reviewer.avatar} />
                    <AvatarFallback>{review.reviewer.initials}</AvatarFallback>
                  </Avatar>
                </Link>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/reviewer/${review.reviewer.id}`}
                      className="font-medium hover:underline"
                    >
                      {review.reviewer.name}
                    </Link>
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-muted-foreground">{review.content}</p>
                  <span className="text-sm text-muted-foreground mt-2 block">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}