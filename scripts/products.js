import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/productsdetails.js";
import { formatCurrency } from "./utils/money.js";

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-grid js-product-grid">
        <div class="container">
            <!--magwheels-->
            <br>
            <!--Stealth Grip-->
            <div class="container ">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="mags1">
                            <div class="card-body">
                                <h3 style="text-align: center;">${product.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg">
                        <h1>${product.subname}</h1>
                        <div class="h4 product-price">
                            PHP&nbsp;${formatCurrency(product.priceCents)}
                        </div><br>
                        <p><i>${product.desc}</i></p>
                        <div class="specs">
                            <h5><b>SIZE: </b>${product.size}</h5>
                            <br>
                            <h5><b>HOLES: </b>${product.holes}</h5>
                            <br>
                            <h5><b>PCD: </b>${product.pcd}</h5>
                            <br>
                            <h5><b>OFFSET: </b>${product.offset}</h5>
                            <br>
                            <h5><i>Note: Items are sold per set (4pcs)</i></h5>
                            <br>
                            <p>Quantity:</p>
                            <input type="number" min="0" placeholder="Input Quantity" required>
                            <br>
                            <br>
                            <button type="button" class="btn btn-danger js-add-to-cart" 
                            data-product-id="${product.id}">
                            Add to Cart</button>
                        </div><br>
                        <div>
                            <p style="white-space:pre-wrap;">${product.tags}</p>
                            <br>
                            <h5>Key Features:<br><br></h5>
                            <p>Silent Precision:${product.keyfeature1}</p>
                            <p><b>Exceptional Traction:</b> ${product.keyfeature1}</p>
                            <h6>${product.bottomdesc}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.js-product-grid')
    .innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });




