document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen dengan class css-19n97h2
    const elements = document.querySelectorAll(".css-19n97h2");

    // Pasang event listener click di setiap elemen
    elements.forEach(function (el) {
        el.addEventListener("click", function () {
            alert("Elemen dengan class css-19n97h2 diklik!");
        });
    });
});
