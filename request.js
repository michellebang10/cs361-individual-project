/* From Audrey's microservice! */

function getRandomImage() {
  console.log("request sent!")
  fetch('http://localhost:2000/getRandomImage')
    .then(response => response.json())
    .then(data => {
      const randomImagePath = data.imagePath;
      document.getElementById('random-image').src = randomImagePath;
    })
    .catch(error => {
      console.error(error);
    });
}

var imageButton = document.getElementById("image-button")
imageButton.addEventListener("click", getRandomImage)