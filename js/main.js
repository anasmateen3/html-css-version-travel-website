document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })
  }

  // Navigation highlighting based on current page
  const currentPath = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")
    if (currentPath === linkPath || (currentPath.includes(linkPath) && linkPath !== "/")) {
      link.classList.add("active")
    }
  })

  // Header scroll effect
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const prevButton = document.querySelector(".testimonial-arrow.prev")
  const nextButton = document.querySelector(".testimonial-arrow.next")

  if (testimonialSlides.length > 0 && prevButton && nextButton) {
    let currentSlide = 0

    function showSlide(index) {
      testimonialSlides.forEach((slide) => slide.classList.remove("active"))

      // Handle index wrapping
      if (index < 0) index = testimonialSlides.length - 1
      if (index >= testimonialSlides.length) index = 0

      testimonialSlides[index].classList.add("active")
      currentSlide = index
    }

    prevButton.addEventListener("click", () => {
      showSlide(currentSlide - 1)
    })

    nextButton.addEventListener("click", () => {
      showSlide(currentSlide + 1)
    })

    // Auto-rotate slides every 5 seconds
    setInterval(() => {
      showSlide(currentSlide + 1)
    }, 5000)
  }

  // Scroll animations
  const animatedElements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")

  function checkScroll() {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const elementTop = rect.top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add("active")
      } else {
        el.classList.remove("active")
      }
    })
  }

  // Initial check for elements in view
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      if (email) {
        // In a real application, you would send this to your server
        alert("Thank you for subscribing to our newsletter!")
        this.reset()
      }
    })
  }
})

// Authentication system for login/signup
const auth = {
  // Check if user is logged in
  isLoggedIn() {
    return localStorage.getItem("user") !== null
  },

  // Get current user
  getCurrentUser() {
    const userData = localStorage.getItem("user")
    return userData ? JSON.parse(userData) : null
  },

  // Login user
  login(email, password) {
    // This is a mock login - in a real app, you would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password) {
          const userData = {
            id: "1",
            name: email.split("@")[0],
            email: email,
          }

          localStorage.setItem("user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  },

  // Logout user
  logout() {
    localStorage.removeItem("user")
    window.location.href = "login.html"
  },

  // Register user
  register(firstName, lastName, email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (firstName && lastName && email && password) {
          const userData = {
            id: "1",
            name: `${firstName} ${lastName}`,
            email: email,
          }

          localStorage.setItem("user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("Invalid registration data"))
        }
      }, 1000)
    })
  },
}

// Check if user is already logged in and redirect accordingly
document.addEventListener("DOMContentLoaded", () => {
  // Check the current page
  const currentPath = window.location.pathname
  const isLoginPage = currentPath.includes("login.html")
  const isSignupPage = currentPath.includes("signup.html")

  // If user is already logged in and tries to access login/signup page, redirect to home
  if (auth.isLoggedIn() && (isLoginPage || isSignupPage)) {
    window.location.href = "index.html"
  }

  // Login form handling
  const loginForm = document.getElementById("login-form")
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const loginButton = document.querySelector('button[type="submit"]')

      try {
        loginButton.disabled = true
        loginButton.textContent = "Logging in..."

        await auth.login(email, password)
        window.location.href = "index.html"
      } catch (error) {
        alert("Login failed. Please check your credentials and try again.")
      } finally {
        loginButton.disabled = false
        loginButton.textContent = "Login"
      }
    })
  }

  // Signup form handling
  const signupForm = document.getElementById("signup-form")
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const signupButton = document.querySelector('button[type="submit"]')

      try {
        signupButton.disabled = true
        signupButton.textContent = "Signing up..."

        await auth.register(firstName, lastName, email, password)
        window.location.href = "index.html"
      } catch (error) {
        alert("Registration failed. Please try again.")
      } finally {
        signupButton.disabled = false
        signupButton.textContent = "Sign Up"
      }
    })
  }
})
