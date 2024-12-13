import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, FileText, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const businessProfileSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessDomain: z.string().url("Please enter a valid URL"),
  contactEmail: z.string().email("Please enter a valid email"),
  businessPhone: z.string().min(10, "Please enter a valid phone number"),
  businessAddress: z.string().min(5, "Please enter a valid address"),
  socialMediaHandles: z.string(),
  teamProjects: z.string(),
  facebookProfile: z.string(),
  instagramProfile: z.string(),
  additionalInfo: z.string(),
  businessType: z.string(),
});

type BusinessProfileForm = z.infer<typeof businessProfileSchema>;

export default function BusinessProfile() {
  const form = useForm<BusinessProfileForm>({
    resolver: zodResolver(businessProfileSchema),
    defaultValues: {
      businessName: "",
      businessDomain: "",
      contactEmail: "",
      businessPhone: "",
      businessAddress: "",
      socialMediaHandles: "",
      teamProjects: "",
      facebookProfile: "",
      instagramProfile: "",
      additionalInfo: "",
      businessType: "",
    },
  });

  const onSubmit = (data: BusinessProfileForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-[1fr,400px] gap-6">
        {/* Main Profile Form */}
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Business Profile</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Business Name</h3>
                  <p className="text-sm text-muted-foreground">Add your logo</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="businessDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business domain</FormLabel>
                      <FormControl>
                        <Input placeholder="example.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact email</FormLabel>
                      <FormControl>
                        <Input placeholder="info@example.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+00 111 222 333 444" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Business Street, City, Country" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="socialMediaHandles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Social media handles</FormLabel>
                      <FormControl>
                        <Input placeholder="@example, @example2, @example3" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teamProjects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team projects</FormLabel>
                      <FormControl>
                        <Input placeholder="Project A, Project B, Project C" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="facebookProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook Profile</FormLabel>
                      <FormControl>
                        <Input placeholder="Feedback A, Feedback B, Feedback C" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagramProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram Profile</FormLabel>
                      <FormControl>
                        <Input placeholder="Performance X, Performance Y, Performance Z" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional info</FormLabel>
                      <FormControl>
                        <Input placeholder="Additional information" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business type</FormLabel>
                      <FormControl>
                        <Input placeholder="Type" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">Save Changes</Button>
            </form>
          </Form>
        </Card>

        {/* Business Identification Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Business Identification</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <span>Business ID Card</span>
              </div>
              <Button variant="outline" size="sm">Upload</Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                <span>Business Passport</span>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <span>Business Residence Permit</span>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>

            <Button className="w-full mt-6" variant="secondary">
              Upload new document
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}