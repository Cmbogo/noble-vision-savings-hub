
import { PiggyBank, CreditCard, GraduationCap, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SavingsProgram = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Savings & Loan Program
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured approach to financial growth that benefits every member through 
            individual savings and accessible loan opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <PiggyBank className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">KSh 1,500</p>
              <p className="text-gray-600 text-sm">Per member contribution</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Wallet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Group Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-600 mb-2">KSh 10,000</p>
              <p className="text-gray-600 text-sm">Monthly collective goal</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Soft Loans</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-bold text-purple-600 mb-2">Up to 100%</p>
              <p className="text-gray-600 text-sm">Of your savings balance</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <GraduationCap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Education Fund</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-bold text-orange-600 mb-2">Priority</p>
              <p className="text-gray-600 text-sm">Children's education support</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Regular Contributions</h4>
              <p className="text-gray-600 text-sm">
                Each member contributes KSh 1,500 monthly, deposited in our co-operative bank account
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apply for Loans</h4>
              <p className="text-gray-600 text-sm">
                Members can access soft loans up to their savings amount with flexible repayment terms
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Build Your Future</h4>
              <p className="text-gray-600 text-sm">
                Use funds to improve living standards, fund education, and work towards land ownership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
