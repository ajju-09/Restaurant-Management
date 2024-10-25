const signIn = document.querySelector(".nav-signin");
const placeOrder = document.querySelectorAll(".btn1");


signIn.addEventListener('click', () => {
    window.location = "http://127.0.0.1:3000/Signin.html";
});

placeOrder.forEach((order) => {
    order.addEventListener('click', () => {
        window.location = "http://127.0.0.1:3000/order_food.html";
    });
});

