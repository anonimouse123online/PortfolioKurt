document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("zcrVLqTwIKDds8jE4"); // Initialize EmailJS with your public key

    document.getElementById("contact-form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let statusMessage = document.getElementById("status-message");

        // Validate form fields
        if (!name || !email || !message) {
            statusMessage.innerText = "❌ Please fill out all fields.";
            statusMessage.style.color = "red";
            return;
        }

        let params = {
            title: "New Contact Form Submission",
            name: name,
            email: email,
            message: message,
            time: new Date().toLocaleString(),
        };

        try {
            let response = await emailjs.send("service_z08e5dn", "template_nc6q9vb", params);
            console.log("✅ Email sent successfully!", response);

            statusMessage.innerText = "✅ Message sent successfully!";
            statusMessage.style.color = "green";

            // Reset form fields after sending
            document.getElementById("contact-form").reset();

        } catch (error) {
            console.error("❌ Email error:", error);
            statusMessage.innerText = "❌ Failed to send message. Please try again.";
            statusMessage.style.color = "red";
        }
    });
});
function openModal() {
    document.getElementById("cert-modal").style.display = "block";
    document.getElementById("full-cert").src = document.getElementById("cert-img").src;
}

function closeModal() {
    document.getElementById("cert-modal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".project img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.textContent = "×";
    lightbox.appendChild(closeButton);

    images.forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});