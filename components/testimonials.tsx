"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Regular Customer",
      rating: 5,
      text: "SIDDHU MEDICAL has been our family pharmacy for over 8 years. Their home delivery service is excellent, and the staff is always helpful with medication queries. Highly recommended!",
      image: "/images/customer1.png",
    },
    {
      name: "Rajesh Kumar",
      location: "Diabetes Patient",
      rating: 5,
      text: "As a diabetic patient, I need regular supplies and monitoring. The team at SIDDHU MEDICAL provides excellent consultation and ensures I never run out of my medications.",
      image: "/images/customer3.png",
    },
    {
      name: "Anita Patel",
      location: "Senior Citizen",
      rating: 5,
      text: "The pharmacists here are very knowledgeable and patient. They explain everything clearly and help me understand my medications. The home delivery is a blessing for elderly customers like me.",
      image: "/images/customer2.png",
    },
    {
      name: "Dr. Vikram Singh",
      location: "Local Doctor",
      rating: 5,
      text: "I regularly refer my patients to SIDDHU MEDICAL. They maintain excellent medicine quality, provide accurate dispensing, and offer valuable patient counseling. A trusted healthcare partner.",
      image: "/images/customer4.jpg",
    },
    {
      name: "Meera Gupta",
      location: "New Mother",
      rating: 5,
      text: "When I had my baby, SIDDHU MEDICAL was incredibly helpful with all baby care products and advice. Their baby care section is well-stocked and the staff knows their products well.",
      image: "/images/customer5.jpg",
    },
    {
      name: "Amit Joshi",
      location: "Working Professional",
      rating: 5,
      text: "With my busy schedule, the online ordering and home delivery service is perfect. They even send reminders for prescription refills. Excellent customer service and reliability.",
      image: "/images/customer6.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Fix hydration issues by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isClient]);

  // Prevent hydration mismatch by not rendering interactive elements until client-side
  if (!isClient) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real experiences from our valued customers who trust us with their
              healthcare needs
            </p>
          </div>

          {/* Static version for SSR */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-white shadow-xl border-0">
              <div className="flex items-start gap-6">
                <Quote className="w-12 h-12 text-emerald-600 flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[0].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[0].image || "/placeholder.svg"}
                      alt={`${testimonials[0].name} - satisfied customer of SIDDHU MEDICAL pharmacy sharing positive experience with our healthcare services`}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonials[0].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[0].location}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonials[0].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Static indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === 0 ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Customer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                4.9
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                99%
              </div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from our valued customers who trust us with their
            healthcare needs
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-white shadow-xl border-0">
            <div className="flex items-start gap-6">
              <Quote className="w-12 h-12 text-emerald-600 flex-shrink-0 mt-2" />
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={`${testimonials[currentIndex].name} - satisfied customer of SIDDHU MEDICAL pharmacy sharing positive experience with our healthcare services`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-gray-200"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-gray-200"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              5000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
