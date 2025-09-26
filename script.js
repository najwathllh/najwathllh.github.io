// DOM Elements
const hamburgerMenu = document.getElementById("hamburgerMenu")
const mobileMenu = document.getElementById("mobileMenu")
const downloadCV = document.getElementById("downloadCV")
const letsConnect = document.getElementById("letsConnect")
const readMore = document.getElementById("readMore")
const aboutModal = document.getElementById("aboutModal")
const backBtn = document.getElementById("backBtn")

// Mobile menu toggle
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking outside
if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      hamburgerMenu.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  })
}

// Download CV button
if (downloadCV) {
  downloadCV.addEventListener("click", () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href =
      "data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL091dGxpbmVzIDIgMCBSCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvT3V0bGluZXMKL0NvdW50IDAKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9Db3VudCAxCi9LaWRzIFs0IDAgUl0KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSAKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago+PgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKE5handhIEF0aGFsbGFoIFB1dHJpIENWKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDc0IDAwMDAwIG4gCjAwMDAwMDAxMjAgMDAwMDAgbiAKMDAwMDAwMDE3NyAwMDAwMCBuIAowMDAwMDAwMzY0IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDU3CiUlRU9G"
    link.download = "Najwa_Athallah_Putri_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}

// Let's Connect button
if (letsConnect) {
  letsConnect.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

// Read More button (only on about page)
if (readMore) {
  readMore.addEventListener("click", () => {
    aboutModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })
}

// Back button in about modal (only on about page)
if (backBtn) {
  backBtn.addEventListener("click", () => {
    aboutModal.classList.remove("active")
    document.body.style.overflow = "auto"
  })
}

// Close about modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && aboutModal && aboutModal.classList.contains("active")) {
    aboutModal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
})

// Project links (placeholder functionality)
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    alert("This would open the Figma project in a new tab!")
    // In a real implementation, you would use:
    // window.open('https://figma.com/your-project-link', '_blank');
  })
})

// Contact links
const emailLink = document.querySelector('a[href^="mailto:"]')
if (emailLink) {
  emailLink.addEventListener("click", (e) => {
    // This will work with the user's default email client
    // You can customize the email address here
    e.target.href = "mailto:najwa.athallah@example.com?subject=Hello from Portfolio"
  })
}

// Smooth scrolling for better UX
document.documentElement.style.scrollBehavior = "smooth"

// Add some interactive animations
function addHoverEffects() {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Initialize hover effects
addHoverEffects()

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "0"
    img.style.transition = "opacity 0.5s ease"
    setTimeout(() => {
      img.style.opacity = "1"
    }, 100)
  })
})

// Smooth scrolling and navigation management
function updateActiveNavigation() {
  const sections = document.querySelectorAll(".section")
  const navItems = document.querySelectorAll(".nav-item")
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item")

  let currentSection = "home"

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id
    }
  })

  // Update side navigation
  navItems.forEach((item) => {
    item.classList.remove("active")
    if (item.dataset.section === currentSection) {
      item.classList.add("active")
    }
  })

  // Update mobile menu items
  mobileMenuItems.forEach((item) => {
    const href = item.getAttribute("href")
    if (href === `#${currentSection}`) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

// Listen for scroll events to update active navigation
window.addEventListener("scroll", updateActiveNavigation)

// Handle navigation clicks
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active")
        mobileMenu.classList.remove("active")
      }
    }
  })
})

// Initialize active navigation on page load
document.addEventListener("DOMContentLoaded", updateActiveNavigation)

// Refresh AOS setiap kali klik navigasi biar animasi muncul lagi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", () => {
    setTimeout(() => {
      AOS.refresh(); // re-trigger animasi
    }, 600); // kasih delay biar smooth sesuai durasi scroll
  });
});
