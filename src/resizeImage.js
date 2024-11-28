
export function fitImages() {
    const images = document.querySelectorAll('img'); // Select all images
  
    images.forEach((img) => {
      img.onload = function() {
        const container = img.parentElement; // Get the parent container of the image
        const containerWidth = container.offsetWidth; // Get the width of the container
        const containerHeight = container.offsetHeight; // Get the height of the container
  
        const aspectRatio = img.naturalWidth / img.naturalHeight;
  
        // Calculate new width and height based on the container size
        let newWidth, newHeight;
  
        if (containerWidth / containerHeight > aspectRatio) {
          newWidth = containerWidth;
          newHeight = containerWidth / aspectRatio;
        } else {
          newHeight = containerHeight;
          newWidth = containerHeight * aspectRatio;
        }
  
        // Apply the new width and height to the image
        img.style.width = newWidth + 'px';
        img.style.height = newHeight + 'px';
        img.style.objectFit = 'contain'; // Ensures the image fits within the container without distortion
      };
    });
  }