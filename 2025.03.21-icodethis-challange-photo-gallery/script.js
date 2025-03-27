const pictures = [
    "https://placehold.co/150",
    "https://placehold.co/150",
    "https://placehold.co/150",
    "https://placehold.co/150",
];

const picturesContainer = document.getElementById("pictures-container");

pictures.forEach(function(pictureUrl){
    const frame =document.createElement('a');
    frame.classList.add('pic-square');
    frame.href = pictureUrl;

    const image =document.createElement('img');
    image.src=pictureUrl;
    image.alt="Picture";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit="cover";

    frame.appendChild(image);
    picturesContainer.appendChild(frame);

})

