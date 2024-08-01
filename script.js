document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.learning .alecture');
    const pdfLinks = document.querySelectorAll('.notes .alecture');

    videoLinks.forEach(link => {
        link.addEventListener('click', playVideo);
    });

    pdfLinks.forEach(link => {
        link.addEventListener('click', openPDF);
    });

    function playVideo(event) {
        event.preventDefault(); 

       
        const videoId = event.currentTarget.getAttribute('data-video-id');
        
       
        const videoFrame = document.getElementById('video-frame');
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        
        const videoContainer = document.getElementById('video-container');
        videoContainer.style.display = 'block';

        
        videoContainer.scrollIntoView({ behavior: 'smooth' });
    }

    function openPDF(event) {
        event.preventDefault();

        const pdfUrl = event.currentTarget.href;
        window.open(pdfUrl, '_blank');
    }
});
