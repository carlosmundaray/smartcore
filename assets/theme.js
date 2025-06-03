document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Product image gallery
  const mainProductImage = document.getElementById("main-product-image")

  if (mainProductImage) {
    const thumbnails = document.querySelectorAll(".product-thumbnail")

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        const newSrc = this.getAttribute("data-src")
        mainProductImage.src = newSrc
      })
    })
  }

  // Quantity selector
  const quantityInputs = document.querySelectorAll(".quantity-input")

  quantityInputs.forEach((input) => {
    const decrementButton = input.previousElementSibling
    const incrementButton = input.nextElementSibling

    if (decrementButton && incrementButton) {
      decrementButton.addEventListener("click", () => {
        const currentValue = Number.parseInt(input.value)
        if (currentValue > 1) {
          input.value = currentValue - 1
        }
      })

      incrementButton.addEventListener("click", () => {
        const currentValue = Number.parseInt(input.value)
        input.value = currentValue + 1
      })
    }
  })

  // Product tabs
  const tabButtons = document.querySelectorAll("[data-tab]")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Hide all tabs
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.add("hidden")
      })

      // Show selected tab
      document.getElementById(tabId).classList.remove("hidden")

      // Update active state of tab buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("border-primary", "text-primary")
        btn.classList.add("border-transparent", "text-gray-500")
      })

      this.classList.remove("border-transparent", "text-gray-500")
      this.classList.add("border-primary", "text-primary")
    })
  })
})
