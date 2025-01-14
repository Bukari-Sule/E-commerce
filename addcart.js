const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".addcart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".product-box");
        addToCartButtons(productBox);
    });
});

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    <img src="${productImgsrc}" class="cart-img" alt="">
                    <div class="cart-detail">
                        <h2 class="cart-product-title">${productTitle}</h2>
                        <span class="cart-price">${productPrice}</span>
                        <div class="cart-quantity">
                            <button id="decrement">-</button>
                            <span class="number">1</span>
                            <button id="increment">+</button>
                        </div>
                    </div>
                    <i class='bx bxs-basket cart-remove'></i> 
    `;

    cartContent.appendChild(cartBox);
};

