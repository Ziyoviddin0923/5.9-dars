const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
        name: form.name.value,
        phoneNumber: form["phone-number"].value,
        userImage: form.image.value,
        email: form.email.value,
    };
    console.log(newUser);
});

