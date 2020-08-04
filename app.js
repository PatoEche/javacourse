class Producto {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class=card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name </strong>: ${product.name}
                    <strong> Product Price </strong>: ${product.price}
                    <strong> Product Year </strong>: ${product.year}
                    <a href="#" class="btn btn-outline-danger" name="delete">  Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }

    deleteProduct(element) {
        if(element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Product Deleted Successfully", "danger")
        }

    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // mostrando en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function () {document.querySelector(".alert").remove()}, 3000);
    }
}

// DOM Events
document.getElementById("product-form")
    .addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const product = new Producto(name, price, year);

    const ui = new UI();

    if(name === "" || price === "" || year === "") {
        return ui.showMessage("Complete whit real data, please Fields", "warning");
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Product added Satisfactory", "success");
    
    e.preventDefault();

})

document.getElementById("product-list")
    .addEventListener("click", function(event) {
    
    const ui = new UI();
    ui.deleteProduct(event.target);
    

        // console.log(event.target);
    // const name = document.getElementById("name").value;
    // const price = document.getElementById("price").value;
    // const year = document.getElementById("year").value;

    // const product = new Producto(name, price, year);

    // const ui = new UI();
    // ui.addProduct(product);
    // ui.resetForm();
    
    
    // e.preventDefault();

})