
import { Users, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Noble Vision Welfare
          <span className="text-blue-600 block">Self Help Group</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering our community through collective savings, supporting education, 
          and building a brighter future together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Learn About Our Mission
          </Button>
          <Button size="lg" variant="outline">
            Join Our Community
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">44 Members</h3>
            <p className="text-gray-600">Strong community working together</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">KSh 66,000</h3>
            <p className="text-gray-600">Monthly collective savings</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Home className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Dream</h3>
            <p className="text-gray-600">Land ownership & individual homes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
