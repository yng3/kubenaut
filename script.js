const enterButton = document.getElementById('enter');
const interfaceBox = document.getElementById('interface');
const cyberspace = document.getElementById('cyberspace');
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

// Hide Landing & Show Cyberspace
enterButton.addEventListener('click', () => {
    interfaceBox.classList.add("hidden");
    setTimeout(() => {
        interfaceBox.style.display = "none";
        cyberspace.style.opacity = "1";
    }, 1000);
});

// Navigation Handling
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(button.getAttribute('data-section')).classList.remove('hidden');
    });
});

// Content Upload
const upload = document.getElementById('upload');
const gallery = document.getElementById('gallery');

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        gallery.appendChild(img);
    }
});

// Shop Feature
const store = document.getElementById('store');
const addProduct = document.getElementById('add-product');

addProduct.addEventListener('click', () => {
    const productName = prompt("Enter product name:");
    const productImage = prompt("Enter image URL:");
    const productPrice = prompt("Enter price:");

    if (productName && productImage && productPrice) {
        const product = document.createElement('div');
        product.classList.add('product');
        product.innerHTML = `<img src="${productImage}" alt="${productName}">
                             <h3>${productName}</h3>
                             <p>$${productPrice}</p>
                             <button class="buy-btn">Buy Now</button>`;
        store.appendChild(product);
    }
});

// Bio Input
const bioInput = document.getElementById('bio-input');
const saveBio = document.getElementById('save-bio');

saveBio.addEventListener('click', () => {
    localStorage.setItem('userBio', bioInput.value);
    alert("Bio saved!");
});

// Load Saved Bio
window.addEventListener('load', () => {
    const savedBio = localStorage.getItem('userBio');
    if (savedBio) bioInput.value = savedBio;
});
