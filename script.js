function scrollToSection (sectionId) {
 const section = document.getElementById(sectionId);
 if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
 }
} 
window.onbeforeunload = function() {window.scrollTo(0, 0); };