import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, Send } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: [
        "123 Health Street, Medical District",
        "Near City Hospital, Sector 15",
        "Landmark: Opposite Metro Station",
      ],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210 (Main)", "+91 98765 43211 (Emergency)", "+91 98765 43212 (Home Delivery)"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@siddhumedical.com", "orders@siddhumedical.com", "emergency@siddhumedical.com"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 10:00 PM",
        "Sunday: 9:00 AM - 9:00 PM",
        "24/7 Emergency Service Available",
      ],
      action: "View Schedule",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions, prescriptions, or health consultations. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Get In Touch</h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover-lift bg-white border-0 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      {info.action}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Send us a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input placeholder="Enter your phone number" className="border-gray-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="Enter your email address" className="border-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What is this regarding?" className="border-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Please describe your query or requirement..."
                    rows={5}
                    className="border-gray-300"
                  />
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-white border-0 shadow-lg">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif">Our Location</h3>
                  <p className="text-gray-600">Visit us at our convenient location</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Health Street, Medical District</p>
                <p className="text-sm text-gray-500">Near City Hospital, Sector 15</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12">
          <div className="bg-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-serif">Emergency Services</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Need urgent medication or emergency consultation? Our 24/7 emergency service is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
