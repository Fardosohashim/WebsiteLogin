const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
formcloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwshowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formcloseBtn.addEventListener("click", () => home.classList.remove("show"));



pwshowHide.forEach(icon => {
    let getPwInput = icon.parentElement.querySelectorAll("input");
    /*console.log(getPwInput);*/
    if(getPwInput.type === "password"){
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
})



signupBtn.addEventListener("click", (e) => {
e.preventDefault();
formcontainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.remove("active");
});







