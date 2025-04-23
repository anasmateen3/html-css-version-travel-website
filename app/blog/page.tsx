"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Hidden Gems in Southeast Asia",
      excerpt: "Discover the lesser-known destinations that offer authentic experiences away from the tourist crowds.",
      image: "/images/blog-post-1.png",
      date: "April 15, 2025",
      author: "Sarah Johnson",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "How to Pack for a Long-Term Adventure",
      excerpt: "Essential packing tips and tricks for those planning extended trips around the world.",
      image: "/images/blog-post-2.png",
      date: "April 10, 2025",
      author: "Michael Chen",
      category: "Travel Tips",
    },
    {
      id: 3,
      title: "Sustainable Travel: Reducing Your Carbon Footprint",
      excerpt: "Practical ways to make your travels more environmentally friendly without sacrificing experiences.",
      image: "/images/blog-post-3.png",
      date: "April 5, 2025",
      author: "Emma Rodriguez",
      category: "Sustainable Travel",
    },
    {
      id: 4,
      title: "The Ultimate Food Tour of Italy",
      excerpt: "A culinary journey through Italy's diverse regions and their signature dishes.",
      image: "/images/blog-post-1.png",
      date: "March 28, 2025",
      author: "Marco Rossi",
      category: "Food & Culture",
    },
    {
      id: 5,
      title: "Budget Travel: How to See Europe for Less",
      excerpt: "Smart strategies for experiencing the best of Europe without breaking the bank.",
      image: "/images/blog-post-2.png",
      date: "March 20, 2025",
      author: "Lisa Wang",
      category: "Budget Travel",
    },
    {
      id: 6,
      title: "Solo Female Travel Safety Tips",
      excerpt: "Essential advice for women traveling alone to stay safe while having amazing adventures.",
      image: "/images/blog-post-3.png",
      date: "March 15, 2025",
      author: "Priya Sharma",
      category: "Solo Travel",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="container py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover travel tips, destination guides, and inspiring stories to help you plan your next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">{post.title}</h2>
                </Link>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <Link href={`/blog/${post.id}`} className="text-orange-500 font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="rounded-full bg-orange-500 hover:bg-orange-600">Load More Articles</Button>
        </div>
      </section>
    </div>
  )
}
