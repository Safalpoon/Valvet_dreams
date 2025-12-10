
 // Mobile Navigation Toggle
//  const mobileToggle = document.getElementById('mobile-toggle');
//  const nav = document.getElementById('nav');
 
//  mobileToggle.addEventListener('click', () => {
//    nav.classList.toggle('active');
//  });

// Get elements
const mobileToggle = document.getElementById('mobile-toggle');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav'); // Fixes ID mismatch

// Show nav on toggle click
mobileToggle.addEventListener('click', () => {
  nav.classList.add('active');
});

// Hide nav on close click
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

 // Scroll Animation
 const header = document.getElementById('header');
 const backToTop = document.getElementById('back-to-top');
 const fadeElements = document.querySelectorAll('.fade-in');
 
 function checkScroll() {
   // Header scroll effect
   if (window.scrollY > 50) {
     header.classList.add('scrolled');
   } else {
     header.classList.remove('scrolled');
   }
   
   // Back to top button
   if (window.scrollY > 500) {
     backToTop.classList.add('show');
   } else {
     backToTop.classList.remove('show');
   }
   
   // Fade in elements
   fadeElements.forEach(element => {
     const elementPosition = element.getBoundingClientRect().top;
     const windowHeight = window.innerHeight;
     
     if (elementPosition < windowHeight - 100) {
       element.classList.add('appear');
     }
   });
 }
 
 // Check scroll on page load
 document.addEventListener('DOMContentLoaded', checkScroll);
 
 // Check scroll on scroll
 window.addEventListener('scroll', checkScroll);
 
 // Back to top button click
 backToTop.addEventListener('click', () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });
 
 // Populate story list with sample data
 const storyList = document.getElementById('story-list');
 if (storyList) {
   const stories = [
     {
       title: 'Whispers in the Wind',
       category: 'Short Story',
       date: 'March 12, 2025',
       excerpt: 'The old willow tree had secrets to tell, if only someone would listen...'
     },
     {
       title: 'Midnight Reflections',
       category: 'Poetry',
       date: 'February 28, 2025',
       excerpt: 'A collection of poems written in the quiet hours when the world sleeps and thoughts roam free.'
     },
     {
       title: 'The Forgotten Door',
       category: 'Fantasy',
       date: 'January 15, 2025',
       excerpt: 'When Lily discovers a door in her grandmother\'s attic that wasn\'t there yesterday, she steps into a world beyond imagination.'
     }
   ];
  
   
   stories.forEach(story => {
     const storyCard = document.createElement('div');
     storyCard.className = 'story-card';
     storyCard.innerHTML = `
       <div class="story-content">
         <div class="story-meta">
           <span>${story.category}</span>
           <span>${story.date}</span>
         </div>
         <h3>${story.title}</h3>
         <p class="story-excerpt">${story.excerpt}</p>
         <a href="#" class="read-more">Read More →</a>
       </div>
     `;
     storyList.appendChild(storyCard);
    });
  
  

 // Mobile Navigation Toggle
//  const mobileToggle = document.getElementById('mobile-toggle');
//  const nav = document.getElementById('nav');
 
//  mobileToggle.addEventListener('click', () => {
//    nav.classList.toggle('active');
//  });

// Get elements
const mobileToggle = document.getElementById('mobile-toggle');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav'); // Fixes ID mismatch

// Show nav on toggle click
mobileToggle.addEventListener('click', () => {
  nav.classList.add('active');
});

// Hide nav on close click
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

 // Scroll Animation
 const header = document.getElementById('header');
 const backToTop = document.getElementById('back-to-top');
 const fadeElements = document.querySelectorAll('.fade-in');
 
 function checkScroll() {
   // Header scroll effect
   if (window.scrollY > 50) {
     header.classList.add('scrolled');
   } else {
     header.classList.remove('scrolled');
   }
   
   // Back to top button
   if (window.scrollY > 500) {
     backToTop.classList.add('show');
   } else {
     backToTop.classList.remove('show');
   }
   
   // Fade in elements
   fadeElements.forEach(element => {
     const elementPosition = element.getBoundingClientRect().top;
     const windowHeight = window.innerHeight;
     
     if (elementPosition < windowHeight - 100) {
       element.classList.add('appear');
     }
   });
 }
 
 // Check scroll on page load
 document.addEventListener('DOMContentLoaded', checkScroll);
 
 // Check scroll on scroll
 window.addEventListener('scroll', checkScroll);
 
 // Back to top button click
 backToTop.addEventListener('click', () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });
 
 // Populate story list with sample data
 const storyList = document.getElementById('story-list');
 if (storyList) {
   const stories = [
     {
       title: 'Whispers in the Wind',
       category: 'Short Story',
       date: 'March 12, 2025',
       excerpt: 'The old willow tree had secrets to tell, if only someone would listen...'
     },
     {
       title: 'Midnight Reflections',
       category: 'Poetry',
       date: 'February 28, 2025',
       excerpt: 'A collection of poems written in the quiet hours when the world sleeps and thoughts roam free.'
     },
     {
       title: 'The Forgotten Door',
       category: 'Fantasy',
       date: 'January 15, 2025',
       excerpt: 'When Lily discovers a door in her grandmother\'s attic that wasn\'t there yesterday, she steps into a world beyond imagination.'
     }
   ];
  }
   
   stories.forEach(story => {
     const storyCard = document.createElement('div');
     storyCard.className = 'story-card';
     storyCard.innerHTML = `
       <div class="story-content">
         <div class="story-meta">
           <span>${story.category}</span>
           <span>${story.date}</span>
         </div>
         <h3>${story.title}</h3>
         <p class="story-excerpt">${story.excerpt}</p>
         <a href="#" class="read-more">Read More →</a>
       </div>
     `;
     storyList.appendChild(storyCard);
   });

  }