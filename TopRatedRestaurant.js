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