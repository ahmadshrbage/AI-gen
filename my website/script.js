
document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const span = document.getElementsByClassName("close")[0];
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; 
            document.body.style.overflow = "hidden"; 
        }
    });

    
    if (span) {
        span.onclick = function() {
            closeModal();
        }
    }

   
   
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
});