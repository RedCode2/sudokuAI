import webpg_router from "./page-routing-data.json" assert { type: "json" };

document.getElementById("solver_open_log_window_btn").addEventListener('click', function() {
    window.location.href = webpg_router["solver_log"];
})