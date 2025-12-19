const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signinButton = document.getElementById("signin-button");

// dummy user
const currentUser = {
  email: "admin@gmail.com",
  password: "Admin@1234",
};

// function <------ to sign in user
const signInUser = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (emailPattern.test(email) && strongPasswordRegex.test(password)) {
    if (email == currentUser.email && password == currentUser.password) {
      alert("sign in successfully !");
      signinButton.href = "quiz.html";
    } else {
      alert("wrong email or password!");
    }
  } else {
    alert(" invalid credential! ");
  }
};

signinButton.addEventListener("click", signInUser);
