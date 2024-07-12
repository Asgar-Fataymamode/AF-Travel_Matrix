// document.addEventListener("DOMContentLoaded", function() {
//     const introSection = document.getElementById('intro');
  
//     function checkVisibility() {
//       const rect = introSection.getBoundingClientRect();
//       const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//       const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
//       const isVisible = (
//         (rect.left >= 0) &&
//         (rect.top >= 0) &&
//         (rect.left <= windowWidth) &&
//         (rect.top <= windowHeight)
//       );
  
//       if (isVisible) {
//         introSection.classList.add('visible');
//         window.removeEventListener('scroll', checkVisibility);
//       }
//     }
  
//     window.addEventListener('scroll', checkVisibility);
//     checkVisibility(); // Initial check in case the section is already visible on load
//   });
  