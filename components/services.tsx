import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill, Truck, Stethoscope, ShoppingBag, Activity, Clock, Phone, Heart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Pill,
      title: "Prescription Refill",
      description: "Quick and accurate prescription filling with quality medicines from trusted manufacturers.",
      features: ["Digital prescription management", "Automatic refill reminders", "Insurance claim assistance"],
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Free home delivery for orders above ₹500. Same-day delivery available in local area.",
      features: ["Free delivery above ₹500", "Same-day delivery", "Emergency medicine delivery"],
    },
    {
      icon: Stethoscope,
      title: "Health Consultation",
      description: "Expert health advice from qualified pharmacists and visiting doctors.",
      features: ["Blood pressure monitoring", "Diabetes consultation", "General health checkups"],
    },
    {
      icon: ShoppingBag,
      title: "OTC Medicines",
      description: "Wide range of over-the-counter medicines, vitamins, and health supplements.",
      features: ["Pain relief medicines", "Cold & flu remedies", "Vitamins & supplements"],
    },
    {
      icon: Activity,
      title: "Medical Equipment",
      description: "Quality medical devices and equipment for home healthcare needs.",
      features: ["Blood pressure monitors", "Glucometers", "Thermometers & scales"],
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency medicine service for urgent healthcare needs.",
      features: ["Emergency hotline", "Critical medicine supply", "Night delivery service"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Our Healthcare Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive pharmacy services designed to meet all your healthcare needs with professional care and
            convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover-lift bg-white border-0 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>

              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-serif">Need Immediate Assistance?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our qualified pharmacists are available to help you with any questions about medications, health concerns,
              or emergency medicine needs.
            </p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
