// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "All fields are required!";
    formMsg.style.color = "#ff4757";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Please enter a valid email!";
    formMsg.style.color = "#ff6b81";
    return;
  }

  formMsg.textContent = "Form submitted successfully!";
  formMsg.style.color = "#2ed573";
  this.reset();
});

// To-Do List Functions
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => li.remove(); // click to delete
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
