function on(){
    //display the overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    //turn off the vertical scroll
    const overlay = document.querySelector("body");
    overlay.style.overflow = "hidden";
}

function off(){
    //hide the overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    //turn on the vertical scroll
    const overlay = document.querySelector("body");
    overlay.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", 
    function() {
        const toggleBtns = document.querySelectorAll(".toggle-btn");
        toggleBtns.forEach(
            function(btn) {
                btn.addEventListener("click", 
                    function() {
                        const item = btn.closest(".food-item");
                        const shortDesc = item.querySelector(".short-desc");
                        const longDesc = item.querySelector(".long-desc");
                        if (longDesc.style.display === "none") {
                            shortDesc.style.display = "none";
                            longDesc.style.display = "block";
                            btn.textContent = "Show Less";
                        } else {
                            shortDesc.style.display = "block";
                            longDesc.style.display = "none";
                            btn.textContent = "Read More";
                        }
                    }
                );
            }
        );
    }
);
