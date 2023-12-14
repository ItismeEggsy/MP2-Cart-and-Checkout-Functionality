export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'lkl4gj54fghb1b2fd1b6df1b3g2h4f6gj1g321fbd1bf3d1',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: 'j35k4ghh16g5d16vfd1v6f216n1h1n5g1f65hb1f651',
        quantity: 1,
        deliveryOptionId: '2'
    }];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

//27:59
export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

//47:44

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}