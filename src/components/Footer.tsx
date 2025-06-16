
import { Heart, Users, TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              Noble Vision Welfare
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering our community through collective savings, mutual support, 
              and shared vision for a better future.
            </p>
            <div className="flex items-center text-gray-300">
              <Users className="w-4 h-4 mr-2" />
              <span>44 Active Members</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monthly Savings Plan</li>
              <li>Soft Loan Services</li>
              <li>Education Support Fund</li>
              <li>Land Acquisition Project</li>
              <li>Housing Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                <span>KSh 66,000 Monthly Collections</span>
              </div>
              <div className="text-gray-300">
                <p>Meeting: Third week monthly</p>
              </div>
              <div className="text-gray-300">
                <p>Est. 2024 • Growing Strong</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Noble Vision Welfare Self Help Group. Building dreams together through unity and savings.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Together we save, together we grow, together we build our future"
          </p>
        </div>
      </div>
    </footer>
  );
};
