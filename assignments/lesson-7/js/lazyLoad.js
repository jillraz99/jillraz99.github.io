//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//parameters for Intersectional Observer
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        if (item.isIntesecting) {
            loadedImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    }



    //loop through each img and check status and load if necessary
imagesToLoad.forEach((img) => {
    loadImages(img);
});



