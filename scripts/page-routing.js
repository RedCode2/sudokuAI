import page_router from "./page-routing-data.json" assert { type: "json" };

document.getElementById("goto-pg_solve").addEventListener('click', function() {
    window.location.href = page_router["solve"];
})
document.getElementById("goto-pg_generate").addEventListener('click', function() {
    window.location.href = page_router["generate"];
})