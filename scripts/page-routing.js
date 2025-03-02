import webpg_router from "./page-routing-data.json" assert { type: "json" };

document.getElementById("goto-pg_solve").addEventListener('click', function() {
    window.location.href = webpg_router["solve"];
})
document.getElementById("goto-pg_generate").addEventListener('click', function() {
    window.location.href = webpg_router["generate"];
})
document.getElementById("goto-pg_settings").addEventListener('click', function() {
    window.location.href = webpg_router["settings"];
});
