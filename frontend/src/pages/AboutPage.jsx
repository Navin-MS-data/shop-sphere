import { ShoppingBag, Heart, Leaf, Users, Award, TrendingUp } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Sustainability",
      description:
        "We're committed to eco-friendly fashion that doesn't harm our planet. Every product is carefully sourced with sustainability in mind.",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Quality First",
      description:
        "We believe in quality over quantity. Our products are built to last, reducing waste and ensuring customer satisfaction.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We provide exceptional service and support to make your shopping experience memorable.",
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from product selection to customer service and delivery.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Products Sold" },
    { number: "6", label: "Store Locations" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/team-1.jpg",
      description: "Passionate about sustainable fashion and ethical business practices.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/team-2.jpg",
      description: "Ensuring seamless operations and exceptional customer experience.",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "/team-3.jpg",
      description: "Curating the latest trends in eco-friendly fashion.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Shop Sphere</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your premier destination for eco-friendly fashion. We believe style and sustainability
              can coexist beautifully.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, Shop Sphere started with a simple mission: to make sustainable
                fashion accessible to everyone. We noticed a gap in the market for stylish,
                eco-friendly clothing that didn't compromise on quality or design.
              </p>
              <p>
                What began as a small online store has grown into a thriving community of conscious
                consumers across India. We've expanded to 6 major cities, but our commitment to
                sustainability remains unchanged.
              </p>
              <p>
                Today, we're proud to offer a curated collection of fashion-forward pieces that are
                as kind to the planet as they are to your wardrobe. Every product we sell meets our
                strict sustainability criteria.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 text-gray-900 shadow-2xl border border-gray-200">
              <ShoppingBag className="w-20 h-20 mb-6 text-gray-700" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To revolutionize the fashion industry by proving that style, quality, and
                sustainability can go hand in hand. We're building a future where conscious
                consumption is the norm, not the exception.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape the way we serve our customers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Shop Sphere?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Trends</h3>
              <p className="text-gray-600">
                Stay ahead with our curated collection of the latest fashion trends, updated
                regularly to keep your wardrobe fresh.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Leaf className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Every product is carefully selected to meet our sustainability standards, ensuring
                minimal environmental impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Award className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Each item undergoes rigorous quality checks before
                reaching you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 text-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Sustainable Fashion Movement</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the change. Shop consciously, look great, and make a positive impact on our
            planet.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
