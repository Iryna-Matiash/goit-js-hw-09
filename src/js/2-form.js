const formData = {
    email: "",
    message: "" 

}

const form = document.querySelector(".feedback-form");

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
        formData.email = savedData.email;
        formData.message = savedData.message;
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }

form.addEventListener("input", (event) => {
    event.preventDefault(); 

    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();  
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

   
    console.log(formData);


    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.elements.email.value = "";
    form.elements.message.value = "";
});
