/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const NewCar = () => {
  const cari = document.createElement("div");
  const left = document.createElement("div");
  const image1 = document.createElement("img");
  const image2 = document.createElement("img");
  const image3 = document.createElement("img");
  const image4 = document.createElement("img");
  const right = document.createElement("div");

  cari.appendChild(left);
  cari.appendChild(image1);
  cari.appendChild(image2);
  cari.appendChild(image3);
  cari.appendChild(image4);
  cari.appendChild(right);

  cari.classList.add("carousel");
  left.textContent = "<";
  right.textContent = ">";
  left.classList.add("left-button");
  right.classList.add("right-button");
  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";
  image1.classList.add("fade");
  image2.classList.add("fade");
  image3.classList.add("fade");
  image4.classList.add("fade");
  // functionality
  let index = 1;
  const images = [image1, image2, image3, image4];

  const change = () => {
    images[index].style.display = "block";
    left.addEventListener("click", () => {
      if (index > 0) {
        newIndex = --index;
        images[newIndex].style.display = "block";
        images[newIndex + 1].style.display = "none";
      } else {
        // newIndex = 3;
        images[0].style.display = "none";
        images[newIndex].style.display = "block";
      }
    });
    right.addEventListener("click", () => {
      if (index < images.length - 1) {
        newIndex = ++index;
        images[newIndex].style.display = "block";
        images[newIndex - 1].style.display = "none";
      } else {
        // newIndex = 0;
        images[images.length - 1].style.display = "none";
        images[newIndex].style.display = "block";
      }
    });
  };
  change();
  return cari;
};

const target = document.querySelector(".carousel-container");
target.appendChild(NewCar());
