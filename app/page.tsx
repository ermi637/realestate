"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Phone,
  MapPin,
  Users,
  Award,
  Shield,
  Star,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Bath,
  Bed,
  Square,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [showAllProperties, setShowAllProperties] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.origin + "/#home"
    }
    return "#home"
  }

  const openWhatsApp = () => {
    const phoneNumber = "923xxxxxxxxx" // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your real estate services. Please provide me more information."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Direct WhatsApp opening - no permission dialog
    window.open(whatsappUrl, "_blank")
  }

  const properties = [
    {
      id: 1,
      type: "Villa",
      location: "DHA Phase 5",
      price: "2.5 Crore",
      beds: 5,
      baths: 4,
      area: "500 sq yd",
      image: "/villa1.jpg?height=300&width=400&text=Luxury+Villa+DHA",
    },
    {
      id: 2,
      type: "Apartment",
      location: "Clifton Block 2",
      price: "1.8 Crore",
      beds: 3,
      baths: 2,
      area: "1200 sq ft",
      image: "/villa2.jpeg?height=300&width=400&text=Modern+Apartment+Clifton",
    },
    {
      id: 3,
      type: "House",
      location: "Gulshan-e-Iqbal",
      price: "1.2 Crore",
      beds: 4,
      baths: 3,
      area: "240 sq yd",
      image: "/villa3.jpeg?height=300&width=400&text=Family+House+Gulshan",
    },
    {
      id: 4,
      type: "Plot",
      location: "DHA Phase 8",
      price: "80 Lac",
      beds: 0,
      baths: 0,
      area: "120 sq yd",
      image: "/villa4.jpeg?height=300&width=400&text=Residential+Plot+DHA",
    },
    {
      id: 5,
      type: "Commercial",
      location: "Shahrah-e-Faisal",
      price: "3.5 Crore",
      beds: 0,
      baths: 2,
      area: "2000 sq ft",
      image: "/villa5.jpg?height=300&width=400&text=Commercial+Building+Shahrah",
    },
    {
      id: 6,
      type: "Penthouse",
      location: "Defence Phase 6",
      price: "4.2 Crore",
      beds: 4,
      baths: 5,
      area: "3000 sq ft",
      image: "/villa6.jpg?height=300&width=400&text=Luxury+Penthouse+Defence",
    },
    {
      id: 7,
      type: "Townhouse",
      location: "Bahria Town",
      price: "1.5 Crore",
      beds: 3,
      baths: 3,
      area: "200 sq yd",
      image: "/villa7.jpeg?height=300&width=400&text=Modern+Townhouse+Bahria",
    },
  ]

  const displayedProperties = showAllProperties ? properties : properties.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#6b2cbf] to-red-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/download.png?height=40&width=40&text=RE&bg=ffffff&color=2563eb"
                alt="Real Estate Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-white">
                <h1 className="text-xl font-bold">Real Estate</h1>
                <p className="text-xs text-red-100">Real Estate Solutions</p>
              </div>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-red-100 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-red-100 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-red-100 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("properties")}
                className="text-white hover:text-red-100 transition-colors cursor-pointer"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-red-100 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Call Button */}
            <Button
              variant="secondary"
              className="hidden md:flex bg-white text-red-600 hover:bg-red-50 font-medium"
              onClick={openWhatsApp}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 03xxxxxxxxx
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-400 py-16 lg:py-24 overflow-hidden"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/aboutus.jpeg?height=800&width=1200&text=Karachi+Skyline&bg=1e40af&color=ffffff"
            alt="Karachi Skyline"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Your Trusted Realtor
                <br />
                and Property Dealer
                <br />
                <span className="text-red-100">in Karachi</span>
              </h1>

              <p className="text-lg lg:text-xl text-red-100 leading-relaxed max-w-2xl">
                Welcome to Real Estate! Your go-to solution for all your real estate needs in the heart of Karachi. Our
                team is here to assist you—whether it's buying, renting, selling, investing in plots, or planning a new
                office. We've got you covered.
              </p>

              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3"
                onClick={openWhatsApp}
              >
                Call Now: 03xxxxxxxxx
              </Button>
            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full">
              <Card className="bg-red-600/30 backdrop-blur-sm border-red-400/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Get a Free Consultation</h2>
                    <p className="text-red-100">Submit your details below to get a call from your Estate Agent</p>
                  </div>

                  <form action="https://formsubmit.co/chtalhaimran220@gmail.com" method="POST" className="space-y-4">
                    <input type="hidden" name="_subject" value="New Consultation Request from Website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={getCurrentUrl()} />

                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                    />
                    <Input
                      name="phone"
                      placeholder="Your Phone Number"
                      type="tel"
                      required
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                    />
                    <Input
                      name="email"
                      placeholder="Your Email Address (Optional)"
                      type="email"
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message (Optional)"
                      rows={4}
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900 resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3"
                    >
                      I Want a Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Real Estate</h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in Karachi's real estate market, we have built a reputation for trust,
                reliability, and exceptional service in property dealings.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of dedicated professionals understands the local market dynamics and helps clients make
                informed decisions whether they're buying their first home, investing in commercial property, or looking
                for rental opportunities.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">Learn More About Us</Button>
            </div>
            <div className="relative">
              <Image
                src="/aboutus.jpeg?height=400&width=600&text=Real+Estate+Office&bg=f8fafc&color=1e293b"
                alt="Real Estate Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Professional real estate agents with deep market knowledge</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Successfully completed thousands of property transactions</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
                <p className="text-gray-600">Transparent dealings with complete legal documentation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to meet all your property needs in Karachi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Property Buying",
                desc: "Find your dream home or investment property",
                icon: Home,
                image: "/villa1.jpg?height=200&width=300&text=Property+Buying&bg=dbeafe&color=1e40af",
              },
              {
                title: "Property Selling",
                desc: "Get the best value for your property",
                icon: Award,
                image: "/villa2.jpeg?height=200&width=300&text=Property+Selling&bg=dcfce7&color=166534",
              },
              {
                title: "Rental Services",
                desc: "Rent out or find rental properties",
                icon: MapPin,
                image: "/villa5.jpg?height=200&width=300&text=Rental+Services&bg=fef3c7&color=92400e",
              },
              {
                title: "Plot Investment",
                desc: "Invest in residential and commercial plots",
                icon: Shield,
                image: "/villa4.jpeg?height=200&width=300&text=Plot+Investment&bg=fce7f3&color=be185d",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of premium properties in prime locations across Karachi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={`${property.type} in ${property.location}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    PKR {property.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Modern {property.type} in {property.location}
                  </h3>

                  {property.beds > 0 && (
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{property.area}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">PKR {property.price}</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setShowAllProperties(!showAllProperties)}
            >
              {showAllProperties ? "Show Less Properties" : "View All Properties"}
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are here to guide you through every step of your real estate journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ch Talha",
                role: "Founder & CEO",
                image: "/zahid.jpg?height=300&width=300&text=Ch+Talha&bg=dbeafe&color=1e40af",
                experience: "15+ Years Experience",
              },
              {
                name: "Anjum Khan",
                role: "Senior Property Consultant",
                image: "/anjum.jpeg?height=300&width=300&text=Anjum+Khan&bg=dcfce7&color=166534",
                experience: "12+ Years Experience",
              },
              {
                name: "Zahid Ali",
                role: "Investment Specialist",
                image: "/zahid.jpg?height=300&width=300&text=Zahid+Ali&bg=fef3c7&color=92400e",
                experience: "10+ Years Experience",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <div className="flex justify-center gap-3">
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-red-600 cursor-pointer transition-colors" />
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Khan",
                location: "DHA Phase 5",
                rating: 5,
                text: "Excellent service! They helped me find the perfect home for my family. Very professional and trustworthy.",
                image: "/placeholder.svg?height=80&width=80&text=AK&bg=dbeafe&color=1e40af",
                property: "Bought Villa",
              },
              {
                name: "Fatima Ali",
                location: "Gulshan-e-Iqbal",
                rating: 5,
                text: "Professional and trustworthy. Highly recommend Real Estate for anyone looking to buy or sell property.",
                image: "/placeholder.svg?height=80&width=80&text=FA&bg=dcfce7&color=166534",
                property: "Sold House",
              },
              {
                name: "Muhammad Hassan",
                location: "Clifton",
                rating: 5,
                text: "Great experience selling my property. They got me the best price and handled everything professionally!",
                image: "/placeholder.svg?height=80&width=80&text=MH&bg=fef3c7&color=92400e",
                property: "Rented Apartment",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-red-600">{testimonial.property}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Karachi+City+View&bg=1e40af&color=ffffff"
            alt="Karachi City View"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              Ready to start your real estate journey? Contact us today for expert guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-red-100">03xxxxxxxxx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-red-100">chtalhaimran220@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-red-100">North Nazimabad Karachi</p>
                </div>
              </div>

              <div className="mt-8">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Office+Location&bg=1e40af&color=ffffff"
                  alt="Real Estate Office Location"
                  width={400}
                  height={200}
                  className="rounded-lg opacity-80"
                />
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <form action="https://formsubmit.co/chtalhaimran220@gmail.com" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={getCurrentUrl()} />

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      type="tel"
                      required
                      className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                    />
                  </div>
                  <Input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    required
                    className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900 resize-none"
                  />
                  <Button type="submit" className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/download.png?height=32&width=32&text=RE&bg=ffffff&color=2563eb"
                  alt="Real Estate Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Real Estate</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all real estate needs in Karachi. Professional, reliable, and results-driven.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("properties")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Properties
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Rental Services</li>
                <li>Plot Investment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 03xxxxxxxxx</p>
                <p>✉️ chtalhaimran220@gmail.com</p>
                <p>📍 North Nazimabad Karachi</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
