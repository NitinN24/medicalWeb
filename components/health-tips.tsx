import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  Heart,
  Shield,
  Thermometer,
} from "lucide-react";

export default function HealthTips() {
  const healthTips = [
    {
      title: "Winter Wellness: Boosting Your Immunity Naturally",
      excerpt:
        "Discover natural ways to strengthen your immune system during the winter months with proper nutrition, exercise, and lifestyle habits.",
      category: "Seasonal Health",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "/images/winter-wellness.jpg",
      icon: Shield,
      tags: ["Immunity", "Winter Care", "Nutrition"],
    },
    {
      title: "Medication Safety: Essential Tips for Safe Storage",
      excerpt:
        "Learn the proper ways to store your medications to maintain their effectiveness and ensure family safety.",
      category: "Medication Safety",
      readTime: "4 min read",
      date: "Dec 10, 2024",
      image: "/images/medication-safety.jpg",
      icon: Heart,
      tags: ["Safety", "Storage", "Medications"],
    },
    {
      title: "Managing Diabetes: Daily Care Tips and Monitoring",
      excerpt:
        "Essential daily practices for diabetes management, including blood sugar monitoring, diet tips, and medication adherence.",
      category: "Chronic Care",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      image: "/images/managing-diabetes.jpg",
      icon: Thermometer,
      tags: ["Diabetes", "Monitoring", "Lifestyle"],
    },
  ];

  return (
    <section id="health-tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Health Tips & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert health advice and tips from our qualified pharmacists to help
            you maintain optimal wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {healthTips.map((tip, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift bg-white border-0 shadow-lg"
            >
              <div className="relative">
                <img
                  src={tip.image || "/placeholder.svg"}
                  alt={`${
                    tip.title
                  } - comprehensive health guide covering ${tip.excerpt.substring(
                    0,
                    80
                  )}... - expert advice from SIDDHU MEDICAL pharmacy professionals`}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">
                    {tip.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <tip.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{tip.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tip.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">
                  {tip.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {tip.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tip.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">
            Stay Updated with Health Tips
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest health tips,
            medication reminders, and wellness advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              suppressHydrationWarning={true}
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Health Resources */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Wellness Programs</h4>
            <p className="text-gray-600 text-sm">
              Join our community wellness programs and health screenings
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              Health Consultations
            </h4>
            <p className="text-gray-600 text-sm">
              Free consultations with our qualified pharmacists
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Thermometer className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Health Monitoring</h4>
            <p className="text-gray-600 text-sm">
              Regular health checkups and monitoring services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
