
import { MapPin, Building, TrendingUp, Users } from "lucide-react";

export const Goals = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Together, we're working towards ambitious goals that will transform 
            our community and secure our families' futures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Dreams, One Contribution at a Time
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Land Acquisition</h4>
                  <p className="text-gray-600">
                    Our primary goal is to collectively purchase land that will serve as 
                    the foundation for our housing development project.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Homes</h4>
                  <p className="text-gray-600">
                    Each member will have the opportunity to build their own home, 
                    creating a supportive community of homeowners.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-8 h-8 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Growth</h4>
                  <p className="text-gray-600">
                    Expand our financial capabilities through diversified investments 
                    and increased savings capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Our Progress Dashboard
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Monthly Target</span>
                  <span className="font-semibold text-green-600">KSh 66,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-semibold text-blue-600">44/44</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Land Fund Progress</span>
                  <span className="font-semibold text-purple-600">Growing</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
