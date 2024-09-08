// // // Freelancer Database (mock data)
// // const freelancers = [
// //     { name: "Alice Johnson", place: "New York", skill: "Web Development", contact: "555-1234", instagram: "@alice.dev" },
// //     { name: "Bob Smith", place: "London", skill: "Graphic Designing", contact: "555-5678", instagram: "@bob.design" },
// //     { name: "Cathy Lee", place: "Berlin", skill: "SEO Specialist", contact: "555-8765", instagram: "@cathy_seo" },
// //     { name: "John Doe", place: "California", skill: "App Development", contact: "555-9123", instagram: "@john.appdev" },
// //     { name: "Jane Smith", place: "London, UK", skill: ["Graphic Designing", "Photoshop", "Illustrator"], contact: "+44-123-456-7890", instagram: "@janesmith" },
// //     { name: "Alex Lee", place: "Toronto, Canada", skill: ["Content Writing", "SEO", "Copywriting"], contact: "+1-416-555-1234", instagram: "@alexlee" },
// //     { name: "Bob Brown", place: "Sydney, Australia", skill: ["Web Developmement", "Python", "Django"], contact: "+61-2-1234-5678", instagram: "@bobbrown" },
// //     { name: "Emily Chen", place: "Beijing, China", skill: ["Graphic Designing", "UI/UX", "Figma"], contact: "+86-10-1234-5678", instagram: "@emilychen" },
// //     { name: "Michael Davis", place: "Los Angeles, USA", skill: ["Web Development", "JavaScript", "Angular"], contact: "+1-213-456-7890", instagram: "@michaeldavis" },
// //     { name: "Sophia Patel", place: "Mumbai, India", skill: ["Content Writing", "SEO", "Copywriting"], contact: "+91-22-1234-5678", instagram: "@sophiapatel" },
// //     { name: "Olivia Martin", place: "Paris, France", skill: ["Graphic Designing", "Photoshop", "Illustrator"], contact: "+33-1-234-5678", instagram: "@oliviamartin" },
// //     { name: "Madhav Saki", place: "Mumbai, India", skill: ["Python", "Web Development", "After Effects", "Video Editing"], contact: "+91 9126631687", instagram: "@saki.madhav" }
// // ];


// // Initializing freelancers array from localStorage or as empty
// let freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];

// // Ensuring JavaScript runs after the DOM has fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     // Checking if the form element exists
//     const form = document.getElementById("signupForm");
//     if (form) {
//         // Listening for form submission
//         form.addEventListener("submit", function (event) {
//             event.preventDefault(); // Prevent the default form submission

//             // Capturing the form data
//             const freelancer = {
//                 name: document.getElementById("fname").value,
//                 place: document.getElementById("place").value,
//                 skill: document.getElementById("skill").value,
//                 contact: document.getElementById("contact").value,
//                 instagram: document.getElementById("instagram").value,
//                 portfolio: document.getElementById("portfolio").value
//             };

//             // Adding the freelancer data to the freelancers array
//             freelancers.push(freelancer);

//             // Saving the updated freelancers array to localStorage
//             localStorage.setItem("freelancers", JSON.stringify(freelancers));

//             // Log the updated freelancers array (for debugging purposes)
//             console.log("Freelancers Array: ", freelancers);

//             // Showing a success message
//             alert("Freelancer added successfully!");

//             // Reseting the form after submission
//             form.reset();
//         });
//     } else {
//         console.error('Form element not found!');
//     }
// });

// const chatLog = document.getElementById("chat-log");

// // Check if chatLog is defined
// if (!chatLog) {
//     console.error("Chat log element not found");
//     // Handle the error or exit the script
// }

// // Define constants
// const LOADING_ANIMATION_DURATION = 1500; // in milliseconds

// // Handle user input and display response
// function handleUserInput() {
//     const input = document.getElementById('chat-input').value.trim().toLowerCase();
//     if (!input) return;

//     // Display user's message
//     displayMessage(input, 'user');

//     // Show loading animation
//     displayLoading();
//     console.log("Loading animation displayed");

//     // Simulate a slight delay before showing the chatbot response
//     setTimeout(() => {
//         // Find freelancers
//         let response = "Sorry, I couldn't find any freelancers for your request.";
//         let matchingFreelancers = [];
//         for (let freelancer of freelancers) {
//             if (Array.isArray(freelancer.skill)) {
//                 if (freelancer.skill.some(skill => input.includes(skill.toLowerCase())) || input.includes(freelancer.place.toLowerCase())) {
//                     matchingFreelancers.push(freelancer);
//                 }
//             } else {
//                 if (input.includes(freelancer.skill.toLowerCase()) || input.includes(freelancer.place.toLowerCase())) {
//                     matchingFreelancers.push(freelancer);
//                 }
//             }
//         }

//         if (matchingFreelancers.length > 0) {
//             response = "Found the following freelancers for you:\n\n";
//             for (let freelancer of matchingFreelancers) {
//                 response += `👤 Name: ${freelancer.name}\n📍 Location: ${freelancer.place}\n🛠️ Skill: ${Array.isArray(freelancer.skill) ? freelancer.skill.join(', ') : freelancer.skill}\n📞 Contact: ${freelancer.contact}\n🔗 Instagram: ${freelancer.instagram}\n\n`;
//             }
//         }

//         // Remove the loading animation
//         removeLoading();
//         console.log("Loading animation removed");

//         // Display bot response
//         displayMessage(response, 'bot');

//         // Clear input field
//         document.getElementById('chat-input').value = '';
//     }, LOADING_ANIMATION_DURATION);
// }

// // Display chat messages
// function displayMessage(message, sender) {
//     const messageDiv = document.createElement("div");
//     messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';

//     // If the message has line breaks, convert them to <br> for HTML display
//     messageDiv.innerHTML = message.replace(/\n/g, "<br>");

//     chatLog.appendChild(messageDiv);
//     chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to bottom
// }

// // Show loading animation
// function displayLoading() {
//     const loadingDiv = document.createElement("div");
//     loadingDiv.className = "loading";
//     loadingDiv.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;

//     chatLog.appendChild(loadingDiv);
// }

// // Remove loading animation
// function removeLoading() {
//     const loadingDiv = document.querySelector(".loading");
//     if (loadingDiv) {
//         loadingDiv.remove();
//     }
// }

// // Clear chat log and reset
// function clearChat() {
//     chatLog.innerHTML = ''; // Clear the chat log div
// }

// // Event listener for send button
// document.getElementById('send-btn').addEventListener('click', handleUserInput);

// // Event listener for clear chat button
// document.getElementById('clear-chat-btn').addEventListener('click', clearChat);

// //Adding click event listener to the span for redirecting to sign up page
// document.getElementById("redirect-btn1").addEventListener("click", function () {
//     window.location.href = "http://127.0.0.1:5500/signup.html";
// });

// //Adding click event listener to the span for shifting down to the chatbot
// document.getElementById("redirect-btn2").addEventListener("click", function () {
//     //Scroll smoothly to the target section
//     document.getElementById("chat-log").scrollIntoView({ behavior: 'smooth' });
// });



