var feedback = document.querySelector(".feedback-btn");

var popup = document.querySelector(".modal-feedback");

var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".modal-close");
            
var form = popup.querySelector("form");
            
var username = popup.querySelector("[name=feedback-name]");  
var email = popup.querySelector("[name=feedback-email]");  
var user_feedback = popup.querySelector("[name=feedback-text]");  

var storage_username = localStorage.getItem("feedback-name");
var storage_email = localStorage.getItem("feedback-email");

feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay");

    if (storage_username) {
        username.value = storage_username;
        email.focus();
    }

    if (storage_email) {
        email.value = storage_email;
        user_feedback.focus();
    }
});

close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !user_feedback.value) {
        evt.preventDefault();
        console.log("Введите имя, электронную почту и напишите отзыв");
        popup.classList.add("modal-error");
    }
    else {
        localStorage.setItem("feedback-name", username.value);
        localStorage.setItem("feedback-email", email.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
            }
        if (overlay.classList.contains("overlay")) {
                overlay.classList.remove("overlay");
            }
    }
});