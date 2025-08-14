import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export default function Products() {
  const categories = [
    {
      name: "Baby Care",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Diapers & Wipes", "Baby Formula", "Baby Bottles", "Skin Care"],
      featured: {
        name: "Premium Baby Diapers",
        price: "₹899",
        originalPrice: "₹999",
        rating: 4.8,
      },
    },
    {
      name: "Vitamins & Supplements",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Multivitamins", "Calcium Tablets", "Omega-3", "Protein Powder"],
      featured: {
        name: "Complete Multivitamin",
        price: "₹649",
        originalPrice: "₹799",
        rating: 4.7,
      },
    },
    {
      name: "First Aid",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Bandages", "Antiseptics", "Pain Relief Gel", "Thermometers"],
      featured: {
        name: "Complete First Aid Kit",
        price: "₹1,299",
        originalPrice: "₹1,499",
        rating: 4.9,
      },
    },
    {
      name: "Skincare",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Moisturizers", "Sunscreen", "Face Wash", "Anti-aging Cream"],
      featured: {
        name: "Daily Moisturizer SPF 30",
        price: "₹449",
        originalPrice: "₹549",
        rating: 4.6,
      },
    },
    {
      name: "Pain Relief",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Pain Relief Tablets", "Muscle Relaxant Gel", "Hot/Cold Packs", "Joint Care"],
      featured: {
        name: "Fast Relief Pain Gel",
        price: "₹199",
        originalPrice: "₹249",
        rating: 4.5,
      },
    },
    {
      name: "Diabetes Care",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Glucometers", "Test Strips", "Insulin Supplies", "Diabetic Snacks"],
      featured: {
        name: "Digital Glucometer Kit",
        price: "₹1,899",
        originalPrice: "₹2,299",
        rating: 4.8,
      },
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quality healthcare products from trusted brands at competitive prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover-lift bg-white border-0 shadow-lg">
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.name} products including ${category.products.join(", ")} available at SIDDHU MEDICAL pharmacy`}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">{category.name}</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{category.name}</h3>

                <div className="space-y-2 mb-4">
                  {category.products.map((product, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      • {product}
                    </div>
                  ))}
                </div>

                {/* Featured Product */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{category.featured.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{category.featured.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-emerald-600">{category.featured.price}</span>
                      <span className="text-sm text-gray-500 line-through">{category.featured.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="text-emerald-600">
                      In Stock
                    </Badge>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-serif">Special Offers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Free Delivery</h4>
                <p className="text-sm text-blue-100">On orders above ₹500</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">10% Off</h4>
                <p className="text-sm text-blue-100">On first online order</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Loyalty Points</h4>
                <p className="text-sm text-blue-100">Earn points on every purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
