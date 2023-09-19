const apiUrl = 'https://dummyjson.com/products';
let productsArr;

function getDataFromServer(url, productIndex) {
    return new Promise(async (resolve, reject) => {
        if (productIndex) url += `?skip=${productIndex - 1}&limit=1`;

        let response = await fetch(url);
        resolve((await response.json()).products);
    });
}