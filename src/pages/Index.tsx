
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Community Core</h1>
            </div>
            <nav className="flex items-center gap-4">
              <Link to="/policies">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Staff Policies
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Gamepad2 className="h-16 w-16 text-blue-600" />
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Community Core</h1>
              <p className="text-xl text-gray-600">Professional Roblox Community</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to Community Core - where professionalism meets gaming. 
            We're dedicated to creating an exceptional Roblox community experience for all our members.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Professional Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                We maintain the highest standards of professionalism and conduct across all our community operations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Staff Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Our dedicated staff team follows comprehensive policies to ensure exceptional community management.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Clear Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Transparent and comprehensive policies ensure fair treatment and clear expectations for all staff members.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Staff Member?</h2>
          <p className="text-xl mb-6 opacity-90">
            Review our comprehensive staff policies and guidelines
          </p>
          <Link to="/policies">
            <Button size="lg" variant="secondary" className="text-blue-600 font-semibold">
              View Staff Policies
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-semibold">Community Core</span>
            </div>
            <p className="text-gray-400">
              Professional Roblox Community | Established 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
