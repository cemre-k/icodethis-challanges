document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", function (e) {
        e.preventDefault();

         
         
        const isVisible = dropdown.classList.contains("visible");

        
        
        document.querySelectorAll(".dropdown.visible").forEach(function (openDropdown) {
            openDropdown.classList.remove("visible");
        });


        if (!isVisible) {
            dropdown.classList.add("visible");
        }
    });
});