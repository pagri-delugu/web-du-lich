let allTours = []
let activeFilters = []
const filterButtons = document.querySelectorAll('.form-check')

async function loadData() {
    try {
        const response = await fetch("assets/data/tours.json")
        allTours = await response.json()
        renderTours(allTours)
    } catch (error) {
        console.log("Can't fetch data. Error: " + error)
    }
}

function renderTours(data) {
    const tourList = document.getElementById('product-grid')
    tourList.innerHTML = ""

    data.forEach(tour => {
        const card = `
            <div class="card card-product h-60">
                <img src="${tour.card_image}" alt="${tour.card_image_alt}" class="card-img-top">
                <div class="card-body">
                    <h5 class="header-5">${tour.card_name}</h5>
                    <p class="price">${tour.price}</p>
                    <p class="truncate">${tour.card_description}</p>
                    <button class="btn-CTA" type="button" onclick="location.href='product_detail.html?id=${tour.id}'">Xem chi tiết</button>
                </div>
            </div>
        `
        tourList.innerHTML += card
    })
}

function toggleActiveToCategories(buttons) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('filter-category')
            btn.classList.toggle('active')
            if (btn.classList.contains('active')) {
                activeFilters.push(category)
            } else {
                activeFilters = activeFilters.filter(f => f !== category)
            }
            console.log(activeFilters)
            // filterTours(activeFilters)
        })
    })
}

function filterTours(category) {
    allTours.forEach(tour => {
        const tourCategories = tour.accomodation_ratings
        const matches = category.every(filter => tourCategories.includes(filter))
        if (matches || category.length === 0) {
            
        }
    })
}


loadData()
toggleActiveToCategories(filterButtons)

//filter bar price range
const rangeInput = document.getElementById('priceRange');
const rangeOutput = document.getElementById('rangeValue');

rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
});