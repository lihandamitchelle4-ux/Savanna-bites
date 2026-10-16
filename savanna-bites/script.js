console.log("Welcome to Savanna Bites!");
let order = [];
function orderMeal(mealName, mealPrice){
    order.push({
        name: mealName,
        price: mealPrice
    });
    displayOrder();
    }
    function displayOrder(){
        const orderItems = document.getElementById("order-items");
        const totalAmount = document.getElementById("total-amount");
        orderItems.innerHTML = "";
        let total = 0;
        if (order.length === 0){
            orderItems.innerHTML = "<p>Your order is empty.</p>";

        }
        order.forEach(function(meal){
            const mealItem = document.createElement("p");
            mealItem.textContent = meal.name + " - KSH " + meal.price;
            orderItems.appendChild(mealItem);
            total += meal.price;
        });
        totalAmount.textContent = total;
    }
    document.getElementById("clear-order").addEventListener("click", function(){
        order = [];
        displayOrder();
    });