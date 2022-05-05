var productData = JSON.parse(localStorage.getItem('Products')) || [];
function ProductDetails(name, category, image, price, gender, sold = false) {
    this.name = name,
        this.category = category,
        this.image = image,
        this.price = price,
        this.gender = gender,
        this.sold = sold
}
// console.log(productData
document.querySelector("#add").addEventListener('click', function () {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var category = document.querySelector("#category").value;
    var image = document.querySelector("#image").value;
    var price = document.querySelector("#price").value;
    var gender = document.querySelector("#gender").value;
    var sold = document.querySelector("#sold").checked;

    var data = new ProductDetails(name, category, image, price, gender, sold);
    productData.push(data);
    local(productData);

})
function local(productData) {
    localStorage.setItem("Products", JSON.stringify(productData));
}