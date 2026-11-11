

const destinations = [

    // SIQUIJOR

    {
        name: "St. Francis of Assisi Church",
        town: "Siquijor",
        category: "Historical",
        address: "Poblacion, Siquijor",
        description: "A historic Spanish-era church located near the Siquijor Port. It is one of the island's well-known religious landmarks.",
        image: "st.jpg"
    },
    {
        name: "Guiwanon Spring Park",
        town: "Siquijor",
        category: "Nature",
        address: "Cang-isad, Siquijor",
        description: "A peaceful nature attraction surrounded by mangroves, wooden walkways, and coastal scenery.",
        image: "guiw.jfif"
    },
    {
        name: "Cantabon Cave",
        town: "Siquijor",
        category: "Cave",
        address: "Barangay Cantabon, Siquijor",
        description: "A natural limestone cave known for its rock formations and underground features.",
        image: "cant.jpeg"
    },
    {
        name: "Mount Bandilaan",
        town: "Siquijor",
        category: "Mountain",
        address: "Central Siquijor",
        description: "A mountainous destination surrounded by forest and known for its elevated views of the island.",
        image: "band.jfif"
    },
    {
        name: "Caticugan Marine Sanctuary",
        town: "Siquijor",
        category: "Marine",
        address: "Caticugan, Siquijor",
        description: "A protected coastal and marine area that supports local marine biodiversity.",
        image: "cati.jfif"
    },
    {
        name: "Kanheron Ranch",
        town: "Siquijor",
        category: "Cultural Attracion",
        address: "Barangay Olo, Siquijor",
        description: "Kanheron Ranch is a countryside attraction with wooden structures and artistic displays.",
        image: "kan.jpg"
    },

    // SAN JUAN

    {
        name: "Paliton Beach",
        town: "San Juan",
        category: "Beach",
        address: "Paliton, San Juan",
        description: "A beautiful white-sand beach famous for its clear water, palm trees, and relaxing sunset views.",
        image: "pal.webp"
    },
    {
        name: "Lugnason Falls",
        town: "San Juan",
        category: "Waterfall",
        address: "Napo, San Juan",
        description: "A natural waterfall surrounded by tropical greenery. It is a popular destination for visitors who enjoy nature.",
        image: "lug.jpg"
    },
    {
        name: "Capilay Spring Park",
        town: "San Juan",
        category: "Nature",
        address: "Poblacion, San Juan",
        description: "A community park featuring a natural spring pool, trees, and a relaxing environment.",
        image: "cap.jfif"
    },
    {
        name: "Tubod Marine Sanctuary",
        town: "San Juan",
        category: "Marine",
        address: "Tubod, San Juan",
        description: "A protected marine area known for its coral reefs and diverse underwater life.",
        image: "tubod.jpg"
    },
    {
        name: "Maite Marine Sanctuary",
        town: "San Juan",
        category: "Marine",
        address: "Maite, San Juan",
        description: "A coastal marine sanctuary that protects coral reefs and marine species.",
        image: "maite.jfif"
    },
    {
        name: "Pitogo Cliff",
        town: "San Juan",
        category: "Nature",
        address: "San Juan",
        description: "An old and enormous balete tree surrounded by local stories and traditions. A small spring and fish pool can also be found nearby.",
        image: "pitogo.jfif"
    },
    {
        name: "Solangon Beach",
        town: "San Juan",
        category: "Beach",
        address: "San Juan",
        description: "An old and enormous balete tree surrounded by local stories and traditions. A small spring and fish pool can also be found nearby.",
        image: "solangon.jpg"
    },

    // LAZI

    {
        name: "Cambugahay Falls",
        town: "Lazi",
        category: "Waterfall",
        address: "Campalanas, Lazi",
        description: "One of Siquijor's most famous attractions, featuring beautiful turquoise water, multiple waterfalls, and lush tropical surroundings.",
        image: "camb.jfif"
    },
    {
        name: "Old Enchanted Balete Tree",
        town: "Lazi",
        category: "Nature",
        address: "Campalanas, Lazi",
        description: "An old and enormous balete tree surrounded by local stories and traditions. A small spring and fish pool can also be found nearby.",
        image: "balete.jfif"
    },
    {
        name: "San Isidro Labrador Church",
        town: "Lazi",
        category: "Historical",
        address: "Poblacion, Lazi",
        description: "A historic coral-stone church recognized for its Spanish colonial architecture and cultural importance.",
        image: "sani.jpg"
    },
    {
        name: "Lazi Convent",
        town: "Lazi",
        category: "Historical",
        address: "Poblacion, Lazi",
        description: "A historic convent located beside San Isidro Labrador Church. It is an important part of the island's cultural heritage.",
        image: "conv.jfif"
    },
    {
        name: "Laga-an Falls",
        town: "Lazi",
        category: "Waterfall",
        address: "Nagerong, Lazi",
        description: "A natural waterfall surrounded by greenery and a peaceful forest environment.",
        image: "lagaan.jfif"
    },
    {
        name: "Sambulawan Underground River and Cave",
        town: "Lazi",
        category: "Cave",
        address: "Nagerong, Lazi",
        description: "A natural cave and water attraction featuring rock formations and a river environment.",
        image: "samb.webp"
    },
    {
        name: "Kawasan Falls and Cave",
        town: "Lazi",
        category: "Waterfall",
        address: "Purok Lumboy, Lazi",
        description: "Kawasan Falls is a beautiful waterfalls surroundedby green trees and large rocks. It features a natural pool and a small cave near the flowing water.",
        image: "kaw.jfif"
    },
    {
        name: "Locong Falls",
        town: "Lazi",
        category: "Waterfall",
        address: "Kinamandagan, Lazi",
        description: "Locong Falls is a peaceful waterfall surrounded by thick green plants and trees.",
        image: "loc.jfif"
    },
    {
        name: "Hapitanan",
        town: "Lazi",
        category: "Tourist Attraction",
        address: "Tignao, Lazi",
        description: "Hapitanan is a fun tourist spot with garden, colorful decorations, and beautiful views of the surrounding countryside. It is famous for its flying broomstick photo spot, where visitors can take creative pictures.",
        image: "hapi.jpg"
    },


    // MARIA

    {
        name: "Salagdoong Beach",
        town: "Maria",
        category: "Beach",
        address: "Olang, Maria",
        description: "A popular beach destination featuring clear blue water, rock formations, and beautiful coastal scenery.",
        image: "sal.webp"
    },
    {
        name: "Kagusuan Beach",
        town: "Maria",
        category: "Beach",
        address: "Cangmunag area, Maria",
        description: "A scenic coastal destination with white sand, rock formations, and clear waters.",
        image: "kagu.jpg"
    },
    {
        name: "Cang-isok House",
        town: "Maria",
        category: "Historical",
        address: "Cang-isok, Maria",
        description: "A traditional wooden heritage house known for its old architectural style and historical character.",
        image: "kang.jfif"
    },
    {
        name: "Olang Marine Sanctuary",
        town: "Maria",
        category: "Marine",
        address: "Olang, Maria",
        description: "A community-managed marine conservation area that helps protect coastal habitats and marine life.",
        image: "olang.jfif"
    },

    // LARENA

    {
        name: "Sandugan Beach",
        town: "Larena",
        category: "Beach",
        address: "Sandugan, Larena",
        description: "A peaceful coastal destination with scenic sea views and a relaxing atmosphere.",
        image: "sandu.jfif"
    },
    {
        name: "Bintangan Peak",
        town: "Larena",
        category: "Mountain",
        address: "Barangay Bintangan, Larena",
        description: "A highland destination with beautiful views of the surrounding hills and coastline. It is a nice place for visitors who enjoy nature and scenic views.",
        image: "binta.jfif"
    },
    {
        name: "Cangbangag Falls",
        town: "Larena",
        category: "Waterfall",
        address: "Larena, Siquijor",
        description: "A natural waterfall attraction surrounded by vegetation and local countryside scenery.",
        image: "bangag.webp"
    },
    {
        name: "Cangbagsa Marine Sanctuary",
        town: "Larena",
        category: "Marine",
        address: "Cangbagsa, Larena",
        description: "A community-managed marine sanctuary dedicated to protecting local marine resources.",
        image: "bagsa.jfif"
    },
    {
        name: "Butterfly Sanctuary",
        town: "Larena",
        category: "Nature Attraction",
        address: "Sitio Cabilao, Barangay Cang-Apa, Larena",
        description: "Butterfly Sanctuary is a garden filed with plants, flowers, and colorful butterlies flying around.",
        image: "baterply.jfif"
    },

    // ENRIQUE VILLANUEVA

    {
        name: "Tulapos Marine Sanctuary",
        town: "Enrique Villanueva",
        category: "Marine",
        address: "Tulapos, Enrique Villanueva",
        description: "One of the island's well-known marine conservation areas, featuring mangroves, coral reefs, and diverse marine life.",
        image: "tulapos.jpg"
    },
    {
        name: "Bitaug Marine Protected Area",
        town: "Enrique Villanueva",
        category: "Marine",
        address: "Bitaug, Enrique Villanueva",
        description: "A protected coastal area that supports the conservation of marine habitats and local biodiversity.",
        image: "bitaug.jfif"
    },
    {
        name: "Holy Mountain",
        town: "Enrique Villanueva",
        category: "Mountain",
        address: "Enrique Villanueva, Siquijor",
        description: "A local upland destination associated with the natural landscape of the municipality.",
        image: "holy.jfif"
    }

];

// GET HTML ELEMENTS

const destinationGrid = document.getElementById("destinationGrid");
const detailView = document.getElementById("detailView");
const searchInput = document.getElementById("searchInput");
const municipalityButtons = document.querySelectorAll(".municipality-btn");
const noResults = document.getElementById("noResults");
const destinationCount = document.getElementById("destinationCount");

let selectedTown = "All";

// DISPLAY DESTINATIONS

function displayDestinations(list) {

    destinationGrid.innerHTML = "";

    destinationCount.textContent =
        list.length + " destinations found";

    if (list.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    list.forEach(function(place) {

        const card = document.createElement("div");

        card.className = "destination-card";

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}"
                 onerror="this.style.display='none'">

            <div class="card-content">

                <span class="card-town">${place.town}</span>

                <h3>${place.name}</h3>

                <p>${place.description}</p>

            </div>
        `;

        card.addEventListener("click", function() {
            showDetails(place);
        });

        destinationGrid.appendChild(card);

    });

}

// SHOW DESTINATION DETAILS

function showDetails(place) {

    destinationGrid.style.display = "none";
    municipalityButtons.forEach(function(button) {
        button.style.display = "none";
    });

    searchInput.parentElement.style.display = "none";
    destinationCount.style.display = "none";
    noResults.style.display = "none";

    detailView.innerHTML = `

        <button class="back-btn" id="backButton">
            ← Back to Destinations
        </button>

        <img class="detail-image"
             src="${place.image}"
             alt="${place.name}"
             onerror="this.style.display='none'">

        <div class="detail-content">

            <span class="card-town">${place.town}</span>

            <h1>${place.name}</h1>

            <p>${place.description}</p>

            <div class="detail-info">

                <p><strong>Municipality:</strong> ${place.town}</p>

                <p><strong>Category:</strong> ${place.category}</p>

                <p><strong>Address:</strong> ${place.address}</p>
        <a
        class="map-btn"
        href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ', ' + place.address + ', Siquijor, Philippines')}"
        target="_blank"
        rel="noopener noreferrer"
    >
        View Location on Google Maps
    </a>

            </div>

        </div>
    `;

    detailView.classList.add("show");

    document.getElementById("backButton").addEventListener("click", function() {
        closeDetails();
    });

    window.scrollTo({
        top: document.getElementById("destinations").offsetTop - 20,
        behavior: "smooth"
    });

}

// CLOSE DETAILS

function closeDetails() {

    detailView.classList.remove("show");

    destinationGrid.style.display = "grid";

    municipalityButtons.forEach(function(button) {
        button.style.display = "inline-block";
    });

    searchInput.parentElement.style.display = "block";
    destinationCount.style.display = "block";

    filterDestinations();

}

// SEARCH DESTINATIONS

searchInput.addEventListener("input", function() {
    filterDestinations();
});

// MUNICIPALITY FILTER

municipalityButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        municipalityButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedTown = button.dataset.town;

        filterDestinations();

    });

});

// FILTER FUNCTION

function filterDestinations() {

    const searchText = searchInput.value.toLowerCase();

    const filtered = destinations.filter(function(place) {

        const matchesTown =
            selectedTown === "All" ||
            place.town === selectedTown;

        const matchesSearch =
            place.name.toLowerCase().includes(searchText) ||
            place.town.toLowerCase().includes(searchText) ||
            place.category.toLowerCase().includes(searchText) ||
            place.description.toLowerCase().includes(searchText);

        return matchesTown && matchesSearch;

    });

    displayDestinations(filtered);

}

// INITIAL DISPLAY

displayDestinations(destinations);
