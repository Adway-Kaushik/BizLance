// Initializing freelancers array from localStorage or as empty
let freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];

// Ensuring JavaScript runs after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Checking if the form element exists
    const form = document.getElementById("signupForm");
    if (form) {
        // Listening for form submission
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Capturing the form data
            const freelancer = {
                name: document.getElementById("fname").value,
                place: document.getElementById("place").value,
                skill: document.getElementById("skill").value,
                contact: document.getElementById("contact").value,
                instagram: document.getElementById("instagram").value,
                portfolio: document.getElementById("portfolio").value
            };

            // Adding the freelancer data to the freelancers array
            freelancers.push(freelancer);

            // Saving the updated freelancers array to localStorage
            localStorage.setItem("freelancers", JSON.stringify(freelancers));

            // Show a success message
            alert("Freelancer added successfully!");

            // Reset the form after submission
            form.reset();
        });
    } else {
        console.error('Form element not found!');
    }

    // Handle user input and display response
    function handleUserInput() {
        const input = document.getElementById('chat-input').value.trim().toLowerCase();
        if (!input) return;

        // Display user's message
        displayMessage(input, 'user');

        // Show loading animation
        displayLoading();

        // Simulate a slight delay before showing the chatbot response
        setTimeout(() => {
            let response = "Sorry, I couldn't find any freelancers for your request.";
            let matchingFreelancers = freelancers.filter(freelancer => {
                const skills = Array.isArray(freelancer.skill) ? freelancer.skill : [freelancer.skill];
                return skills.some(skill => input.includes(skill.toLowerCase())) || input.includes(freelancer.place.toLowerCase());
            });

            if (matchingFreelancers.length > 0) {
                response = "Found the following freelancers for you:\n\n";
                response += matchingFreelancers.map(freelancer => `👤 Name: ${freelancer.name}\n📍 Location: ${freelancer.place}\n🛠️ Skill: ${Array.isArray(freelancer.skill) ? freelancer.skill.join(', ') : freelancer.skill}\n📞 Contact: ${freelancer.contact}\n🔗 Instagram: ${freelancer.instagram}\n\n`).join('');
            }

            // Remove the loading animation
            removeLoading();

            // Display bot response
            displayMessage(response, 'bot');

            // Clear input field
            document.getElementById('chat-input').value = '';
        }, 1500); // 1500ms delay
    }

    // Display chat messages
    function displayMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        messageDiv.innerHTML = message.replace(/\n/g, "<br>");
        document.getElementById("chat-log").appendChild(messageDiv).scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // Show loading animation
    function displayLoading() {
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "loading";
        loadingDiv.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
        document.getElementById("chat-log").appendChild(loadingDiv);
    }

    // Remove loading animation
    function removeLoading() {
        const loadingDiv = document.querySelector(".loading");
        if (loadingDiv) loadingDiv.remove();
    }

    // Clear chat log and reset
    function clearChat() {
        document.getElementById("chat-log").innerHTML = '';
    }

    // Event listeners
    document.getElementById('send-btn').addEventListener('click', handleUserInput);
    document.getElementById('clear-chat-btn').addEventListener('click', clearChat);
    document.getElementById("redirect-btn1").addEventListener("click", () => window.location.href = "http://127.0.0.1:5500/signup.html");
    document.getElementById("redirect-btn2").addEventListener("click", () => document.getElementById("chat-log").scrollIntoView({ behavior: 'smooth' }));
});
