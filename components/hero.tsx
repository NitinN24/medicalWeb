import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Heart, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-serif leading-tight">
                SIDDHU MEDICAL
                <span className="block text-emerald-600">
                  CHEMIST & DRUGGIST
                </span>
              </h1>
              <p className="text-xl text-emerald-700 font-semibold">
                Your Health, Our Priority
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your trusted neighborhood pharmacy providing quality medicines,
                expert health consultation, and reliable healthcare services for
                over 15 years. We're committed to your well-being with
                personalized care and professional service.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>Licensed Pharmacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-emerald-600" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-pharmacy.png"
                alt="Professional pharmacist in modern SIDDHU MEDICAL pharmacy interior with organized medicine shelves, consultation counter, and clean healthcare environment"
                className="w-full h-[500px] sm:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Genuine Medicines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
