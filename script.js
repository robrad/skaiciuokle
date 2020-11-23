const UI = {
    withoutPvmResult: document.querySelector("#withoutPvmResult"),
    pvmResult: document.querySelector("#pvmResult"),
    withPvmResult: document.querySelector("#withPvmResult"),
    button: document.querySelector("#button"),
    pvmValue: document.querySelector("#pvm"),
}

class Price {
    constructor(price, pvmValue) {
        this.price = price;
        this.pvmValue = pvmValue;
    };

    priceWithPvm() {
        return this.price * this.pvmValue
    };

    pvmResult() {
        return this.priceWithPvm() - this.price
    };

    priceWithoutPvm() {
        return this.price / this.pvmValue
    }
}

UI.button.addEventListener("click", () => {
    let value, type;
    if (UI.withPvmResult.value === "") {
        value = UI.withoutPvmResult.value;
        type = 0
    }else{
        value = UI.withPvmResult.value;
        type = 1
    }
    const price = new Price(value, UI.pvmValue.value);
    console.log(price)
    renderUI(price, type)
})

function renderUI(price, type) {
    if (!type) {
        UI.withPvmResult.value = price.priceWithPvm().toFixed(2)
    }else{
        UI.withoutPvmResult.value = price.priceWithoutPvm().toFixed(2)
    }

    UI.pvmResult.value = price.pvmResult().toFixed(2);
}





