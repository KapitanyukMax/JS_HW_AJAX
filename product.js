const productContainer = document.getElementById("productContainer");
const imgContainer = document.getElementById("imgContainer");

let product;
(async () => {
    product = (await getDataFromServer(apiUrl, new URLSearchParams(window.location.search).get("id")))[0];
    productContainer.insertAdjacentHTML("afterbegin",
    `<div>
        <h1>${product.title}</h1>
        <h5 class="font-weight-bold my-1">${product.price}$</h5>
        <p class="my-1"><small>${product.description}</small></p>
        <p class="my-1"><small class="text-muted"><em>Rating: ${product.rating}</em></small></p>
        <p class="my-1"><small class="text-muted"><em>Brand: ${product.brand}</em></small></p>
        <p class="my-1"><span class="badge bg-primary rounded-pill">${product.category}</span></p>
    </div>
    <img class="rounded" src=${product.thumbnail} alt="Product Thumbnail">`);

    for (let img of product.images) {
        imgContainer.innerHTML += `<img class="rounded m-1" style="width: 24rem;" src=${img} alt="Product Image">`;
    }
})();