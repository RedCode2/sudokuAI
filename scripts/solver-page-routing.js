import webpg_router from "./page-routing-data.json" assert { type: "json" };

document.getElementById('back_to_home_page_btn').addEventListener('click', function() {
    window.location.href = webpg_router["home"];
})