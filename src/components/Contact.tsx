
import { Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in joining Noble Vision Welfare Self Help Group? 
            We welcome new members who share our vision for community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-8">
              We meet every third week of the month to discuss our progress, 
              plan our future, and support each other's goals. New members are 
              always welcome to join our growing family.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Meeting Schedule</p>
                  <p className="text-gray-600">Third week of every month</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Time</p>
                  <p className="text-gray-600">Contact us for specific meeting times</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Community meeting venue</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Express Interest in Joining
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to learn more about membership and our programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For inquiries about membership, meeting schedules, or our savings program, 
                  please contact our group leadership team.
                </p>
                <Button variant="outline" className="w-full">
                  Request Contact Details
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-2" />
                  Banking Partner
                </CardTitle>
                <CardDescription>
                  Our funds are securely managed through our local co-operative bank
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All member contributions are deposited in our group account at the 
                  local co-operative bank, ensuring transparency and security of funds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Membership Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700">
                  <li>• Monthly contribution of KSh 1,500</li>
                  <li>• Attend monthly meetings regularly</li>
                  <li>• Commitment to group goals and values</li>
                  <li>• Support fellow members' growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
