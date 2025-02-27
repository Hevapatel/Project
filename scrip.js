document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.getElementById("getStartedBtn");
    const uploadSection = document.getElementById("uploadSection");
    const videoUploadForm = document.getElementById("videoUploadForm");
    const videoUrlInput = document.getElementById("videoUrl");
    const videoPreview = document.getElementById("videoPreview");

    // Show upload form when "Get Started" button is clicked
    getStartedBtn.addEventListener("click", function() {
        uploadSection.classList.remove("hidden");
    });

    // Handle video URL submission
    videoUploadForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const videoUrl = videoUrlInput.value;

        // Extract YouTube Video ID
        const videoId = extractYouTubeVideoID(videoUrl);
        if (videoId) {
            videoPreview.innerHTML = `
                <h3>Preview Your Video:</h3>
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;
        } else {
            alert("Invalid YouTube URL. Please enter a valid link.");
        }
    });

    // Function to extract YouTube Video ID
    function extractYouTubeVideoID(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.v=|.\/|.*embed\/|.*v\/|.*shorts\/|.*watch\?.*v=))([^?&]+)/);
        return match ? match[1] : null;
    }
});