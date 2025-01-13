import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, User, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - replace with real data from your backend
const referralsData = [
  {
    id: 1,
    referrer: "John Smith",
    referral: "Sarah Johnson",
    dateReferred: "2024-03-15",
    messages: [
      {
        id: 1,
        sender: "business",
        content: "Hi Sarah, thanks for being referred by John!",
        timestamp: "2024-03-15T10:00:00",
      },
      {
        id: 2,
        sender: "referral",
        content: "Thank you! I'm looking forward to trying your services.",
        timestamp: "2024-03-15T10:05:00",
      },
    ],
  },
  {
    id: 2,
    referrer: "Emma Davis",
    referral: "Michael Brown",
    dateReferred: "2024-03-14",
    messages: [],
  },
];

export default function Referrals() {
  const [newMessage, setNewMessage] = useState("");
  const [selectedReferral, setSelectedReferral] = useState<number | null>(null);

  const handleSendMessage = (referralId: number) => {
    // Here you would typically send the message to your backend
    console.log("Sending message to referral", referralId, ":", newMessage);
    setNewMessage("");
  };

  return (
    <div className="container mx-auto p-6 space-y-6 bg-[#F2FCE2]/20">
      <Card className="glass-card border-[#9b87f5]/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#6E59A5]">
            Referrals
          </CardTitle>
          <CardDescription className="text-[#7E69AB]">
            Manage your customer referrals and communications
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {referralsData.map((referral) => (
          <Card
            key={referral.id}
            className="glass-card border-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-colors"
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#6E59A5]">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Referrer: {referral.referrer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7E69AB]">
                    <User className="w-4 h-4" />
                    <span>Referral: {referral.referral}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7E69AB]/70">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(referral.dateReferred).toLocaleDateString()}</span>
                  </div>
                </div>

                <Dialog onOpenChange={() => setSelectedReferral(referral.id)}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-[#E5DEFF] text-[#6E59A5] hover:bg-[#D6BCFA] border-[#9b87f5]/20"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-[#6E59A5]">
                        Message {referral.referral}
                      </DialogTitle>
                      <DialogDescription className="text-[#7E69AB]">
                        Send a message to your referral
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <ScrollArea className="h-[200px] w-full rounded-md border border-[#9b87f5]/20 p-4">
                        {referral.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`mb-4 ${
                              message.sender === "business"
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            <div
                              className={`inline-block rounded-lg px-4 py-2 ${
                                message.sender === "business"
                                  ? "bg-[#9b87f5] text-white"
                                  : "bg-[#E5DEFF] text-[#6E59A5]"
                              }`}
                            >
                              <p>{message.content}</p>
                              <span className="text-xs opacity-70">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>

                      <div className="flex gap-2">
                        <Textarea
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your message here..."
                          className="resize-none"
                        />
                        <Button
                          onClick={() => handleSendMessage(referral.id)}
                          className="bg-[#9b87f5] hover:bg-[#8b77e5]"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}