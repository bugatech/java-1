const user = {
    name: "Sarah Williams",
    age: 27,
    bio: "Front-end developer and cat lover. Enjoys hiking and coffee.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/055/158/904/small/smiling-black-woman-with-natural-curls-outdoors-in-sunlight-international-day-of-happiness-copy-space-photo.jpeg"
};


//Use JavaScript to update HTML with object values
document.getElementById("user-name").textContent = user.name;
document.getElementById("user-age").textContent = "Age: " + user.age;
document.getElementById("user-bio").textContent = user.bio;
document.getElementById("user-image").src= user.imagee;


