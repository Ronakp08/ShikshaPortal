function validation(event) {
    // Prevent form from submitting and causing a page reload
    event.preventDefault();
  
    console.log("Signup form submitted"); // Debugging line

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
  
    // Validate required fields
    if (firstname === "") {
      alert("Firstname is required");
      return false;
    }
    if (lastname === "") {
      alert("Lastname is required");
      return false;
    }
    if (gender === "" || gender === "gender") {
      alert("Gender is required");
      return false;
    }
    if (city === "") {
      alert("City is required");
      return false;
    }
  
    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return false;
    }
  
    // Validate password complexity
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (password === "" || confirmpassword === "") {
      alert("Password and Confirm Password are required");
      return false;
    }
    if (!passwordPattern.test(password)) {
      alert("Password must have at least 8 characters, one uppercase, one number, and one special character");
      return false;
    }
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // Store email and password in localStorage after successful validation
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    alert("Registered Successfully");
    document.getElementById("signup-popup").style.display = "none";
    document.getElementById("signup-form").reset();
  
    return true;
}

function loginValidation(event) {
    event.preventDefault(); // Prevent form submission and page reload
    console.log("Login form submitted"); // Debugging line
  
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        alert("Username and Password are required.");
        return false;
    }
  
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (username !== storedEmail || password !== storedPassword) {
        alert("Invalid username or password.");
        return false;
    }

    alert("Login successful!");
    closeLoginPopup(); // Close the popup after successful login
    return true;
}

function openLoginPopup() {
    document.getElementById("login-popup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("login-popup").style.display = "none";
}

function closeSignupPopup() {
    document.getElementById("signup-popup").style.display = "none";
}
