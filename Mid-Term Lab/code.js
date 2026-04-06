// ============================================
// MAJESTIC MARQUEE - CAROUSEL FUNCTIONALITY
// ============================================

$(function() {
  // Carousel initialization
  let currentIndex = 0;
  const totalSlides = $('.carousel-slide').length;
  const carousel = $('.carousel-container');
  const carouselWrapper = $('.carousel-wrapper');
  let autoplayInterval;
  let isAutoPlaying = true;

  // Initialize
  updateSlideCounter();
  setCarouselContainerWidth();
  
  // Ensure carousel starts at proper position after page load
  setTimeout(function() {
    updateCarouselPosition();
  }, 100);

  // Get visible slides count based on screen width
  function getVisibleSlides() {
    const width = $(window).width();
    if (width > 768) {
      return 3; // Desktop: 3 cards
    } else if (width > 480) {
      return 2; // Tablet: 2 cards
    } else {
      return 1; // Mobile: 1 card
    }
  }

  // Set carousel container width to fit all slides
  function setCarouselContainerWidth() {
    const wrapperWidth = carouselWrapper.width();
    const visibleSlides = getVisibleSlides();
    const gapSize = 15; // CSS gap value
    const totalGapWidth = gapSize * (visibleSlides - 1);
    
    // Calculate slide width needed to fill the visible area
    const slideWidth = (wrapperWidth - totalGapWidth) / visibleSlides;
    
    // Set all slide widths to this value
    $('.carousel-slide').css({
      'width': slideWidth + 'px'
    });
    
    // Calculate total width needed for all slides
    const totalGapWidthAll = gapSize * (totalSlides - 1);
    const totalSlidesWidth = slideWidth * totalSlides;
    const totalContainerWidth = totalSlidesWidth + totalGapWidthAll;
    
    // Set container width to fit all slides
    carousel.css({
      'width': totalContainerWidth + 'px'
    });
  }

  // Calculate slide width by measuring the actual first slide
  function getSlideWidth() {
    const firstSlide = $('.carousel-slide').eq(0);
    if (firstSlide.length === 0) return 0;
    
    // Get the calculated width from CSS
    const width = parseFloat(firstSlide.css('width'));
    const paddingLeft = parseFloat(firstSlide.css('padding-left'));
    const paddingRight = parseFloat(firstSlide.css('padding-right'));
    const marginLeft = parseFloat(firstSlide.css('margin-left'));
    const marginRight = parseFloat(firstSlide.css('margin-right'));
    
    return width + paddingLeft + paddingRight + marginLeft + marginRight;
  }

  // Update carousel position
  function updateCarouselPosition() {
    const firstSlide = $('.carousel-slide').eq(0);
    if (firstSlide.length === 0) return;
    
    const slideWidth = parseFloat(firstSlide.css('width'));
    const gapSize = 15; // CSS gap value
    const moveDistance = slideWidth + gapSize;
    const translateX = -(currentIndex * moveDistance);
    
    carousel.css({
      'transform': `translateX(${translateX}px)`,
      'transition': 'transform 0.5s ease-in-out'
    });
    
    updateSlideCounter();
  }

  // Update slide counter display
  function updateSlideCounter() {
    $('#currentSlide').text(currentIndex + 1);
    $('#totalSlides').text(totalSlides);
  }

  // Get actual maximum index based on visible slides
  function getMaxIndex() {
    const visibleSlides = getVisibleSlides();
    return Math.max(0, totalSlides - visibleSlides);
  }

  // Get next index with infinite loop
  function getNextIndex() {
    const maxIndex = getMaxIndex();
    let nextIndex = currentIndex + 1;
    
    if (nextIndex > maxIndex) {
      nextIndex = 0;
    }
    
    return nextIndex;
  }

  // Get previous index with infinite loop
  function getPrevIndex() {
    const maxIndex = getMaxIndex();
    let prevIndex = currentIndex - 1;
    
    if (prevIndex < 0) {
      prevIndex = maxIndex;
    }
    
    return prevIndex;
  }

  // Next button click handler
  $('#carouselNext').on('click', function(e) {
    e.preventDefault();
    currentIndex = getNextIndex();
    updateCarouselPosition();
    resetAutoplay();
  });

  // Previous button click handler
  $('#carouselPrev').on('click', function(e) {
    e.preventDefault();
    currentIndex = getPrevIndex();
    updateCarouselPosition();
    resetAutoplay();
  });

  // Auto-play function
  function startAutoplay() {
    stopAutoplay(); // Clear any existing intervals
    
    autoplayInterval = setInterval(function() {
      currentIndex = getNextIndex();
      updateCarouselPosition();
    }, 5000); // Auto-play every 5 seconds
    
    isAutoPlaying = true;
  }

  // Stop auto-play
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
    isAutoPlaying = false;
  }

  // Reset auto-play
  function resetAutoplay() {
    if (isAutoPlaying) {
      startAutoplay();
    }
  }

  // Pause auto-play on mouse enter
  carouselWrapper.on('mouseenter', function() {
    if (isAutoPlaying) {
      stopAutoplay();
    }
  });

  // Resume auto-play on mouse leave
  carouselWrapper.on('mouseleave', function() {
    if (!isAutoPlaying) {
      startAutoplay();
    }
  });

  // Start auto-play
  startAutoplay();

  // Handle window resize
  let resizeTimeout;
  $(window).on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      // Reset to first slide if current index exceeds max
      if (currentIndex > getMaxIndex()) {
        currentIndex = 0;
      }
      
      // Recalculate carousel width on resize
      setCarouselContainerWidth();
      updateCarouselPosition();
    }, 250);
  });

  // Keyboard navigation
  $(document).on('keydown', function(e) {
    if (carouselWrapper.is(':visible')) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        $('#carouselNext').click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        $('#carouselPrev').click();
      }
    }
  });

  // Wait for images to load before finalizing
  const images = $('.carousel-slide img');
  let imagesLoaded = 0;
  
  images.on('load', function() {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
      setCarouselContainerWidth();
      updateCarouselPosition();
    }
  });

  // Fallback timeout
  setTimeout(function() {
    setCarouselContainerWidth();
    updateCarouselPosition();
  }, 300);
});

// ============================================
// RESPONSIVE HAMBURGER MENU - VANILLA JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const navItems = navLinks.querySelectorAll('a');

  // Toggle menu when hamburger is clicked
  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a navigation link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    // Close if click is outside nav and hamburger
    if (!e.target.closest('.navbar')) {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Close menu on window resize to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
