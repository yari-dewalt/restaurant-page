function pageload() {
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = "Yari's Restaurant";

    const img = document.createElement("img");
    img.setAttribute("src", "../src/restaurant.jpg");

    const description = document.createElement("p");
    description.textContent = "A restaurant filled with all of Yari's favorite foods, which we know will become your favorites too!";

    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(description);
}

export { pageload };