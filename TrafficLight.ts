type Light = "red" | "yellow" | "green"

function getTrafficAction(light: Light): string {
    if (light === "red") {
        return "Stop"
    } else if (light === "yellow") {
        return "Slow Down"
    }
    return "Go"
}
const trafficLight: Light = "green";
const action = getTrafficAction(trafficLight);
console.log(`Traffic light is ${trafficLight}. Action: ${action}`);
