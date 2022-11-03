const access_key = "tX0G8CnGs4ISA29X_8DgPxnEXfLZW8J5Fiujwuttno4";
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=50`;

const gallery = document.querySelector(".gallery");
let allImages;
// const getImages = () => {
fetch(random_photo_url)
  .then((res) => res.json())
  .then((data) => {
    allImages = data;
    makeImages(allImages);
    console.log(typeof data);
  });
// };

const makeImages = (data) => {
  data.forEach((item) => {
    console.log(item);
    let img = document.createElement("img");
    img.src = item.urls.small;
    img.className = "gallery-img";
    gallery.appendChild(img);
  });
};
