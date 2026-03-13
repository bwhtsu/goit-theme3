const imageObserver = new IntersectionObserver((items, observer) => {
    items.forEach((img) => {
        if (img.isIntersecting) {
            const path = img.target.dataset.src;
            img.target.src = path;
            observer.unobserve(img);
            console.log(img.target.src);
        }

    });

}, {
    rootMargin: "70px",
});


const imagesRefArray = document.querySelectorAll("img");
imagesRefArray.forEach(image => imageObserver.observe(image));


