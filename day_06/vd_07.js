const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const app = (function () {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');
    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const htmls = cars.map((car, index) => `<li>${car} <span class="delete" data-index="${index}">&times</span></li>`).join('')
            root.innerHTML = htmls
            // console.log(input, submit)
        },
        handleDelete(e) {
            console.log(this) //root
            const deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const index = deleteBtn.dataset['index']
                this.delete(index);
                this.render();
            }
        },
        init() {
            const app = this
            // submit.onclick = function () {
            // console.log(this) //button
            //     const car = input.value;
            //     app.add(car);
            //     input.value = ''
            //     app.render();
            // }

            submit.onclick = () => {
                console.log(this) //{add: ƒ, delete: ƒ, render: ƒ, init: ƒ}, nhảy ra lấy this của .init()
                const car = input.value;
                if (!car) {
                    alert("Enter name car...")
                }
                else {
                    this.add(car);
                    input.value = ''
                    input.focus();
                    this.render();
                }
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }

})()

app.init()