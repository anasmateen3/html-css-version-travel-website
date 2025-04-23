import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import NewsletterSignup from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-white">
      <NewsletterSignup />

      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-orange-500">Travloving</h3>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Case studies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Updates
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-orange-500">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Culture
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-orange-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Getting started
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Help center
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Server status
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Report a bug
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                Chat support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container py-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            Copyright © {new Date().getFullYear()} All Rights Reserved |
            <Link href="/terms" className="text-blue-600 hover:underline ml-1">
              Terms and Conditions
            </Link>{" "}
            |
            <Link href="/privacy" className="text-blue-600 hover:underline ml-1">
              Privacy Policy
            </Link>
          </p>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <span>contact@company.com</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500">
              <span>(xx) xxxx-xxxx</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
