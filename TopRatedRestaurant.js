function topRatedRestaurant(restaurants) {

    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let highRate = restaurants[0];

    for (let restaurant of restaurants) {
        if (restaurant.rating > highRate.rating) {
            highRate = restaurant;
        }
    }
    return highRate.name.toUpperCase();
}

console.log(topRatedRestaurant([{ name: "Pasta Palace", rating: 4.5 }, { name: "Burger Barn", rating: 4.7 }, { name: "Sushi Spot", rating: 4.9 }]));
console.log(topRatedRestaurant([{ name: "Pizza Place", rating: 4.2 }, { name: "Taco Town", rating: 4.1 }, { name: "Salad Shack", rating: 4.3 }]));
console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("hello"));