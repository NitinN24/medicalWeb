import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Award, label: "Years of Service", value: "15+" },
    { icon: Clock, label: "Hours Open Daily", value: "14" },
    { icon: Heart, label: "Customer Satisfaction", value: "99%" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            About SIDDHU MEDICAL
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serving our community with dedication, trust, and professional
            healthcare services since 2008
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 font-serif">
              Your Trusted Healthcare Partner
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2008 by Mr. Siddharth Kumar, SIDDHU MEDICAL CHEMIST
                AND DRUGGIST has been a cornerstone of healthcare in our
                community. What started as a small neighborhood pharmacy has
                grown into a trusted healthcare destination.
              </p>
              <p>
                Our mission is simple: to provide accessible, affordable, and
                quality healthcare products and services to every member of our
                community. We believe that good health should never be a luxury,
                but a fundamental right for everyone.
              </p>
              <p>
                With our team of qualified pharmacists and healthcare
                professionals, we ensure that every customer receives
                personalized attention and expert guidance for their health
                needs. From prescription medications to wellness consultations,
                we're here to support your journey to better health.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about-staff.png"
                alt="SIDDHU MEDICAL store exterior with professional signage and welcoming entrance, showcasing our established pharmacy location in the community"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px]"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon && (
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                )}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
