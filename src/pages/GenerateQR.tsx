import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  category: z.enum(["service", "product"]),
  title: z.string().min(1, "Review title is required"),
  product: z.string().min(1, "Product/Service name is required"),
  teamMember: z.string().min(1, "Team member name is required"),
  prompt: z.string().min(1, "Review prompt is required"),
});

const GenerateQR = () => {
  const [qrValue, setQrValue] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "service",
      title: "",
      product: "",
      teamMember: "",
      prompt: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const url = `https://uplaud.ai/${values.category}/${values.product}/${values.teamMember}`;
    setQrValue(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Create new QR code</h2>
      </div>
      
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <p className="text-muted-foreground mb-6">
            Create a unique QR code for each product/ team member you would like to get feedback about
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Product category</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="service" id="service" />
                          <label htmlFor="service">Service</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="product" id="product" />
                          <label htmlFor="product">Product</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter review title" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamMember"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Member</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter team member name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Prompt</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter review prompt" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button type="submit" className="bg-primary flex-1">Generate QR</Button>
              </div>
            </form>
          </Form>
        </div>

        {qrValue && (
          <Card className="p-6 flex flex-col items-center gap-4 min-w-[400px]">
            <QRCodeSVG
              value={qrValue}
              size={300}
              level="H"
              includeMargin
              className="bg-white p-4"
            />
            <p className="text-sm text-muted-foreground break-all">{qrValue}</p>
            <div className="flex gap-4 w-full">
              <Button onClick={handlePrint} className="flex-1 bg-primary">
                Print
              </Button>
              <Button variant="outline" className="flex-1">
                Save
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GenerateQR;