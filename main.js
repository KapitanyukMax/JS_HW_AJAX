const products = document.getElementById("products");

function displayData() {
    return new Promise((resolve, reject) => {
        products.innerHTML = "";
        
        for (const product of productsArr) {
            products.innerHTML +=
        `<div class="card rounded overflow-hidden m-3" style="width: 18rem; max-height: 30rem;">
            <img class="card-img-top object-fit-cover" style="height: 30%;" src=${product.thumbnail} alt="Product Thumbnail">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${product.title}</h5>
                <h5 class="card-text font-weight-bold my-1">${product.price}$</h5>
                <p class="card-text my-1"><small>${product.description}</small></p>
                <p class="card-text my-1"><a href="./product.html?id=${product.id}"><span class="badge bg-info rounded-pill">more...</span></a></p>
                <p class="card-text my-1"><small class="text-muted"><em>Rating: ${product.rating}</em></small></p>
                <p class="card-text my-1"><small class="text-muted"><em>Brand: ${product.brand}</em></small></p>
                <p class="card-text my-1"><span class="badge bg-primary rounded-pill">${product.category}</span></p>
            </div>
        </div>`;
        }

        resolve();
    });
}

function sortProducts() {
    return new Promise(async (resolve, reject) => {
        productsArr.sort((prod1, prod2) => prod1.price - prod2.price);

        await displayData();
        resolve();
    });
}

(async () => {
    productsArr = await getDataFromServer(apiUrl);
    await displayData();
})();