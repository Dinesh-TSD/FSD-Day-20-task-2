// // fetch(API)
// // .then((response)=>response.json().then((data)=>console.log(data.data[0].color)))

const apiUrl = "https://www.balldontlie.io/api/v1/players";

// Create a function to fetch data from the API using a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    reject("Failed to fetch data");
                    return;
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Call the fetchData function and handle the response
fetchData()
    .then((data) => {
        let container = document.getElementById("container");
        let row = document.getElementById("rows");

        for (let i = 0; i < data.data.length; i++) {
            let div = document.createElement("div")
            div.setAttribute("class","col-md-3")
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">First Name: ${data.data[i].first_name}</h5>
                    <h5 class="card-title">Last Name: ${data.data[i].last_name}</h5>
                    <h5 class="card-title">Position: ${data.data[i].position}</h5>
                    <h5 class="card-title">City: ${data.data[i].team.city}</h5>

                </div>
            </div>
   `;
            row.append(div)
            container.append(row)
            console.log(data.data[i]);
        }
        // console.log(data);
        // You can access the data from the API here and perform further operations
    })
    .catch((error) => {
        console.error("Error:", error);
    });


