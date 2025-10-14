// Blog filtering functionality
document.addEventListener("DOMContentLoaded", () => {
  const categoryBtns = document.querySelectorAll(".category-btn")
  const blogCards = document.querySelectorAll(".blog-card")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      categoryBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Filter blog cards
      blogCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.classList.remove("hidden")
          card.style.display = "flex"
        } else {
          card.classList.add("hidden")
          card.style.display = "none"
        }
      })
    })
  })

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // Here you would typically send the email to your backend
      alert("Thank you for subscribing! You'll receive writing insights and updates soon.")
      this.reset()
    })
  }
})
