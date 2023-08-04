const content = document.getElementById("content");

function clearContent() {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

function createNavBar() {
    const header = document.getElementById("header");
    const navbar = document.createElement("nav");
    navbar.setAttribute("class", "navbar");

    const home = document.createElement("h2");
    home.setAttribute("id", "home");
    home.textContent = "Home";

    const menu = document.createElement("h2");
    menu.setAttribute("id", "menu");
    menu.textContent = "Menu";

    const contact = document.createElement("h2");
    contact.setAttribute("id", "contact");
    contact.textContent = "Contact";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    header.appendChild(navbar);
}

function loadhomepage() {
    clearContent();
    
    const header_text = document.createElement("h1");
    header_text.textContent = "Yari's Restaurant";

    const img = document.createElement("img");
    img.setAttribute("src", "../src/restaurant.jpg");

    const description = document.createElement("p");
    description.textContent = "A restaurant filled with all of Yari's favorite foods, which we know will become your favorites too!";

    content.appendChild(header_text);
    content.appendChild(img);
    content.appendChild(description);
}

export { loadhomepage };
export { createNavBar };
export { clearContent };