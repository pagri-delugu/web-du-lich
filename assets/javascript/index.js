let allTours = []

async function loadData() {
    try {
        const response = await fetch('assets/data/tours.json')
        allTours = await response.json()
        renderTours(allTours)

    } catch (error) {
        console.log("Can't fetch data. Error: " + error)
    }
}

function renderTours(data) {
    const featuredTours = document.getElementById('featured-tours')
    featuredTours.innerHTML = ""

    data.forEach(tour => {
        const card = `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card card-product h-60">
                    <img src="${tour.card_image}" alt="${tour.card_image_alt}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="header-5">${tour.card_name}</h5>
                        <p class="price">${tour.price}</p>
                        <p class="truncate">${tour.card_description}</p>
                        <button class="btn-CTA" type="button" onclick="location.href='product_detail.html?id=${tour.id}'">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        `
        featuredTours.innerHTML += card
    });
}

loadData()