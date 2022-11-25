// Lecture: Asynchronous JavaScript, AJAX and APIs

// api url
const api_url = "https://dummyjson.com/products/";

// const data = { username: "example" };
async function getApiData(url) {
  const response = await fetch(url);

  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  try {
    let json = await response.json();
    console.log(json.products);

    let finalResponse;
    for (let products of json.products) {
      finalResponse += `
      <div class="col-3 mt-4">
          <div class="card shadow">
            <img src="${products.images[0]}" class="card-img-top p-4" alt="${products.title}">
            <div class="card-body">
              <a href="#" class="btn btn-outline-danger text-capitalize text-decoration-none">${products.category}</a>
              <h5 class="card-title mt-2">${products.title}</h5>
              <p class="card-text">${products.description}</p>
              <a href="#" class="btn btn-primary mb-4">Add to Cart</a>
              <p>$${products.price} <span class="text-warning text-decoration-line-through">${products.discountPercentage}$</span></p>
            </div>
          </div>
        </div>
      `;
    }
    if (finalResponse == undefined) {
      document.querySelector(".row").innerHTML = `<h1>No Data</h1>`;
    } else {
      document.querySelector(".row").innerHTML = finalResponse;
    }
  } catch (error) {
    alert(error);
    alert("HTTP-Error: " + response.status);
  }

  // console.log(response);
}

getApiData(api_url);

// try {
//   let x = 2;
//   const y = 8;
//   y = 23;
// } catch (err) {
//   alert(err.message);
// }
