async function loadData() {
    try {
        fetch("assets/data/tours.json")
            .then(response => response.json())
            .then(tours => {
                const tour = tours.find(item => item.id == getParameterID())
                renderDetails(tour)
            })
    } catch (error) {
        console.log("Can't fetch data. Error: " + error)
    }
}

function getParameterID() {
    const url = window.location.search
    const params = new URLSearchParams(url)
    const id = params.get("id")
    return id
}

function renderDetails(data) {
    const tourDetails = document.getElementById('tour-details')
    tourDetails.innerHTML = `
        <h1 class="display-4" id="tour-title"><strong>${data.name}</strong></h1>
        <h2 class="price" id="tour-price">
            ${data.price}
            <span class="old-price">$5000</span>
        </h2>

        <p id="tour-descriptions">${data.description}</p>

        <button class="btn-CTA mt-3">Đặt chỗ ngay</button>
    `
}

loadData()