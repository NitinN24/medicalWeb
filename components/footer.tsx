import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Heart, Shield, Award } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Health Tips", href: "#health-tips" },
    { name: "Contact Us", href: "#contact" },
    { name: "Emergency Services", href: "#contact" },
  ]

  const services = [
    { name: "Prescription Refill", href: "#services" },
    { name: "Home Delivery", href: "#services" },
    { name: "Health Consultation", href: "#services" },
    { name: "Medical Equipment", href: "#services" },
    { name: "OTC Medicines", href: "#services" },
    { name: "24/7 Emergency", href: "#services" },
  ]

  const healthCategories = [
    { name: "Baby Care", href: "#products" },
    { name: "Vitamins & Supplements", href: "#products" },
    { name: "First Aid", href: "#products" },
    { name: "Skincare", href: "#products" },
    { name: "Pain Relief", href: "#products" },
    { name: "Diabetes Care", href: "#products" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg font-serif">SIDDHU MEDICAL</h3>
                <p className="text-sm text-gray-400">CHEMIST AND DRUGGIST</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted neighborhood pharmacy providing quality healthcare services and genuine medicines for over 15
              years. Your health is our priority.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">123 Health Street, Medical District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@siddhumedical.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Mon-Sat: 8AM-10PM | Sun: 9AM-9PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Health Categories</h4>
            <ul className="space-y-3">
              {healthCategories.map((category, index) => (
                <li key={index}>
                  <a href={category.href} className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-bold text-xl mb-2 font-serif">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for health tips, special offers, and medication reminders.
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <p className="font-semibold">Licensed Pharmacy</p>
                <p className="text-sm text-gray-400">Government Certified</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <p className="font-semibold">Quality Assured</p>
                <p className="text-sm text-gray-400">100% Genuine Medicines</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <p className="font-semibold">Award Winning</p>
                <p className="text-sm text-gray-400">Best Pharmacy 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 SIDDHU MEDICAL CHEMIST AND DRUGGIST. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-emerald-400">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-emerald-400">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-emerald-400">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-emerald-400">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
