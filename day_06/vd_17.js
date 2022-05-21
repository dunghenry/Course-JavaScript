function createApp() {
    const cars = []
    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()
app.add("BMW");
app.add("Honda");
app.show();