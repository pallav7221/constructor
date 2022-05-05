
var productData = JSON.parse(localStorage.getItem("Products"))

var count = 0;


document.querySelector("#container").innerHTML = "";
productData.forEach((item, index) => {
    count++;
    var box = document.createElement("div");



    var image = document.createElement("img")
    image.src = item.image;

    var name1 = document.createElement("p")
    name1.innerHTML = item.name;

    var category = document.createElement("p")
    category.innerHTML = item.category;

    var price = document.createElement("p")
    price.innerHTML = item.price;

    var gender = document.createElement("p")
    gender.innerHTML = item.gender;
    // console.log(productData[i].price)

    var remove = document.createElement("button");
    remove.innerText = "remove item"
    remove.addEventListener('click', function () {
        productData.splice(index, 1);
        localStorage.setItem('Products', JSON.stringify(productData));
        location.reload();

    })

    var sold = document.createElement("button");
    sold.setAttribute("id", "sold");
    sold.innerHTML = "Sold";
    if (item.sold) {
        sold.style.backgroundColor = "red";
    }
    else {
        sold.style.backgroundColor = "green";
    }

    sold.addEventListener("click", function () {
        var productitem;
        if (item.sold) {
            productitem = JSON.parse(localStorage.getItem('Products'));
            productitem[index].sold = false;
        }
        else {
            productitem = JSON.parse(localStorage.getItem('Products'));
            productitem[index].sold = true;
        }
        localStorage.setItem("Products", JSON.stringify(productitem));
        location.reload();


    })
    box.append(image, name1, category, price, gender, remove, sold);
    document.querySelector("#container").append(box);
});



document.querySelector("#counter").innerHTML = "Total Item : " + count;
