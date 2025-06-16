
import { HandHeart, Calendar, Banknote } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Noble Vision Welfare
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a community-driven self-help group dedicated to improving the living standards 
            of our members through collective savings, mutual support, and shared vision for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Noble Vision Welfare Self Help Group is committed to empowering our 44 members 
              through structured savings, accessible loans, and collective investment towards 
              land ownership and housing development.
            </p>
            <p className="text-gray-600">
              We believe in the power of community, where each member's contribution not only 
              secures their individual future but strengthens our collective ability to achieve 
              bigger dreams like land acquisition and home ownership.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <HandHeart className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span>Mutual support and community solidarity</span>
              </li>
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span>Consistent commitment and regular participation</span>
              </li>
              <li className="flex items-start">
                <Banknote className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span>Financial discipline and transparency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
